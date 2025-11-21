import { useEffect, useState } from 'react'
import { api, getOrCreateDemoUser } from '../lib/api'
import MarketGrid from './MarketGrid'

export default function Market() {
  const [offerings, setOfferings] = useState([])
  const user = getOrCreateDemoUser()

  useEffect(() => {
    api.get('/offerings').then(setOfferings).catch(()=>{})
  }, [])

  const onInvest = async (o) => {
    try {
      await api.post('/investments', {
        user_id: user.id,
        offering_id: o.id || o._id,
        shares: 5,
        pledge_amount: 5 * (o.share_price || 100),
        monthly_instalment: 100,
        months: o.term_months || 12,
        status: 'active',
      })
      alert('Investment created! Check wallet and distributions later.')
    } catch (e) {
      alert(e.message)
    }
  }

  return (
    <section className="container mx-auto px-6 py-8">
      <h2 className="text-white text-2xl font-semibold mb-4">Marketplace</h2>
      <MarketGrid offerings={offerings} onInvest={onInvest} />
    </section>
  )
}
