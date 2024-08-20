import Card from './components/card';
import cardMenu from './cardMenu';

export default function MenuPage() {
  return (
    <div className="justify-between grid grid-cols-5 gap-6 mt-4 mx-4 text-gray-500">
      {cardMenu.map((item, i) => {
        return (
          <Card
            key={i}
            name={item.name}
            href={item.href}
            Icon={item.icon}
            colorCard={`bg-lime-400 ring-lime-500`}
            colorText={'text-white'}
          />
        );
      })}
    </div>
  );
}
