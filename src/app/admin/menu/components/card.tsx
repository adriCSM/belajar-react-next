export default function Card(props: any) {
  const { name, href, Icon, i } = props;
  return (
    <div
      key={i}
      className="card bg-white h-60 items-center flex flex-col duration-300 ring-4 shadow-md ring-lime-200  rounded-2xl transition transform hover:scale-105"
    >
      <div className=" w-auto h-4/5   m-3 ">
        <Icon className="h-full text-7xl text-lime-500 " />
      </div>
      <h1 className="text-xl font-bold h-1/5 ">{name}</h1>
    </div>
  );
}
