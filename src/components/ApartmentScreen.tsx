import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ApartmentScreenProps {
  apartmentId: number;
  onBack: () => void;
}

const apartmentDetails: Record<number, any> = {
  1: {
    rooms: 1,
    floor: 2,
    area: 46.23,
    number: 32,
    image: 'https://cdn.poehali.dev/files/e166c3f1-f088-45df-8add-2cb7573b6d07.png',
    spaces: [
      { name: 'Кухня', area: 19.48 },
      { name: 'Сан. узел', area: 5.04 },
      { name: 'Холл', area: 5.21 },
      { name: 'Лоджия', area: 5.54 },
      { name: 'Жилая комната', area: 13.73 },
    ]
  },
  2: {
    rooms: 2,
    floor: 2,
    area: 68.54,
    number: 16,
    image: 'https://cdn.poehali.dev/files/933ee7cd-95f1-484f-85cf-bf6c9d8a8922.png',
    spaces: [
      { name: 'Кухня', area: 17.25 },
      { name: 'Сан. узел', area: 5.10 },
      { name: 'Сан. узел', area: 2.0 },
      { name: 'Лоджия', area: 5.28 },
      { name: 'Холл', area: 11.12 },
      { name: 'Жилая комната', area: 15.75 },
      { name: 'Жилая комната', area: 14.68 },
    ]
  },
  3: {
    rooms: 3,
    floor: 2,
    area: 109.17,
    number: 18,
    image: 'https://cdn.poehali.dev/files/1dc4557d-bc72-4acf-9cfa-f28900e5ef12.png',
    spaces: [
      { name: 'Кухня', area: 23.05 },
      { name: 'Сан. узел', area: 5.66 },
      { name: 'Сан. узел', area: 3.79 },
      { name: 'Холл', area: 13.81 },
      { name: 'Лоджия', area: 7.35 },
      { name: 'Лоджия', area: 2.78 },
      { name: 'Жилая комната', area: 18.16 },
      { name: 'Жилая комната', area: 19.13 },
      { name: 'Жилая комната', area: 20.50 },
    ]
  },
  4: {
    rooms: 1,
    floor: 2,
    area: 51.9,
    number: 1,
    image: 'https://cdn.poehali.dev/files/e166c3f1-f088-45df-8add-2cb7573b6d07.png',
    spaces: [
      { name: 'Кухня', area: 19.48 },
      { name: 'Сан. узел', area: 5.04 },
      { name: 'Холл', area: 5.21 },
      { name: 'Лоджия', area: 5.54 },
      { name: 'Жилая комната', area: 13.73 },
    ]
  },
  5: {
    rooms: 3,
    floor: 2,
    area: 102.13,
    number: 2,
    image: 'https://cdn.poehali.dev/files/1dc4557d-bc72-4acf-9cfa-f28900e5ef12.png',
    spaces: [
      { name: 'Кухня', area: 23.05 },
      { name: 'Сан. узел', area: 5.66 },
      { name: 'Сан. узел', area: 3.79 },
      { name: 'Холл', area: 13.81 },
      { name: 'Лоджия', area: 7.35 },
      { name: 'Лоджия', area: 2.78 },
      { name: 'Жилая комната', area: 18.16 },
      { name: 'Жилая комната', area: 19.13 },
      { name: 'Жилая комната', area: 20.50 },
    ]
  },
};

const ApartmentScreen = ({ apartmentId, onBack }: ApartmentScreenProps) => {
  const apartment = apartmentDetails[apartmentId];

  if (!apartment) return null;

  return (
    <div className="h-full w-full bg-gradient-to-b from-sand to-white pb-24 overflow-y-auto animate-fade-in">
      <div className="sticky top-0 z-10 bg-ocean/95 backdrop-blur-sm text-white px-6 py-4 shadow-lg flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="text-white hover:bg-white/20 rounded-full"
        >
          <Icon name="ArrowLeft" size={24} />
        </Button>
        <div>
          <h1 className="text-xl font-bold font-montserrat">
            {apartment.rooms}-комнатная квартира
          </h1>
          <p className="text-sm text-white/80">Номер {apartment.number}</p>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        <Card className="overflow-hidden border-ocean/20 shadow-lg">
          <img
            src={apartment.image}
            alt={`Планировка ${apartment.rooms}-комнатной квартиры`}
            className="w-full h-auto"
          />
        </Card>

        <Card className="p-6 space-y-4 border-ocean/20 shadow-md">
          <h2 className="font-montserrat font-semibold text-xl text-depth mb-4">
            Характеристики
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-depth/60 text-sm">
                <Icon name="Building" size={16} className="text-ocean" />
                <span>Этаж</span>
              </div>
              <p className="text-lg font-semibold text-depth">{apartment.floor}</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-depth/60 text-sm">
                <Icon name="Home" size={16} className="text-ocean" />
                <span>Комнат</span>
              </div>
              <p className="text-lg font-semibold text-depth">{apartment.rooms}</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-depth/60 text-sm">
                <Icon name="Maximize" size={16} className="text-ocean" />
                <span>Площадь</span>
              </div>
              <p className="text-lg font-semibold text-depth">{apartment.area} м²</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-depth/60 text-sm">
                <Icon name="Hash" size={16} className="text-ocean" />
                <span>Квартира</span>
              </div>
              <p className="text-lg font-semibold text-depth">{apartment.number}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-ocean/20 shadow-md">
          <h2 className="font-montserrat font-semibold text-xl text-depth mb-4">
            Площади помещений
          </h2>

          <div className="space-y-3">
            {apartment.spaces.map((space: any, index: number) => (
              <div
                key={index}
                className="flex justify-between items-center py-2 border-b border-depth/10 last:border-0"
              >
                <span className="text-depth/80">{space.name}</span>
                <span className="font-semibold text-depth">{space.area} м²</span>
              </div>
            ))}
          </div>
        </Card>

        <Button 
          className="w-full bg-ocean hover:bg-ocean/90 text-white font-semibold py-6 rounded-xl transition-all hover:scale-[1.02]"
        >
          Забронировать квартиру
        </Button>
      </div>
    </div>
  );
};

export default ApartmentScreen;
