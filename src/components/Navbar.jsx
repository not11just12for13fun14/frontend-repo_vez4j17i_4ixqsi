import { Menu, Bell, User, Car, Wallet } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Car className="text-red-400" />
          <Link to="/" className="text-white font-semibold">DriveShare Capital</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="text-slate-200 hover:text-white">Dashboard</Link>
          <Link to="/market" className="text-slate-200 hover:text-white">Marketplace</Link>
          <Link to="/admin" className="text-slate-200 hover:text-white">Admin</Link>
          <Link to="/wallet" className="text-slate-200 hover:text-white flex items-center gap-1"><Wallet size={18}/>Wallet</Link>
          <Bell className="text-slate-200" />
          <User className="text-slate-200" />
          <Menu className="text-slate-200 md:hidden" />
        </div>
      </div>
    </nav>
  )
}
