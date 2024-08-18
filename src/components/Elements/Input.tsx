export default function Input({ ...props }) {
  return (
    <div className={`${props.styleParent} flex flex-col`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        {...props}
        className={`${props.className} col-span-2 placeholder:opacity-50 placeholder:italic p-2 rounded-lg border-2  focus:outline-none focus:border-lime-500 border-lime-300`}
      />
    </div>
  );
}
