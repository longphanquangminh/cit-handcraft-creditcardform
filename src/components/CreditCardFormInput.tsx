type Props = {
  labelName: string;
  placeholder: string;
  type?: string;
  className?: string;
  disabled?: boolean;
  readOnly?: boolean;
};

export default function CreditCardFormInput(props: Props) {
  return (
    <div className={`w-full ${props.className} mx-auto`}>
      <label className='space-y-1'>
        <div className='capitalize'>{props.labelName}</div>
        <input
          disabled={props.disabled}
          readOnly={props.readOnly}
          className={`border-2 border-gray-300 px-3 py-1 rounded-lg shadow-2xl w-full ${props.disabled ? "bg-gray-300" : "bg-white"}`}
          type={props.type || "text"}
          placeholder={props.placeholder}
        />
      </label>
    </div>
  );
}
