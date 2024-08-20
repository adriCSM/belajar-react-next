import * as React from 'react';

export default function Input(props: any) {
  const { id, type, label, placeholder, styleParent } = props;
  return (
    <div className={`flex flex-col text-gray-500 ${styleParent} `}>
      <label className="py-2" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={`rounded-2xl outline outline-2 outline-gray-300 text-sm p-2 focus:outline-lime-300 italic`}
      />
    </div>
  );
}
