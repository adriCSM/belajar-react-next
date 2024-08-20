export default function CheckBox({ ...props }) {
  return (
    <label className={`flex items-center ${props.styleParent}`}>
      <input type="checkbox" value={props.name} id={props.id} className={props.styleCheckBox} />
      <label htmlFor={props.id}>{props.name}</label>
    </label>
  );
}
