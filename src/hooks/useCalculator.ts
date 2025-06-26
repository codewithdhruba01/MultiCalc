import { useState } from 'react'

interface CalculatorState {
  input: string
  result: string | null
  error: string | null
  history: string[]
}

export function useCalculator() {
  const [state, setState] = useState<CalculatorState>({
    input: '',
    result: null,
    error: null,
    history: []
  })

  const setInput = (input: string) => {
    setState(prev => ({ ...prev, input, error: null }))
  }

  const appendToInput = (value: string) => {
    setState(prev => ({ ...prev, input: prev.input + value, error: null }))
  }

  const clearInput = () => {
    setState(prev => ({ ...prev, input: '', error: null }))
  }

  const clearAll = () => {
    setState({
      input: '',
      result: null,
      error: null,
      history: []
    })
  }

  const setResult = (result: string) => {
    setState(prev => ({
      ...prev,
      result,
      history: [...prev.history, `${prev.input} = ${result}`].slice(-10) // Keep last 10 entries
    }))
  }

  const setError = (error: string) => {
    setState(prev => ({ ...prev, error }))
  }

  return {
    state,
    setInput,
    appendToInput,
    clearInput,
    clearAll,
    setResult,
    setError
  }
}