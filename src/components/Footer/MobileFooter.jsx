import Button from "../Button/Button";
import Input from "../Input/Input";

export default function MobileFooter({
  date,
  manageLogo,
  facebookLogo,
  youtubeLogo,
  twitterLogo,
  pinterestLogo,
  instagramLogo,
}) {
  return (
    <footer className="bg-dark">
      <div className="container footer-wrapper">
        <div className="footer-form">
          <form
            className="footer-form__email-wrapper"
            onSubmit={(e) => e.preventDefault()}
          >
            <label
              htmlFor="newsletter-email"
              className="visually-hidden"
            >
              Enter email for newsletter
            </label>
            <Input
              type="email"
              name="newsletter-email"
              id="newsletter-email"
              placeholder="Updates in your inbox..."
            />
            <Button btnText={"Go"} />
          </form>
        </div>

        <nav
          className="footer-navigation-main"
          aria-label="Footer Navigation"
        >
          <div className="footer-navigation-main__first-wrapper">
            <a
              href="#"
              className="footer-navigation-main__link"
            >
              Home
            </a>
            <a
              href="#"
              className="footer-navigation-main__link"
            >
              Pricing
            </a>
            <a
              href="#"
              className="footer-navigation-main__link"
            >
              Products
            </a>
            <a
              href="#"
              className="footer-navigation-main__link"
            >
              About Us
            </a>
          </div>

          <div className="footer-navigation-main__second-wrapper">
            <a
              href="#"
              className="footer-navigation-main__link"
            >
              Careers
            </a>
            <a
              href="#"
              className="footer-navigation-main__link"
            >
              Community
            </a>
            <a
              href="#"
              className="footer-navigation-main__link"
            >
              Privacy Policy
            </a>
          </div>
        </nav>

        <div className="footer-navigation-social-wrapper">
          {manageLogo}
          <nav
            className="footer-navigation-social-wrapper__icons"
            aria-label="Social media navigation"
          >
            <a
              href="#"
              aria-label="Facebook"
              title="Facebook"
              className="footer-navigation-social-wrapper__logo"
            >
              {facebookLogo}
            </a>
            <a
              href="#"
              aria-label="Youtube"
              title="Youtube"
              className="footer-navigation-social-wrapper__logo"
            >
              {youtubeLogo}
            </a>
            <a
              href="#"
              aria-label="Twitter"
              title="Twitter"
              className="footer-navigation-social-wrapper__logo"
            >
              {twitterLogo}
            </a>
            <a
              href="#"
              aria-label="Pinterest"
              title="Pinterest"
              className="footer-navigation-social-wrapper__logo"
            >
              {pinterestLogo}
            </a>
            <a
              href="#"
              aria-label="Instagram"
              title="Instagram"
              className="footer-navigation-social-wrapper__logo"
            >
              {instagramLogo}
            </a>
          </nav>
        </div>
        <div className="footer-wrapper__copyright-text">
          <small>
            Copyright <time dateTime={date}>{date}</time>. All Rights Reserved
          </small>
        </div>
      </div>
    </footer>
  );
}
