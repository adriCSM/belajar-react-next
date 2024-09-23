import CardMenu from '../../../components/Fragments/Card/CardMenu';
import listMenu from './listMenu';

export default function MenuPage() {
  return (
    <div className="justify-between px-5 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-4   text-gray-500">
      {listMenu.map((item, i) => {
        return (
          <CardMenu
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
