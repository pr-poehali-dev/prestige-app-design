import Icon from '@/components/ui/icon';

interface BottomNavProps {
  currentScreen: string;
}

const BottomNav = ({ currentScreen }: BottomNavProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-[1125px] mx-auto bg-white border-t-2 border-ocean/20 shadow-2xl z-50">
      <div className="flex justify-around items-center py-6 px-8">
        <button className="flex flex-col items-center gap-2 px-8 py-4 transition-colors hover:bg-ocean/5 rounded-2xl">
          <Icon name="Home" size={36} className="text-ocean" />
          <span className="text-base text-depth/60 font-medium">Главная</span>
        </button>

        <button className="flex flex-col items-center gap-2 px-8 py-4 transition-colors hover:bg-ocean/5 rounded-2xl">
          <Icon name="Heart" size={36} className="text-depth/40" />
          <span className="text-base text-depth/60 font-medium">Желания</span>
        </button>

        <button className="flex flex-col items-center gap-2 px-8 py-4 transition-colors hover:bg-ocean/5 rounded-2xl">
          <Icon name="User" size={36} className="text-depth/40" />
          <span className="text-base text-depth/60 font-medium">Профиль</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNav;