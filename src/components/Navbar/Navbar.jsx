import "./navbar.scss";
import logo from "../../assets/img/zamon.svg";
import { useEffect, useState } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { Bounce, toast } from "react-toastify";
const Navbar = () => {
  const [showNav, setShownav] = useState(false);
  const [language, setLanguage] = useState("");
  const { t } = useTranslation();
  const storedLanguage = localStorage.getItem("language");

  useEffect(() => {
    // localStorage dan til ma'lumotini olish
    // const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLanguage(storedLanguage);
    } else {
      // Agar localStorage da til bo'lmasa, default tilni o'rnating
      localStorage.setItem("language", "uzbek"); // default tilni o'rnatish, masalan uzbek
      setLanguage("uz"); // default tilni komponentga joylashtirish
    }
  }, []);

  const handleChangeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage); // localStorage ga saqlash
  };

  //Open navbar or
  const handleNavbar = () => {
    setShownav(!showNav);
  };

  const handleChange = (e) => {
    handleChangeLanguage(e.target.value);
    const selectedLanguage = e.target.value;
    i18next.changeLanguage(selectedLanguage);
  };

  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <img src={logo} alt="" className="navbar__logo" />

        <div id={showNav ? "block" : "hodden"} className="navbar__box">
          <ul className="navbar__list">
            <li
              onClick={() => {
                handleNavbar();
              }}
              className="navbar__item"
            >
              <a href="#" className="navbar__link">
                {t("Home")}
              </a>
            </li>
            <li
              onClick={() => {
                handleNavbar();
              }}
              className="navbar__item"
            >
              <a href="#explore" className="navbar__link">
                {t("About")}
              </a>
            </li>{" "}
            <li
              onClick={() => {
                handleNavbar();
              }}
              className="navbar__item"
            >
              <a href="#week" className="navbar__link">
                {t("Tour")}
              </a>
            </li>{" "}
            <li
              onClick={() => {
                handleNavbar();
              }}
              className="navbar__item"
            >
              <a href="#reservation" className="navbar__link">
                {t("Contact")}
              </a>
            </li>
          </ul>

          <div className="navbar__languages">
            <select
              value={storedLanguage}
              onChange={handleChange}
              name="lang"
              id="lang"
            >
              <option value="uz">Uz</option>
              <option value="en">En</option>
              <option value="ru">Ru</option>
            </select>
            <a target="_blank" href="https://web.telegram.org/">
              <p className="navbar__laguage">
                <i className="fa-brands fa-telegram"></i>
              </p>
            </a>
            <a target="_blank" href="https://www.instagram.com/accounts/login/">
              <p className="navbar__laguage">
                <i className="fa-brands fa-square-instagram"></i>
              </p>
            </a>
          </div>
        </div>
        <div
          onClick={() => {
            handleNavbar();
          }}
          className="navbar__burger"
        >
          <hr className="navbar__hr" />
          <hr className="navbar__hr" />
          <hr className="navbar__hr" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
