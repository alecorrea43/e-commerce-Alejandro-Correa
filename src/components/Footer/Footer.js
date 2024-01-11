import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <h2 className="footer-titles">Contact</h2>
          <div className="icon-container">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/e-commerce-coderhouse-b0e54.appspot.com/o/icons%2Ficons8-linkedin-circled-30.png?alt=media&token=2d985df6-db77-474a-b48a-cf9d5b37eb36"
              alt=""
            />
            <a
              href="https://www.linkedin.com/in/alejandro-correa-6910b1251/"
              style={{ alignSelf: "flex-end" }}
              target="_blank"
            >
              Linkedin
            </a>
          </div>
          <div className="icon-container">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/e-commerce-coderhouse-b0e54.appspot.com/o/icons%2Ficons8-github-30.png?alt=media&token=4f871577-0349-4f1c-9a8e-dc03e4f48d46"
              alt=""
            />
            <a
              href="https://github.com/alecorrea43"
              target="_blank"
              style={{ alignSelf: "flex-end" }}
            >
              GitHub
            </a>
          </div>
          <div className="icon-container">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/e-commerce-coderhouse-b0e54.appspot.com/o/icons%2Ficons8-gmail-logo-30.png?alt=media&token=c1328138-028c-4637-9373-57d4b5f2637d"
              alt=""
            />
            <p style={{ alignSelf: "flex-end" }}>itznecro.4376761@gmail.com</p>
          </div>
        </div>
        <div className="footer-container">
          <h2 className="footer-titles">Help</h2>
          <p>Work with us</p>
          <p>Customer Support</p>
          <p>Invoice</p>
        </div>
        <div className="footer-container">
          <h2 className="footer-titles">Terms and conditions</h2>
          <p>Responsible Disclosure Policy</p>
          <p>Privacy policy</p>
        </div>
      </footer>

      <p className="copyright">Copyright © 2023 The Oak Furniture Shop</p>
    </>
  );
}

export default Footer;
