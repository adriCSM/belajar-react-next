type id = { params: { id: string } };
export default function DetailRawatJalan(props: id) {
  const { id } = props.params;
  console.log(id);
  return (
    <div className="h-svh animate-pulse">
      <h1>Ini Page Pasien {id}</h1>
    </div>
  );
}
