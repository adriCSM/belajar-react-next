export default function TextArea({
  id,
  label,
  placeholder,
  styleParent,
  onChange,
}: {
  id?: string;
  label?: string;
  placeholder?: string;
  styleParent: string;
  onChange?: any;
}) {
  return (
    <div className={`flex flex-col  ${styleParent} `}>
      <label className="py-2" htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        className={`rounded-2xl outline outline-2 outline-gray-300 text-sm p-2 focus:outline-lime-300 max-w-full min-h-[100px] `}
      ></textarea>
    </div>
  );
}
