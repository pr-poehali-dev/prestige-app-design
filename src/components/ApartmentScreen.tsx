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
    <div className="w-full h-full bg-gradient-to-b from-sand to-white pb-40 overflow-y-auto animate-fade-in">
      <div className="sticky top-0 z-10 bg-ocean/95 backdrop-blur-sm text-white px-12 py-8 shadow-lg flex items-center gap-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="text-white hover:bg-white/20 rounded-full w-16 h-16"
        >
          <Icon name="ArrowLeft" size={36} />
        </Button>
        <div className="flex items-center gap-4">
          <img 
            src="https://cdn.poehali.dev/files/e887635b-a2f7-4004-b355-49ba8c7a3f0d.png" 
            alt="ЖК Престиж" 
            className="w-32 h-auto"
          />
          <div>
            <h1 className="text-4xl font-bold font-montserrat">
              {apartment.rooms}-комнатная квартира
            </h1>
            <p className="text-xl text-white/80">Номер {apartment.number}</p>
          </div>
        </div>
      </div>

      <div className="px-12 py-12 space-y-10">
        <Card className="overflow-hidden border-ocean/20 shadow-2xl">
          <img
            src={apartment.image}
            alt={`Планировка ${apartment.rooms}-комнатной квартиры`}
            className="w-full h-auto"
          />
        </Card>

        <Card className="p-10 space-y-6 border-ocean/20 shadow-xl">
          <h2 className="font-montserrat font-semibold text-3xl text-depth mb-6">
            Характеристики
          </h2>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-depth/60 text-lg">
                <Icon name="Building" size={24} className="text-ocean" />
                <span>Этаж</span>
              </div>
              <p className="text-3xl font-semibold text-depth">{apartment.floor}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3 text-depth/60 text-lg">
                <Icon name="Home" size={24} className="text-ocean" />
                <span>Количество комнат</span>
              </div>
              <p className="text-3xl font-semibold text-depth">{apartment.rooms}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3 text-depth/60 text-lg">
                <Icon name="Maximize" size={24} className="text-ocean" />
                <span>Общая площадь</span>
              </div>
              <p className="text-3xl font-semibold text-depth">{apartment.area} м²</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3 text-depth/60 text-lg">
                <Icon name="Hash" size={24} className="text-ocean" />
                <span>Номер квартиры</span>
              </div>
              <p className="text-3xl font-semibold text-depth">{apartment.number}</p>
            </div>
          </div>
        </Card>

        <Card className="p-10 border-ocean/20 shadow-xl">
          <h2 className="font-montserrat font-semibold text-3xl text-depth mb-6">
            Площади помещений
          </h2>

          <div className="space-y-4">
            {apartment.spaces.map((space: any, index: number) => (
              <div
                key={index}
                className="flex justify-between items-center py-4 border-b border-depth/10 last:border-0"
              >
                <span className="text-depth/80 text-xl">{space.name}</span>
                <span className="font-semibold text-depth text-2xl">{space.area} м²</span>
              </div>
            ))}
          </div>
        </Card>

        <Button 
          className="w-full bg-ocean hover:bg-ocean/90 text-white font-semibold py-10 text-2xl rounded-2xl transition-all hover:scale-[1.02] shadow-xl"
        >
          Забронировать квартиру
        </Button>
      </div>
    </div>
  );
};

export default ApartmentScreen;