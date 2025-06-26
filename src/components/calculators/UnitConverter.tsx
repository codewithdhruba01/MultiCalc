import { useState } from 'react'
import { Button } from '../ui/Button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/Card'
import { Input } from '../ui/Input'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/Tabs'

// Conversion factors
const conversions = {
  length: {
    meter: 1,
    kilometer: 0.001,
    centimeter: 100,
    millimeter: 1000,
    mile: 0.000621371,
    yard: 1.09361,
    foot: 3.28084,
    inch: 39.3701
  },
  weight: {
    kilogram: 1,
    gram: 1000,
    milligram: 1000000,
    metric_ton: 0.001,
    pound: 2.20462,
    ounce: 35.274,
    stone: 0.157473
  },
  volume: {
    liter: 1,
    milliliter: 1000,
    cubic_meter: 0.001,
    gallon_us: 0.264172,
    quart_us: 1.05669,
    pint_us: 2.11338,
    cup_us: 4.22675,
    fluid_ounce_us: 33.814,
    tablespoon_us: 67.628,
    teaspoon_us: 202.884
  },
  temperature: {
    celsius: 'celsius',
    fahrenheit: 'fahrenheit',
    kelvin: 'kelvin'
  },
  area: {
    square_meter: 1,
    square_kilometer: 0.000001,
    square_centimeter: 10000,
    square_millimeter: 1000000,
    square_mile: 3.861e-7,
    square_yard: 1.19599,
    square_foot: 10.7639,
    square_inch: 1550,
    acre: 0.000247105,
    hectare: 0.0001
  },
  time: {
    second: 1,
    millisecond: 1000,
    minute: 1/60,
    hour: 1/3600,
    day: 1/86400,
    week: 1/604800,
    month: 1/2592000,
    year: 1/31536000
  }
}

type ConversionCategory = keyof typeof conversions
type UnitType<T extends ConversionCategory> = keyof typeof conversions[T]

export default function UnitConverter() {
  const [category, setCategory] = useState<ConversionCategory>('length')
  const [fromUnit, setFromUnit] = useState<string>('meter')
  const [toUnit, setToUnit] = useState<string>('centimeter')
  const [fromValue, setFromValue] = useState<string>('')
  const [toValue, setToValue] = useState<string>('')

  const handleCategoryChange = (newCategory: ConversionCategory) => {
    setCategory(newCategory)
    
    // Set default units for the new category
    const units = Object.keys(conversions[newCategory])
    setFromUnit(units[0])
    setToUnit(units[1])
    
    // Clear values
    setFromValue('')
    setToValue('')
  }

  const convert = () => {
    if (!fromValue || isNaN(parseFloat(fromValue))) {
      setToValue('')
      return
    }

    const value = parseFloat(fromValue)
    
    if (category === 'temperature') {
      setToValue(convertTemperature(value, fromUnit as UnitType<'temperature'>, toUnit as UnitType<'temperature'>).toFixed(2))
    } else {
      // For other categories, convert to base unit then to target unit
      const baseUnitValue = value / (conversions[category][fromUnit as keyof typeof conversions[typeof category]] as number)
      const targetValue = baseUnitValue * (conversions[category][toUnit as keyof typeof conversions[typeof category]] as number)
      setToValue(targetValue.toFixed(4))
    }
  }

  const convertTemperature = (value: number, from: UnitType<'temperature'>, to: UnitType<'temperature'>): number => {
    // First convert to Celsius as base
    let celsius: number
    
    switch (from) {
      case 'celsius':
        celsius = value
        break
      case 'fahrenheit':
        celsius = (value - 32) * 5/9
        break
      case 'kelvin':
        celsius = value - 273.15
        break
      default:
        celsius = value
    }
    
    // Then convert from Celsius to target
    switch (to) {
      case 'celsius':
        return celsius
      case 'fahrenheit':
        return celsius * 9/5 + 32
      case 'kelvin':
        return celsius + 273.15
      default:
        return celsius
    }
  }

  const handleSwap = () => {
    const tempUnit = fromUnit
    setFromUnit(toUnit)
    setToUnit(tempUnit)
    
    const tempValue = fromValue
    setFromValue(toValue)
    setToValue(tempValue)
  }

  const handleReset = () => {
    setFromValue('')
    setToValue('')
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Unit Converter</CardTitle>
        <CardDescription className="text-center">
          Convert between different units of measurement
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Tabs for selecting conversion category */}
        <div className="mb-4">
          <div className="grid grid-cols-3 mb-4">
            <button
              className={`px-4 py-2 rounded ${category === 'length' ? 'bg-primary text-white' : 'bg-background'}`}
              onClick={() => handleCategoryChange('length')}
              type="button"
            >
              Length
            </button>
            <button
              className={`px-4 py-2 rounded ${category === 'weight' ? 'bg-primary text-white' : 'bg-background'}`}
              onClick={() => handleCategoryChange('weight')}
              type="button"
            >
              Weight
            </button>
            <button
              className={`px-4 py-2 rounded ${category === 'volume' ? 'bg-primary text-white' : 'bg-background'}`}
              onClick={() => handleCategoryChange('volume')}
              type="button"
            >
              Volume
            </button>
          </div>
          <div className="grid grid-cols-3">
            <button
              className={`px-4 py-2 rounded ${category === 'temperature' ? 'bg-primary text-white' : 'bg-background'}`}
              onClick={() => handleCategoryChange('temperature')}
              type="button"
            >
              Temperature
            </button>
            <button
              className={`px-4 py-2 rounded ${category === 'area' ? 'bg-primary text-white' : 'bg-background'}`}
              onClick={() => handleCategoryChange('area')}
              type="button"
            >
              Area
            </button>
            <button
              className={`px-4 py-2 rounded ${category === 'time' ? 'bg-primary text-white' : 'bg-background'}`}
              onClick={() => handleCategoryChange('time')}
              type="button"
            >
              Time
            </button>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="fromUnit" className="block text-sm font-medium mb-1">
                From
              </label>
              <select
                id="fromUnit"
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
              >
                {Object.keys(conversions[category]).map((unit) => (
                  <option key={unit} value={unit}>
                    {unit.replace(/_/g, ' ')}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="toUnit" className="block text-sm font-medium mb-1">
                To
              </label>
              <select
                id="toUnit"
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
              >
                {Object.keys(conversions[category]).map((unit) => (
                  <option key={unit} value={unit}>
                    {unit.replace(/_/g, ' ')}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="fromValue" className="block text-sm font-medium mb-1">
                Value
              </label>
              <Input
                id="fromValue"
                type="number"
                placeholder="Enter value"
                value={fromValue}
                onChange={(e) => {
                  setFromValue(e.target.value)
                  if (e.target.value) {
                    convert()
                  } else {
                    setToValue('')
                  }
                }}
              />
            </div>
            
            <div>
              <label htmlFor="toValue" className="block text-sm font-medium mb-1">
                Result
              </label>
              <Input
                id="toValue"
                type="text"
                readOnly
                value={toValue}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <Button 
              onClick={convert} 
              disabled={!fromValue}
            >
              Convert
            </Button>
            <Button 
              variant="outline" 
              onClick={handleSwap}
            >
              Swap
            </Button>
            <Button 
              variant="outline" 
              onClick={handleReset}
            >
              Reset
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}