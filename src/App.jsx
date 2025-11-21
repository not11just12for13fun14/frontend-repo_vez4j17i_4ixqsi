import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Dashboard from './components/Dashboard'
import Market from './components/Market'
import Wallet from './components/Wallet'

function Home() {
  return (
    <>
      <Hero />
      <section className="container mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800/60 border border-white/10 rounded-xl p-6 text-white">
            <h3 className="text-xl font-semibold">Invest in cars</h3>
            <p className="text-slate-300 mt-2">Buy fractional shares. 10 shares = 1 car.</p>
            <Link to="/market" className="inline-block mt-4 bg-red-500 hover:bg-red-600 text-white rounded px-4 py-2">Explore</Link>
          </div>
          <div className="bg-slate-800/60 border border-white/10 rounded-xl p-6 text-white">
            <h3 className="text-xl font-semibold">Earn monthly income</h3>
            <p className="text-slate-300 mt-2">Receive rental distributions into your wallet.</p>
            <Link to="/dashboard" className="inline-block mt-4 bg-red-500 hover:bg-red-600 text-white rounded px-4 py-2">View Dashboard</Link>
          </div>
          <div className="bg-slate-800/60 border border-white/10 rounded-xl p-6 text-white">
            <h3 className="text-xl font-semibold">Exit and trade</h3>
            <p className="text-slate-300 mt-2">Request exits or trade shares on the secondary market.</p>
            <a href="#secondary" className="inline-block mt-4 bg-red-500 hover:bg-red-600 text-white rounded px-4 py-2">Learn more</a>
          </div>
        </div>
      </section>
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/market" element={<Market />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </div>
  )
}

export default App
