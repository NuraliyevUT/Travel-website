import React from "react";
import { useTranslation } from "react-i18next";
import "./location.scss";
const Location = () => {
  const { t } = useTranslation();

  return (
    <div className="location">
      <h2 className="Location__title">{t("Best Locations")}</h2>
      <p className="location__text">
        {t(
          "Discover the best offers in each city, curated just for you. Immerse yourself in a world of savings and indulge in unparalleled experiences."
        )}
      </p>
      <div className="location__wrapper">
        <input type="radio" name="slide" id="c1" checked />
        <label htmlFor="c1" className="card">
          <div className="row">
            <div className="description">
              <h4>Nyu York</h4>
              <p>{t("Dubai")}</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c2" />
        <label htmlFor="c2" className="card">
          <div className="row">
            <div className="description">
              <h4>Antalya</h4>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c3" />
        <label htmlFor="c3" className="card">
          <div className="row">
            <div className="description">
              <h4>Istanbul</h4>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c4" />
        <label htmlFor="c4" className="card">
          <div className="row">
            <div className="description">
              <h4>Sharm El-Sheikh</h4>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Location;
