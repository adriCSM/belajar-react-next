import * as React from 'react';

export default function Input(props: any) {
  const {
    id,
    type,
    label,
    styleParent,
    onChange,
    value,
    required,
    inputStyle,
    placeholder,
    disabled,
  } = props;
  return (
    <div className={`flex flex-col ${styleParent} `}>
      {label && (
        <label className="py-2 w-auto" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        value={value}
        onChange={onChange}
        type={type}
        id={id}
        required={true}
        placeholder={placeholder}
        className={`${inputStyle} rounded-2xl  outline text-sm p-2 focus:border-x-4 focus:border-lime-300 outline-gray-300 outline-2  invalid:border-pink-500 `}
      />
    </div>
  );
}
