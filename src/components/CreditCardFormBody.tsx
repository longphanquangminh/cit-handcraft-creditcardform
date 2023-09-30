import CreditCardFormInput from "./CreditCardFormInput";

export default function CreditCardFormBody() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className='grid gap-y-3'>
      <CreditCardFormInput placeholder='Full name' type='text' labelName='Full name' />
      <CreditCardFormInput disabled placeholder='1234 1234 1234 1234' type='text' labelName='Credit card number' />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
        <CreditCardFormInput disabled placeholder='MM/YY' type='text' labelName='Exp Date' />
        <CreditCardFormInput disabled placeholder='•••' type='password' labelName='CVV' />
      </div>
      <CreditCardFormInput disabled placeholder='90210' type='text' labelName='Zip code' />
      <button className='bg-[#288FB4] hover:bg-[#82CCDD] duration-300 text-white font-bold py-2 px-3 rounded w-full capitalize mt-3'>
        Confirm payment
      </button>
      <p className='text-center text-black'>You verify that this info is correct</p>
    </form>
  );
}
