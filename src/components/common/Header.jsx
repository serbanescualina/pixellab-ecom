import Link from 'next/link';
import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { CgClose, CgMenu } from 'react-icons/cg';
import { GiEarthAfricaEurope } from 'react-icons/gi';
import { FaApple } from 'react-icons/fa';
import { SocialItems } from '../social-header';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [socialMenuOpen, setSocialMenuOpen] = useState(false);
  // ma intreb daca aici pot sa vin cu un if si daca socialMenuOpen e true sa-l faca pe ala fals,
  //  nu am stiut daca e suficient sa pun un if aici , sau la onClick sa inchid functie de stari
  // mi-a scapat putin partea asta
  // am ales sa creez o componenta noua si sa o chem sa mai jonglez putin cu asta

  return (
    <>
      <section className="flex justify-between items-center lg:flex-col h-full z-10 relative lg:py-4">
        <Link href="/">
          <a title="Home">
            <FaApple size="32"></FaApple>
          </a>
        </Link>

        {isMobile ? (
          <button
            title="Menu"
            type="button"
            onClick={() => {
              setSocialMenuOpen(!socialMenuOpen);
            }}
            className="lg:hidden"
          >
            {!socialMenuOpen ? (
              <span className="earth-animation">
                <GiEarthAfricaEurope size="32"></GiEarthAfricaEurope>
              </span>
            ) : (
              <CgClose size="32"></CgClose>
            )}
          </button>
        ) : (
          <></>
        )}
        <button
          title="Menu"
          type="button"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          {!menuOpen ? (
            <CgMenu size="32"></CgMenu>
          ) : (
            <CgClose size="32"></CgClose>
          )}
        </button>
        <div className="hidden lg:block">
          <ul
            className={`flex flex-col justify-items-center items-center uppercase`}
          >
            <SocialItems></SocialItems>
          </ul>
        </div>
      </section>

      <nav
        className={`absolute left-0 -top-full transition-transform transform-gpu ${
          menuOpen || socialMenuOpen ? 'translate-y-full' : ''
        } h-screen w-screen lg:w-screen-1/3 text-white bg-neutral-900 mt-14 lg:mt-0 pt-2 lg:pt-0 border-t border-neutral-500`}
      >
        <ul
          className={`flex flex-col justify-items-center items-center uppercase lg:h-screen ${
            isMobile && socialMenuOpen ? 'hidden' : ''
          }`}
        >
          <li>
            <Link href="/">
              <a title="Shop" className="py-0.5">
                Shop
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a title="About" className="py-0.5">
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a title="Contact" className="py-0.5">
                Contact
              </a>
            </Link>
          </li>
        </ul>

        {isMobile && socialMenuOpen ? (
          <ul
            className={`flex flex-col justify-items-center items-center uppercase h-screen`}
          >
            <SocialItems></SocialItems>
          </ul>
        ) : (
          ''
        )}
      </nav>
    </>
  );
};
