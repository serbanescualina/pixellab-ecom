export const CartVoucher = () => {
  return (
    <div className="my-5">
      <input
        type="text"
        name="voucher"
        id="voucher"
        placeholder="Coupon Code"
        className="border p-3 mr-5 w-1/3"
      />
      <button
        type="submit"
        title="Apply Coupon"
        className="border p-3 text-center"
      >
        Apply Coupon
      </button>
    </div>
  );
};
