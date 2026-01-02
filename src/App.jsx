import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from './contexts/ThemeContext';
import Home from './pages/home'
import Privacy from './pages/privacy'
import Cookies from './pages/cookies'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingCTA from './components/sections/FloatingCTA';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>
        <Footer />
        <FloatingCTA />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
