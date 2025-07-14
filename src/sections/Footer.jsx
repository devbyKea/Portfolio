import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p></p>
        </div>
        <div className="socials">
  {socialImgs.map((socialImg, index) => (
    <a
      key={index}
      href={socialImg.url}
      target="_blank"
      rel="noopener noreferrer"
      className="icon"
    >
      <img src={socialImg.imgPath} alt="social icon" />
    </a>
  ))}
</div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} DevByKea. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;