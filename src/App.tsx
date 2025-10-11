import { Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import Home from './pages/Home';
import BasicCalculators from './pages/BasicCalculators';
import MarksCalculators from './pages/MarksCalculators';
import FinancialCalculators from './pages/FinancialCalculators';
import HealthCalculators from './pages/HealthCalculators';
import AdvanceCalculators from './pages/AdvanceCalculators';
import CurrencyConverter from './pages/CurrencyConverter';
import SalaryCalculator from './pages/SalaryCalculator';
import DetailedAgeCalculator from './pages/DetailedAgeCalculator';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      {/* Main App Routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="basic-calculators" element={<BasicCalculators />} />
        <Route
          path="financial-calculators"
          element={<FinancialCalculators />}
        />
        <Route path="/marks-calculators" element={<MarksCalculators />} />
        <Route path="health-calculators" element={<HealthCalculators />} />
        <Route path="advance-calculators" element={<AdvanceCalculators />} />
        <Route path="currency-converter" element={<CurrencyConverter />} />
        <Route path="salary-calculator" element={<SalaryCalculator />} />
        <Route path="age-calculator" element={<DetailedAgeCalculator />} />
        <Route path="about" element={<About />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-of-service" element={<TermsOfService />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
