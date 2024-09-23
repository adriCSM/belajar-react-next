import Link from 'next/link';

Link;
export default function Card(props: any) {
  const { name, href, Icon, i, styleCard, styleText } = props;
  return (
    <Link href={href}>
      <div
        key={i}
        className={`${styleCard} relative
         flex flex-col items-center h-32 justify-around md:h-40 lg:h-60  items-center flex flex-col  ring-4 shadow-md rounded-md md:rounded-2xl transition transform duration-300 active:scale-105         `}
      >
        <div className=" w-auto h-4/5  m-3 flex ">
          <Icon
            className={`text-5xl md:text-7xl self-center hover:scale-125 transition scale duration-300 ${styleText}`}
          />
        </div>
        <h1 className={`text-xs md:text-xl h-1/5 text-center font-bold ${styleText} truncate`}>
          {name}
        </h1>
      </div>
    </Link>
  );
}
