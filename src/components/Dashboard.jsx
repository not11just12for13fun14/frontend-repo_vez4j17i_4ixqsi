import { useEffect, useState } from 'react'
import { api, getOrCreateDemoUser } from '../lib/api'
import Stats from './Stats'

export default function Dashboard() {
  const [overview, setOverview] = useState(null)
  const [wallet, setWallet] = useState(null)
  const user = getOrCreateDemoUser()

  useEffect(() => {
    api.get('/admin/overview').then(setOverview).catch(()=>{})
    api.get(`/wallet/${user.id}`).then(setWallet).catch(()=>{})
  }, [])

  const stats = [
    { label: 'Wallet', value: wallet ? `$${wallet.balance.toFixed(2)}` : '—' },
    { label: 'Users', value: overview?.users ?? '—' },
    { label: 'Offerings', value: overview?.offerings ?? '—' },
    { label: 'Investments', value: overview?.investments ?? '—' },
  ]

  return (
    <section className="container mx-auto px-6 py-8">
      <h2 className="text-white text-2xl font-semibold mb-4">Your Dashboard</h2>
      <Stats items={stats} />
    </section>
  )
}
