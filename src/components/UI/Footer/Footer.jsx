import React from "react";
import "./footer.scss";

import { useTranslation } from "react-i18next";

import Button from "@mui/material/Button";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__left">
          <h2 className="footer__title">{t("ARE YOU LOOKING TO TRAVEL ?")}</h2>
          <p className="footer__text">
            {t("Make A Reservation By Clicking The Button")}
          </p>
        </div>
        <a href="tel:+998910050508">
          <Button variant="contained">{t("Book Yours Now")}</Button>
        </a>
      </div>
    </div>
  );
};

export default Footer;
