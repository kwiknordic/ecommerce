import { Outlet } from "react-router-dom"
import { createPortal } from 'react-dom';
import { RightNav, Search, SellingPoints, Subheader, SubheaderCTA } from "../components/header.js"
import { About, Copyright, FooterMenuHeading, FooterMenuLinks } from "../components/footer.js"
import { Logo } from "../components/Logo.js"
import MainMenu from "../components/MainMenu.js"
import { useState } from "react";
import { Icon } from "@iconify-icon/react";
import { useResizeListener } from "../hooks/useResizeListener.js";

function Layout() {
  const { innerHeight, innerWidth } = useResizeListener()
  const [toggleMenu, setToggleMenu] = useState(false)
  const openMenuPortal = createPortal(<div className="portal"><MainMenu setToggleMenu={setToggleMenu} /></div>, document.body)

  const isWide = innerWidth > 850

  function handleToggleMenu(event: React.MouseEvent) {
    if (event.target instanceof HTMLElement) {
      if (event.target.closest("aside") || event.target.closest(".nav")) {
        setToggleMenu((prev) => !prev)
      }
    }
  }

  return (
    <>
      <header>
        <Subheader isWide={isWide}>
          {isWide && <SellingPoints>
            <li>Beställ senast kl 12.00 för att få leverans nästa dag</li>
            <li>Fraktfritt vid köp över 1 250:-</li>
            <li>Kundtjänst 011 - 123 45 67</li>
          </SellingPoints>}
          <SubheaderCTA link="/#">Snabborder</SubheaderCTA>
        </Subheader>
        <div className="header-content">
          <div className="main">
            <Logo />
            <RightNav>
              <li><Icon icon="mdi:user" />My account</li>
              <li><Icon icon="mdi:cart" />Cart</li>
              <li onClick={handleToggleMenu}><Icon icon="mdi:menu" />Menu {toggleMenu && openMenuPortal}</li>
            </RightNav>
          </div>
          <Search />
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <div className="footer-content">
          <div className="main-content">
            <Logo />
            <About>
              <p>
                Hos Kwik hittar du allt du behöver till ditt kontor till bra priser, med hög service och snabba och säkra leveranser.
              </p>
              <p>
                <span>Telefon: 023 - 456 78 88</span>
                <span>E-post: order@kwik.se</span>
              </p>
              <p>
                Organistionsnummer: 111111 - 1111
              </p>
            </About>
          </div>
          <div className="footer-menu">
            <div>
              <FooterMenuHeading>Offerings</FooterMenuHeading>
              <FooterMenuLinks>
                <a href="#">Products</a>
                <a href="#">Sale</a>
              </FooterMenuLinks>
            </div>
            <div>
              <FooterMenuHeading>Information</FooterMenuHeading>
              <FooterMenuLinks>
                <a href="#">About us</a>
                <a href="#">Contact</a>
                <a href="#">Career</a>
                <a href="#">FAQ</a>
              </FooterMenuLinks>
            </div>
          </div>
        </div>
        <Copyright />
      </footer>
    </>
  )
}

export default Layout