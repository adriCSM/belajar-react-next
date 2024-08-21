import Link from 'next/link';

Link;
export default function Card(props: any) {
  const { name, href, Icon, i, styleCard, styleText } = props;
  return (
    <Link href={href}>
      <div
        key={i}
        className={`${styleCard} flex flex-col items-center min-h-32  md:h-40 lg:h-60  items-center flex flex-col  ring-4 shadow-md  md:rounded-2xl transition transform duration-300 hover:scale-105`}
      >
        <div className=" w-auto h-4/5   m-3 ">
          <Icon className={`h-full text-5xl md:text-7xl text-lime-500 ${styleText}`} />
        </div>
        <h1 className={`md:text-xl h-full text-center font-bold ${styleText}`}>{name}</h1>
      </div>
    </Link>
  );
}
