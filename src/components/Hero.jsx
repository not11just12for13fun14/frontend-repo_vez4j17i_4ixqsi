import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full flex items-center bg-gradient-to-t from-slate-950/70 via-slate-950/30 to-transparent pointer-events-none">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-2xl">
            DriveShare Capital
          </h1>
          <p className="text-slate-200 mt-4 max-w-xl">
            Invest in high-performance vehicles via fractional shares. Earn monthly rental income and exit payouts.
          </p>
        </div>
      </div>
    </section>
  )
}
