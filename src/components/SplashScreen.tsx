const SplashScreen = () => {
  return (
    <div className="h-full w-full bg-gradient-to-b from-ocean via-ocean/90 to-depth flex flex-col items-center justify-center animate-fade-in relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJ3YXZlcyIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0wIDUwIFEgMjUgNDAgNTAgNTAgVCA1MCA1MCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiIGZpbGw9Im5vbmUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCN3YXZlcykiLz48L3N2Zz4=')] opacity-30" />
      
      <div className="relative z-10 animate-scale-in">
        <img 
          src="https://cdn.poehali.dev/files/e887635b-a2f7-4004-b355-49ba8c7a3f0d.png" 
          alt="ЖК Престиж" 
          className="w-72 h-auto drop-shadow-2xl"
        />
      </div>
      
      <div className="absolute bottom-20 flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
        <p className="text-white/80 text-sm font-light tracking-wider">Загрузка...</p>
      </div>
    </div>
  );
};

export default SplashScreen;
