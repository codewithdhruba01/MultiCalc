import { useState, useEffect } from 'react'
import { Button } from '../ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card'
import { evaluate } from 'mathjs'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/Tabs'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function ScientificCalculator() {
  const [display, setDisplay] = useState('0')
  const [memory, setMemory] = useState<number | null>(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)
  const [clearAll, setClearAll] = useState(true)
  const [history, setHistory] = useState<string[]>([])
  const [isRadians, setIsRadians] = useState(true)

  useEffect(() => {
        AOS.init({ duration: 800, once: true })
      }, [])

  const handleDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit)
      setWaitingForOperand(false)
    } else {
      setDisplay(display === '0' ? digit : display + digit)
    }
    setClearAll(false)
  }

  const handleDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.')
      setWaitingForOperand(false)
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.')
    }
    setClearAll(false)
  }

  const handleOperator = (operator: string) => {
    try {
      if (waitingForOperand) {
        setDisplay(display + operator)
      } else {
        setDisplay(display + operator)
        setWaitingForOperand(false)
      }
      setClearAll(false)
    } catch (error) {
      setDisplay('Error')
    }
  }

  const handleEquals = () => {
    try {
      const result = evaluate(display)
      const newHistory = [...history, `${display} = ${result}`]
      if (newHistory.length > 10) newHistory.shift()
      
      setHistory(newHistory)
      setDisplay(String(result))
      setWaitingForOperand(true)
    } catch (error) {
      setDisplay('Error')
    }
  }

  const handleClear = () => {
    if (clearAll) {
      setDisplay('0')
      setHistory([])
    } else {
      setDisplay('0')
      setClearAll(true)
    }
    setWaitingForOperand(false)
  }

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1))
    } else {
      setDisplay('0')
    }
  }

  const handleFunction = (func: string) => {
    try {
      let result: number
      const x = parseFloat(display)
      
      switch (func) {
        case 'sin':
          result = isRadians ? Math.sin(x) : Math.sin(x * Math.PI / 180)
          break
        case 'cos':
          result = isRadians ? Math.cos(x) : Math.cos(x * Math.PI / 180)
          break
        case 'tan':
          result = isRadians ? Math.tan(x) : Math.tan(x * Math.PI / 180)
          break
        case 'log':
          result = Math.log10(x)
          break
        case 'ln':
          result = Math.log(x)
          break
        case 'sqrt':
          result = Math.sqrt(x)
          break
        case 'square':
          result = x * x
          break
        case 'exp':
          result = Math.exp(x)
          break
        case 'fact':
          if (x < 0 || !Number.isInteger(x)) throw new Error()
          result = factorial(x)
          break
        case 'inv':
          result = 1 / x
          break
        default:
          throw new Error()
      }
      
      setDisplay(String(result))
      setWaitingForOperand(true)
    } catch (error) {
      setDisplay('Error')
    }
  }

  const factorial = (n: number): number => {
    if (n <= 1) return 1
    return n * factorial(n - 1)
  }

  const handleMemoryOperation = (operation: string) => {
    const value = parseFloat(display)
    
    switch (operation) {
      case 'MC':
        setMemory(null)
        break
      case 'MR':
        if (memory !== null) {
          setDisplay(String(memory))
          setWaitingForOperand(true)
        }
        break
      case 'M+':
        setMemory((memory || 0) + value)
        setWaitingForOperand(true)
        break
      case 'M-':
        setMemory((memory || 0) - value)
        setWaitingForOperand(true)
        break
    }
  }

  const toggleAngleMode = () => {
    setIsRadians(!isRadians)
  }

  return (
    <Card className="w-full max-w-xl mx-auto" data-aos="zoom-in">
      <CardHeader>
        <CardTitle className="text-center font-synonym font-bold">Scientific Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="calculator">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="calculator">Calculator</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          
          <TabsContent>
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-md text-right">
                <div className="text-xs text-muted-foreground mb-1">
                  {memory !== null ? `M: ${memory}` : ''}
                  <span className="ml-2">{isRadians ? 'RAD' : 'DEG'}</span>
                </div>
                <div className="text-3xl font-medium truncate">{display}</div>
              </div>
              
              <div className="grid grid-cols-5 gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleMemoryOperation('MC')}
                >
                  MC
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleMemoryOperation('MR')}
                >
                  MR
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleMemoryOperation('M+')}
                >
                  M+
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleMemoryOperation('M-')}
                >
                  M-
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={toggleAngleMode}
                >
                  {isRadians ? 'RAD' : 'DEG'}
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleFunction('sin')}
                >
                  sin
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleFunction('cos')}
                >
                  cos
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleFunction('tan')}
                >
                  tan
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleFunction('log')}
                >
                  log
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleFunction('ln')}
                >
                  ln
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleFunction('sqrt')}
                >
                  √
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleFunction('square')}
                >
                  x²
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleFunction('exp')}
                >
                  eˣ
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleFunction('fact')}
                >
                  n!
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleFunction('inv')}
                >
                  1/x
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleClear}
                >
                  {clearAll ? 'AC' : 'C'}
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleBackspace}
                >
                  ⌫
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleOperator('(')}
                >
                  (
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleOperator(')')}
                >
                  )
                </Button>
                <Button 
                  variant="calculator" 
                  size="sm" 
                  onClick={() => handleOperator('/')}
                  className="bg-amber-500 hover:bg-amber-600 text-white"
                >
                  ÷
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleDigit('7')}
                >
                  7
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleDigit('8')}
                >
                  8
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleDigit('9')}
                >
                  9
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleOperator('^')}
                >
                  xʸ
                </Button>
                <Button 
                  variant="calculator" 
                  size="sm" 
                  onClick={() => handleOperator('*')}
                  className="bg-amber-500 hover:bg-amber-600 text-white"
                >
                  ×
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleDigit('4')}
                >
                  4
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleDigit('5')}
                >
                  5
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleDigit('6')}
                >
                  6
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleOperator('%')}
                >
                  %
                </Button>
                <Button 
                  variant="calculator" 
                  size="sm" 
                  onClick={() => handleOperator('-')}
                  className="bg-amber-500 hover:bg-amber-600 text-white"
                >
                  -
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleDigit('1')}
                >
                  1
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleDigit('2')}
                >
                  2
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleDigit('3')}
                >
                  3
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleOperator('pi')}
                >
                  π
                </Button>
                <Button 
                  variant="calculator" 
                  size="sm" 
                  onClick={() => handleOperator('+')}
                  className="bg-amber-500 hover:bg-amber-600 text-white"
                >
                  +
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleDigit('0')}
                  className="col-span-2"
                >
                  0
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleDecimal}
                >
                  .
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleDigit('e')}
                >
                  e
                </Button>
                <Button 
                  variant="calculator" 
                  size="sm" 
                  onClick={handleEquals}
                  className="bg-amber-500 hover:bg-amber-600 text-white"
                >
                  =
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent>
            <div className="bg-muted p-4 rounded-md h-80 overflow-y-auto">
              {history.length === 0 ? (
                <p className="text-center text-muted-foreground">No calculation history yet</p>
              ) : (
                <ul className="space-y-2">
                  {history.map((item, index) => (
                    <li key={index} className="p-2 border-b border-border/40 last:border-0">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}