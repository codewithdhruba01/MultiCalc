import { useState, useEffect } from 'react'
import { Button } from '../ui/Button'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card'
import { evaluate } from 'mathjs'

export default function BasicCalculator() {
  useEffect(() => {
          // Scroll to top when page loads
          window.scrollTo(0, 0)
      
          // Initialize AOS
          AOS.init({
            duration: 800,
            once: true,
          })
        }, [])
  const [display, setDisplay] = useState('0')
  const [storedValue, setStoredValue] = useState<string | null>(null)
  const [currentOperation, setCurrentOperation] = useState<string | null>(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)
  const [clearAll, setClearAll] = useState(true)

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
    if (currentOperation && storedValue !== null) {
      try {
        const result = evaluate(`${storedValue} ${currentOperation} ${display}`)
        setDisplay(String(result))
        setStoredValue(String(result))
      } catch (error) {
        setDisplay('Error')
        setStoredValue(null)
        setCurrentOperation(null)
      }
    } else {
      setStoredValue(display)
    }
    setCurrentOperation(operator)
    setWaitingForOperand(true)
  }

  const handleEquals = () => {
    if (currentOperation && storedValue !== null) {
      try {
        const result = evaluate(`${storedValue} ${currentOperation} ${display}`)
        setDisplay(String(result))
        setStoredValue(null)
        setCurrentOperation(null)
        setWaitingForOperand(true)
      } catch (error) {
        setDisplay('Error')
        setStoredValue(null)
        setCurrentOperation(null)
      }
    }
  }

  const handleClear = () => {
    if (clearAll) {
      setDisplay('0')
      setStoredValue(null)
      setCurrentOperation(null)
    } else {
      setDisplay('0')
      setClearAll(true)
    }
  }

  const handlePlusMinus = () => {
    const value = parseFloat(display)
    setDisplay(String(-value))
  }

  const handlePercent = () => {
    const value = parseFloat(display)
    setDisplay(String(value / 100))
  }

  return (
    <Card className="w-full max-w-md mx-auto" data-aos="zoom-in">
      <CardHeader>
        <CardTitle className="text-center">Basic Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-muted p-4 rounded-md mb-4 text-right">
          <div className="text-3xl font-medium truncate">{display}</div>
        </div>
        
        <div className="grid grid-cols-4 gap-2">
          <Button 
            variant="outline" 
            size="calc" 
            onClick={handleClear}
          >
            {clearAll ? 'AC' : 'C'}
          </Button>
          <Button 
            variant="outline" 
            size="calc" 
            onClick={handlePlusMinus}
          >
            +/-
          </Button>
          <Button 
            variant="outline" 
            size="calc" 
            onClick={handlePercent}
          >
            %
          </Button>
          <Button 
            variant="calculator" 
            size="calc" 
            onClick={() => handleOperator('/')}
            className="bg-amber-500 hover:bg-amber-600 text-white"
          >
            ÷
          </Button>
          
          <Button 
            variant="outline" 
            size="calc" 
            onClick={() => handleDigit('7')}
          >
            7
          </Button>
          <Button 
            variant="outline" 
            size="calc" 
            onClick={() => handleDigit('8')}
          >
            8
          </Button>
          <Button 
            variant="outline" 
            size="calc" 
            onClick={() => handleDigit('9')}
          >
            9
          </Button>
          <Button 
            variant="calculator" 
            size="calc" 
            onClick={() => handleOperator('*')}
            className="bg-amber-500 hover:bg-amber-600 text-white"
          >
            ×
          </Button>
          
          <Button 
            variant="outline" 
            size="calc" 
            onClick={() => handleDigit('4')}
          >
            4
          </Button>
          <Button 
            variant="outline" 
            size="calc" 
            onClick={() => handleDigit('5')}
          >
            5
          </Button>
          <Button 
            variant="outline" 
            size="calc" 
            onClick={() => handleDigit('6')}
          >
            6
          </Button>
          <Button 
            variant="calculator" 
            size="calc" 
            onClick={() => handleOperator('-')}
            className="bg-amber-500 hover:bg-amber-600 text-white"
          >
            -
          </Button>
          
          <Button 
            variant="outline" 
            size="calc" 
            onClick={() => handleDigit('1')}
          >
            1
          </Button>
          <Button 
            variant="outline" 
            size="calc" 
            onClick={() => handleDigit('2')}
          >
            2
          </Button>
          <Button 
            variant="outline" 
            size="calc" 
            onClick={() => handleDigit('3')}
          >
            3
          </Button>
          <Button 
            variant="calculator" 
            size="calc" 
            onClick={() => handleOperator('+')}
            className="bg-amber-500 hover:bg-amber-600 text-white"
          >
            +
          </Button>
          
          <Button 
            variant="outline" 
            size="calc" 
            onClick={() => handleDigit('0')}
            className="col-span-2"
          >
            0
          </Button>
          <Button 
            variant="outline" 
            size="calc" 
            onClick={handleDecimal}
          >
            .
          </Button>
          <Button 
            variant="calculator" 
            size="calc" 
            onClick={handleEquals}
            className="bg-amber-500 hover:bg-amber-600 text-white"
          >
            =
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}