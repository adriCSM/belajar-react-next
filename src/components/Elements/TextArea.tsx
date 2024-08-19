export default function TextArea(props: any) {
  const { id, type, label, placeholder, styleParent } = props;
  return (
    <div className={`flex flex-col text-gray-500 ${styleParent} `}>
      <label className="py-2" htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        className={`rounded-2xl outline outline-2 outline-gray-300 text-sm p-2 focus:outline-lime-300 max-w-full min-h-[100px] `}
      ></textarea>
    </div>
  );
}
