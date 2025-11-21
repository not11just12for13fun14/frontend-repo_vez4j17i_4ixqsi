export default function MarketGrid({ offerings = [], onInvest }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {offerings.map((o) => (
        <div key={o.id} className="bg-slate-800/60 border border-white/10 rounded-xl overflow-hidden">
          <div className="h-40 bg-gradient-to-br from-slate-700 to-slate-900" style={{backgroundImage: `url(${o.images?.[0]||''})`, backgroundSize: 'cover'}}></div>
          <div className="p-4">
            <div className="text-white font-semibold">{o.title}</div>
            <div className="text-slate-400 text-sm mt-1">{o.description||'High-yield car pool'}</div>
            <div className="flex items-center justify-between mt-3 text-slate-300 text-sm">
              <div>Share ${o.share_price}</div>
              <div>{o.term_months} mo</div>
              <div>{o.shares_total} shares</div>
            </div>
            <button onClick={() => onInvest(o)} className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white rounded-lg py-2">Invest</button>
          </div>
        </div>
      ))}
    </div>
  )
}
