import Link from 'next/link';

Link;
export default function Card(props: any) {
  const { name, href, Icon, i, colorCard, colorText } = props;
  return (
    <Link href={href}>
      <div
        key={i}
        className={`${colorCard} h-60 items-center flex flex-col duration-300 ring-4 shadow-md  rounded-2xl transition transform hover:scale-105`}
      >
        <div className=" w-auto h-4/5   m-3 ">
          <Icon className={`h-full text-7xl text-lime-500 ${colorText}`} />
        </div>
        <h1 className={`text-xl font-bold h-1/5 ${colorText}`}>{name}</h1>
      </div>
    </Link>
  );
}
