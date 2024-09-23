import { useState } from 'react';

export default function Select({
  list,
  placeholder,
  onChange,
  label,
  id,
  styleParent,
}: {
  list: string[];
  placeholder: string;
  onChange?: any;
  label?: string;
  id?: string;
  styleParent?: string;
}) {
  return (
    <div className={`flex  ${styleParent} flex-col`}>
      {label && (
        <label className="py-2" htmlFor={id}>
          {label}
        </label>
      )}

      <select
        onChange={onChange}
        defaultValue={placeholder}
        id={id}
        className="rounded-2xl outline w-auto outline-2  outline-gray-300 text-sm px-2 py-2 pr-5 focus:border-x-4 focus:border-lime-300 "
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
