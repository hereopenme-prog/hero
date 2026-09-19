export default function ReferenceFooter() {
  return (
    <footer>
      <div className="container footer-top">
        <div>
          <a className="brand brand-footer" href="#home" aria-label="Here Open home">
            <span className="brand-mark" aria-hidden="true">
              <img src="/assets/hereopen-logo.svg" width={43} height={43} alt="" />
            </span>
            <span>
              HERE OPEN<small>CONNECTED LOCAL BUSINESS</small>
            </span>
          </a>
          <p>
            Built for banks. Designed for merchants.
            <br />
            Connected to customers.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#home">Home</a>
          <a href="#problem">The challenge</a>
          <a href="#our-solution">Our solution</a>
          <a href="#how-it-works">How it works</a>
          <a href="#merchant-overview">Smart device</a>
          <a href="#solution">One device</a>
          <a href="#vision">Our vision</a>
          <a href="#faq">FAQ</a>
        </nav>
        <nav aria-label="Legal information">
          <a href="https://www.hereopen.me/privacy" target="_blank" rel="noopener noreferrer">
            Privacy policy
          </a>
          <a href="https://www.hereopen.me/terms" target="_blank" rel="noopener noreferrer">
            Terms of service
          </a>
          <a href="https://www.hereopen.me/security" target="_blank" rel="noopener noreferrer">
            Security
          </a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Here Open</span>
        <span>People. Businesses. Communities.</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}