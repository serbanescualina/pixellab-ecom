import Link from 'next/link';
import { BiArrowBack } from 'react-icons/bi';

export const ContinueShopping = () => {
  return (
    <Link href="/">
      <div className="flex items-center justify-center flex-nowrap cursor-pointer border border-zinc-400 px-2">
        <BiArrowBack size={20}></BiArrowBack>
        <a
          className="w-25 h-24 flex justify-center items-center whitespace-nowrap ml-2 uppercase"
          title="Home"
        >
          Back to Shop
        </a>
      </div>
    </Link>
  );
};
