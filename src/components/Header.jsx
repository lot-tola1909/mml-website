function Header() {
  return (
    <header className="">
      <nav className="navbar">
        <div className="logo">
          <img src="images/logo/2x/Logo@2x.png" alt="MML Logo" />
          <p className="company-name">MMLink Co,. Ltd.</p>
        </div>
        <ul className="nav-items">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <a className="cta-btn">Get in touch</a>
      </nav>
    </header>
  )
}

export default Header;
