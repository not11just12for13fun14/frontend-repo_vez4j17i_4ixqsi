export default function Stats({ items }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((it) => (
        <div key={it.label} className="bg-slate-800/60 border border-white/10 rounded-xl p-4">
          <div className="text-slate-400 text-xs">{it.label}</div>
          <div className="text-white text-2xl font-semibold">{it.value}</div>
          {it.sub && <div className="text-slate-400 text-xs mt-1">{it.sub}</div>}
        </div>
      ))}
    </div>
  )
}
