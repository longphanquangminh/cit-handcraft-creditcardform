import CreditCardFormBody from "./CreditCardFormBody";
import CreditCardFormHeader from "./CreditCardFormHeader";

export default function CreditCardFormContainer() {
  return (
    <div className='bg-[#FFFFFF] w-auto md:w-[360px] px-[30px] pt-[16px] pb-[30px] space-y-[24px] rounded-[20px] mx-auto my-3'>
      <CreditCardFormHeader />
      <CreditCardFormBody />
    </div>
  );
}
