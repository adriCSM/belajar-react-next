export default function CheckBox({ ...props }) {
  return (
    <div className={`flex mb-2 items-center `}>
      <input type="checkbox" value={props.name} id={props.id} className="mr-2" />
      <label htmlFor={props.id}>{props.name}</label>
    </div>
  );
}
