import * as React from 'react';

export default function Select({ ...props }) {
  const { list } = props;
  return (
    <div className={`flex flex-col  ${props.styleParent}`}>
      <label className="py-2" htmlFor={props.id}>
        {props.label}
      </label>
      <select
        id={props.id}
        className="rounded-2xl outline outline-2 outline-gray-300 text-sm p-2 pr-5 focus:outline-lime-300 "
      >
        <option value="" disabled selected>
          Pilih
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
