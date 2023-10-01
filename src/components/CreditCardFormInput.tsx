import React from "react";

type Props = {
  labelName: string;
  placeholder: string;
  type?: string;
  className?: string;
  disabled?: boolean;
  readOnly?: boolean;
  icon?: React.ReactNode;
  min?: number;
  max?: number;
};

export default function CreditCardFormInput(props: Props) {
  return (
    <div className={`w-full ${props.className} mx-auto`}>
      <label className='space-y-1 relative'>
        <div className='capitalize'>{props.labelName}</div>
        <input
          minLength={props.min || 1}
          maxLength={props.max}
          disabled={props.disabled}
          readOnly={props.readOnly}
          className={`border-2 border-gray-300 focus:border-gray-700 outline-none px-3 py-1 ${
            props.icon ? "pr-9" : ""
          } rounded-lg shadow-2xl w-full ${props.disabled ? "bg-gray-300" : "bg-white"} duration-300`}
          type={props.type || "text"}
          placeholder={props.placeholder}
        />
        {props.icon && (
          <div className='absolute inset-y-0 top-[32px] text-gray-500 right-0 pr-3 flex items-center pointer-events-none'>{props.icon}</div>
        )}
      </label>
    </div>
  );
}
