import { useEffect, useState } from 'react'
import { api, getOrCreateDemoUser } from '../lib/api'

export default function Wallet() {
  const [wallet, setWallet] = useState(null)
  const [amount, setAmount] = useState('50')
  const user = getOrCreateDemoUser()

  const refresh = () => api.get(`/wallet/${user.id}`).then(setWallet)

  useEffect(() => { refresh() }, [])

  const topup = async () => {
    await api.post('/wallet/topup', { user_id: user.id, amount: parseFloat(amount||'0') })
    await refresh()
  }

  return (
    <section className="container mx-auto px-6 py-8">
      <h2 className="text-white text-2xl font-semibold mb-4">Wallet</h2>
      <div className="bg-slate-800/60 border border-white/10 rounded-xl p-4 text-white">
        <div className="text-slate-300">Balance</div>
        <div className="text-3xl font-semibold">${wallet ? wallet.balance.toFixed(2) : '0.00'}</div>
        <div className="mt-4 flex gap-3">
          <input value={amount} onChange={e=>setAmount(e.target.value)} className="bg-slate-900 border border-white/10 rounded px-3 py-2 text-white" />
          <button onClick={topup} className="bg-red-500 hover:bg-red-600 text-white rounded px-4">Top up</button>
        </div>
      </div>
    </section>
  )
}
