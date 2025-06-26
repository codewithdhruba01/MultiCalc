import { Routes, Route } from 'react-router-dom'
import Layout from './components/layouts/Layout'
import Home from './pages/Home'
import BasicCalculators from './pages/BasicCalculators'
import FinancialCalculators from './pages/FinancialCalculators'
import HealthCalculators from './pages/HealthCalculators'
import MathCalculators from './pages/MathCalculators'
import DetailedAgeCalculator from './pages/DetailedAgeCalculator'
import About from './pages/About'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="basic-calculators" element={<BasicCalculators />} />
        <Route path="financial-calculators" element={<FinancialCalculators />} />
        <Route path="health-calculators" element={<HealthCalculators />} />
        <Route path="math-calculators" element={<MathCalculators />} />
        <Route path="age-calculator" element={<DetailedAgeCalculator />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  )
}

export default App