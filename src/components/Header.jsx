import NavItems from "./NavItems";
function Header() {
  return (
    <header className="">
      <nav className="navbar">
        <div className="logo">
          <img src="images/logo/2x/Logo@2x.png" alt="MML Logo" />
          <p className="company-name">MMLink Co,. Ltd.</p>
        </div>
        <ul className="nav-items">
          <NavItems />
        </ul>
        <a className="cta-btn">Get in touch</a>
      </nav>
    </header>
  );
}

export default Header;
