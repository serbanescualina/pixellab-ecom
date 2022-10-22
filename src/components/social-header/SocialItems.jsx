import Link from 'next/link';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from 'react-icons/ai';

export const SocialItems = () => {
  return (
    <>
      <Link href="/">
        <a title="Facebook">
          <AiFillFacebook size={25} />
        </a>
      </Link>

      <Link href="/">
        <a title="Instagram">
          <AiFillInstagram size={25} />
        </a>
      </Link>

      <Link href="/">
        <a title="Twitter">
          <AiFillTwitterSquare size={25} />
        </a>
      </Link>
    </>
  );
};
