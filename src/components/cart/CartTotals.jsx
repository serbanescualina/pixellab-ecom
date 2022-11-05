import { useContext } from 'react';
import { AppContext } from '../../pages/_app';

export const CartTotals = () => {
  const { cart } = useContext(AppContext);

  return (
    <>
      <header className="border p-3 text-black font-bold uppercase bg-neutral-300">
        <h1>Cart Totals</h1>
      </header>

      <section>
        <ul className="mt-5">
          <li className="border-b flex justify-between py-3">
            Sub Total: <span>$4013.00</span>
          </li>

          <li className="flex justify-between py-12 border-b">
            Shipping
            <form className="flex flex-col justify-center">
              <div className="flex gap-5 ">
                <label className="order-2" htmlFor="standard">
                  Standard
                </label>
                <input type="checkbox" name="standard" id="standard" checked />
              </div>

              <div className="flex gap-5 ">
                <label className="order-2" htmlFor="express">
                  Express ($49)
                </label>
                <input type="checkbox" name="express" id="express" />
              </div>
            </form>
          </li>

          <li className="flex justify-between mt-10">
            total:
            <span className="font-bold text-3xl"> $4013.00</span>
          </li>
        </ul>

        <button
          type="submit"
          title="Proceed to Checkout"
          className="flex bg-black w-full  text-white  justify-center py-3 mt-5"
          onClick={() => {
            console.log(cart);
          }}
        >
          Proceed to Checkout
        </button>
      </section>
    </>
  );
};
