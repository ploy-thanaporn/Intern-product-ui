import InputBox from "./InputBox";
import PaymentPopover from "./PaymentPopover";
import ProductCheckout from "./ProductCheckout";

export default function CheckoutPage() {
  return (
    <div className="container mt-20">
      <h2 className="text-2xl font-bold text-center">Checkout</h2>
      <div className="w-1/3 mx-auto">
        <div className="mt-4"></div>
        <ProductCheckout />
        <ProductCheckout />
        <div className="mt-6">
          <InputBox />
        </div>
        <PaymentPopover />
      </div>
    </div>
  );
}
