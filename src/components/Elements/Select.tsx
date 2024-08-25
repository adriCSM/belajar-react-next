import { useState } from 'react';

export default function Select({ ...props }) {
  const { list, placeholder } = props;

  const [valueSelect, setValueSelect] = useState('pilih');
  const handleChange = (event: any) => {
    setValueSelect(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div className={`flex  ${props.styleParent} flex-col`}>
      {props.label && (
        <label className="py-2" htmlFor={props.id}>
          {props.label}
        </label>
      )}

      <select
        onChange={handleChange}
        defaultValue={placeholder}
        id={props.id}
        className="rounded-2xl outline w-auto outline-2 outline-gray-300 text-sm px-2 py-1 pr-5 focus:outline-lime-300 "
      >
        <option value={placeholder} disabled>
          {placeholder}
        </option>
        {list.map((item: string, index: number) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}
