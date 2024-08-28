type id = { params: { id: string } };
export default function DetailKepegawaian(props: id) {
  const { id } = props.params;
  return <div>Page {id}</div>;
}
