import Card from './components/card';
import listMenu from './listMenu';

export default function MenuPage() {
  return (
    <div className="justify-between grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-4 mx-4 text-gray-500">
      {listMenu.map((item, i) => {
        return (
          <Card
            key={i}
            name={item.name}
            href={item.href}
            Icon={item.icon}
            styleCard={`bg-white ring-gray-200 `}
            styleText={'text-gray-400'}
          />
        );
      })}
    </div>
  );
}
