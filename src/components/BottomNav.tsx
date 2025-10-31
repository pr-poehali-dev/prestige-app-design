import Icon from '@/components/ui/icon';

interface BottomNavProps {
  currentScreen: string;
}

const BottomNav = ({ currentScreen }: BottomNavProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-[1125px] mx-auto bg-white border-t border-ocean/20 shadow-lg z-50">
      <div className="flex justify-around items-center py-3 px-4">
        <button className="flex flex-col items-center gap-1 px-4 py-2 transition-colors hover:bg-ocean/5 rounded-lg">
          <Icon name="Home" size={24} className="text-ocean" />
          <span className="text-xs text-depth/60">Главная</span>
        </button>

        <button className="flex flex-col items-center gap-1 px-4 py-2 transition-colors hover:bg-ocean/5 rounded-lg">
          <Icon name="Heart" size={24} className="text-depth/40" />
          <span className="text-xs text-depth/60">Желания</span>
        </button>

        <button className="flex flex-col items-center gap-1 px-4 py-2 transition-colors hover:bg-ocean/5 rounded-lg">
          <Icon name="User" size={24} className="text-depth/40" />
          <span className="text-xs text-depth/60">Профиль</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNav;
