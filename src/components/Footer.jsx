import NavItems from "./NavItems";
export default function Footer() {
  return (
    <div className="footer">
      <img
        src="./images/footer-logo.png"
        alt="MML Logo"
        className="footer-logo"
      />
      <div className="footer-content">
        <div className="quick-links">
          <p>Quick Links:</p>
          <NavItems className="nav-items" />
        </div>
        <div className="contact-info">
          <p>Contact:</p>
          <div className="contact-info-1">
            <div className="contact-info-1-item1">
              <img src="./images/telegram-icon.png" alt="Telegram Icon" />
              <a href="https://t.me/LotTola_a" target="_blank">
                Mr. Lot Tola
              </a>
            </div>
            <div className="contact-info-1-item2">
              <img src="./images/phone-icon.png" alt="Phone Icon" />
              <a href="tel:092496010" target="_blank">
                092496010
              </a>
            </div>
            <div className="contact-info-1-item3">
              <img src="./images/email-icon.png" alt="Email Icon" />
              <a href="mailto:lottolaaa@gmail.com" target="_blank">
                lottolaaa@gmail.com
              </a>
            </div>
          </div>
          <div className="contact-info-2">
            <p>Follow Us On:</p>
            <div className="contact-info-2-item1">
              <a href="https://www.google.com" target="_blank">
                <img src="./images/linkedin-icon.png" alt="LinkedIn Logo" />
              </a>
              <a href="https://www.google.com" target="_blank">
                <img src="./images/facebook-icon.png" alt="Facebook Logo" />
              </a>
              <a href="https://www.google.com" target="_blank">
                <img src="./images/instagram-icon.png" alt="Instagram Logo" />
              </a>
              <a href="https://www.google.com" target="_blank">
                <img src="./images/tiktok-icon.png" alt="TikTok Logo" />
              </a>
            </div>
          </div>
        </div>
        <div className="address">
          <p>Address:</p>
          <div className="address-content">
            <p className="address-content-info">
              #569, St. 1019, Sangkat Phnom Penh Thmey, Khan Sen Sok, Phnom
              Penh, Cambodia.
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.5456512117416!2d104.87331727477789!3d11.584393888617841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109515426640933%3A0xfbd7012d61cf8e21!2sThya%20Ktech%20Showroom!5e0!3m2!1sen!2skh!4v1748968687608!5m2!1sen!2skh"
              width="267"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="embed-map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
