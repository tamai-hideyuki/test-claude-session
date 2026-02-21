export function AppHeader() {
  return (
    <header className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground text-center py-6 px-4 relative overflow-hidden">
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_60%)] pointer-events-none" />
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold mb-2">
          <span>新横浜</span>
          <span className="text-base animate-bounce">🚅</span>
          <span>広島</span>
        </div>
        <h1 className="text-2xl font-extrabold tracking-wide mb-0.5">旅のおとも</h1>
        <p className="text-sm opacity-90">新幹線の道中を美味しく楽しもう</p>
      </div>
    </header>
  )
}
