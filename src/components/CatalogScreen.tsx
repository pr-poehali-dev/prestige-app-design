import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface CatalogScreenProps {
  onSelectApartment: (id: number) => void;
}

const apartments = [
  {
    id: 1,
    rooms: 1,
    area: 46.23,
    number: 32,
    image: 'https://cdn.poehali.dev/files/e166c3f1-f088-45df-8add-2cb7573b6d07.png'
  },
  {
    id: 2,
    rooms: 2,
    area: 68.54,
    number: 16,
    image: 'https://cdn.poehali.dev/files/933ee7cd-95f1-484f-85cf-bf6c9d8a8922.png'
  },
  {
    id: 3,
    rooms: 3,
    area: 109.17,
    number: 18,
    image: 'https://cdn.poehali.dev/files/1dc4557d-bc72-4acf-9cfa-f28900e5ef12.png'
  },
  {
    id: 4,
    rooms: 1,
    area: 51.9,
    number: 1,
    image: 'https://cdn.poehali.dev/files/e166c3f1-f088-45df-8add-2cb7573b6d07.png'
  },
  {
    id: 5,
    rooms: 3,
    area: 102.13,
    number: 2,
    image: 'https://cdn.poehali.dev/files/1dc4557d-bc72-4acf-9cfa-f28900e5ef12.png'
  },
];

const CatalogScreen = ({ onSelectApartment }: CatalogScreenProps) => {
  return (
    <div className="h-full w-full bg-gradient-to-b from-sand to-white pb-24 overflow-y-auto">
      <div className="sticky top-0 z-10 bg-ocean/95 backdrop-blur-sm text-white px-6 py-6 shadow-lg">
        <h1 className="text-2xl font-bold font-montserrat mb-1">ЖК Престиж</h1>
        <p className="text-sm text-white/80">Выберите квартиру мечты</p>
      </div>

      <div className="px-6 py-6 space-y-4 animate-fade-in">
        {apartments.map((apt, index) => (
          <Card
            key={apt.id}
            onClick={() => onSelectApartment(apt.id)}
            className="overflow-hidden cursor-pointer transition-all hover:shadow-xl hover:scale-[1.02] border-ocean/10 animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex gap-4 p-4">
              <div className="flex-shrink-0">
                <img
                  src={apt.image}
                  alt={`${apt.rooms}-комнатная квартира`}
                  className="w-24 h-24 object-cover rounded-lg border-2 border-ocean/20"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-montserrat font-semibold text-lg text-depth mb-2">
                  {apt.rooms}-комнатная квартира
                </h3>

                <div className="space-y-1.5 text-sm">
                  <div className="flex items-center gap-2 text-depth/70">
                    <Icon name="Maximize" size={16} className="text-ocean" />
                    <span>Общая площадь: <strong className="text-depth">{apt.area} м²</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-depth/70">
                    <Icon name="Hash" size={16} className="text-ocean" />
                    <span>Номер квартиры: <strong className="text-depth">{apt.number}</strong></span>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <Icon name="ChevronRight" size={24} className="text-ocean" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CatalogScreen;
