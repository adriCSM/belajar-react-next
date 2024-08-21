import * as React from 'react';

export default function Input(props: any) {
  const { id, type, label, placeholder, styleParent, onChange, value, required } = props;
  return (
    <div className={`flex flex-col ${styleParent} `}>
      <label className="py-2" htmlFor={id}>
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        id={id}
        required={required}
        placeholder={placeholder}
        className={`rounded-2xl outline outline-2 outline-gray-300 text-sm p-2 focus:outline-lime-300 italic invalid:border-red-500`}
      />
    </div>
  );
}
