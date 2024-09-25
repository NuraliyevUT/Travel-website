import React from "react";
import "./explore.scss";

//Import Material Ui

import CardMedia from "@mui/material/CardMedia";
import { Button, CardContent, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
const Explore = () => {
  const { t } = useTranslation();

  return (
    <div id="explore" className="explore">
      <hr className="explore__hr" />
      <div className="explore__wrapper">
        <h2 className="explore__title">
          {t("Explore Destinations With Ease")}
        </h2>
        <p className="explore__text">
          {t(
            "Find the best deals on railway and airplane tickets in each city, carefully selected for you."
          )}
        </p>

        <div className="explore__cards">
          <div className="explore__card">
            <CardMedia
              component="img"
              height="200"
              image="https://zamontour.uz/assets/images/afr.jpg"
              alt="green iguana"
              className="explore__img"
            />

            <div className="explore__card-right">
              <CardContent>
                <div className="explore__card-top">
                  <div>
                    <Typography
                      gutterBottom
                      variant="h5"
                      className="explore__subtitle"
                      component="div"
                    >
                      {t("Cheap Railway Tickets With Us")}
                    </Typography>
                    <Typography gutterBottom variant="h8" component="div">
                      {t("Whole world")}
                    </Typography>
                  </div>
                  <a href="#reservation">
                    <Button className="explore__btn" variant="contained">
                      {t("Make a Reservation")}
                    </Button>
                  </a>
                </div>
                <Typography
                  className="explore__card-text"
                  variant="body2"
                  color="text.secondary"
                >
                  {t(
                    `Embark on a railway adventure and explore destinations worldwide. Whether it's the picturesque landscapes, bustling cities, or cultural gems, our rail services offer a unique and comfortable way to traverse the globe. Immerse yourself in the beauty of different cultures, all accessible through our extensive railway network. .`
                  )}
                </Typography>
              </CardContent>
            </div>
          </div>

          <hr className="explore__hr" />

          <div className="explore__card">
            <CardMedia
              component="img"
              height="200"
              image="https://zamontour.uz/assets/images/airplane.jpg"
              alt="green iguana"
              className="explore__img"
            />

            <div className="explore__card-right">
              <CardContent>
                <div className="explore__card-top">
                  <div>
                    <Typography
                      gutterBottom
                      variant="h5"
                      className="explore__subtitle"
                      component="div"
                    >
                      {t("Discover Exciting Air Travel Deals")}
                    </Typography>
                    <Typography gutterBottom variant="h8" component="div">
                      {t("Global Destinations")}
                    </Typography>
                  </div>
                  <a href="#reservation">
                    <Button className="explore__btn" variant="contained">
                      {t("Make a Reservation")}
                    </Button>
                  </a>
                </div>
                <Typography
                  className="explore__card-text"
                  variant="body2"
                  color="text.secondary"
                >
                  {t(
                    `Embark on an airborne adventure and explore destinations worldwide. Whether it's the breathtaking landscapes, vibrant cities, or cultural treasures, our airline services provide a convenient and exhilarating way to navigate the globe. Immerse yourself in the richness of diverse cultures, all easily accessible through our extensive air travel network. .`
                  )}
                  .
                </Typography>
              </CardContent>
            </div>
          </div>

          <hr className="explore__hr" />
        </div>
      </div>
    </div>
  );
};

export default Explore;
