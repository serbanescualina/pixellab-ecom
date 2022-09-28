import { css } from '@emotion/css';
import { Header } from '../components/common';

const black = '#171717';
const white = '#fff';
const gray = '#f2f2f2';

export const Layout = ({ children }) => {
  const gridCss = css`
    display: grid;
    grid-template-areas:
      'header'
      'main-area';
    grid-template-rows: 60px 1fr;

    @media (min-width: 1024px) {
      grid-template-areas:
        'header main-area'
        'header main-area';
      grid-template-columns: 80px 1fr;
      grid-template-rows: 1fr;
      height: 100vh;
    }
  `;

  const headerCss = css`
    background-color: ${black};
    color: ${white};
    grid-area: header;
    padding: 0 16px;
  `;

  const mainAreaCss = css`
    grid-area: main-area;
  `;

  const footerCss = css`
    background-color: ${gray};
    padding: 0 16px;
  `;

  return (
    <div className={gridCss}>
      <header className={headerCss}>
        <Header></Header>
      </header>

      <div className={mainAreaCss}>
        {children}
        <footer className={footerCss}>x</footer>
      </div>
    </div>
  );
};
