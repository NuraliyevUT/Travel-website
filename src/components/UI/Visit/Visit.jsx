import React from "react";
import "./visit.scss";
import { Button, CardContent, CardMedia, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
const Visit = () => {
  const { t } = useTranslation();

  return (
    <div className="visit">
      <div className="visit__wrapper">
        <h2 className="visit__title explore__title">
          {t("Visit One Of Our Countries Now")}
        </h2>
        <p className="explore__text visit__text">
          {t(
            "Discover the best offers in each city, curated just for you. Immerse yourself in a world of savings and indulge in unparalleled experiences."
          )}
        </p>

        <div className="visit__cards">
          <div className="explore__card visit__card">
            <CardMedia
              component="img"
              height="200"
              image="https://zamontour.uz/assets/images/dubai2.jpg"
              alt="green iguana"
              className="explore__img"
            />

            <div className="explore__card-right">
              <CardContent>
                <div className="explore__card-top ">
                  <div>
                    <Typography
                      gutterBottom
                      variant="h5"
                      className="explore__subtitle visit__subtitle"
                      component="div"
                    >
                      {t("Dubai")}
                    </Typography>
                    <Typography
                      className="visit__maintext"
                      gutterBottom
                      variant="h8"
                      component="div"
                    >
                      {t("United Arab Emirated")}
                    </Typography>
                  </div>
                  <a href="#reservation">
                    <Button variant="contained">
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
                    `Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks.`
                  )}
                </Typography>
              </CardContent>

              <hr className="explore__hr" />
              <div className="visit__card-bottom">
                <div className="visit__box">
                  <i className="fa-solid fa-user"></i>
                  <Typography
                    className="visit__maintext"
                    gutterBottom
                    variant="h8"
                    component="div"
                    marginTop={"8px"}
                  >
                    {t("8.66 Mil People")}
                  </Typography>
                </div>
                <div className="visit__box">
                  <i className="fa-solid fa-earth-americas"></i>
                  <Typography
                    className="visit__maintext"
                    gutterBottom
                    variant="h8"
                    component="div"
                    marginTop={"5px"}
                  >
                    {t("41.290 km2")}
                  </Typography>
                </div>{" "}
                <div className="visit__box">
                  <i className="fa-solid fa-house"></i>
                  <Typography
                    className="visit__maintext"
                    gutterBottom
                    variant="h8"
                    component="div"
                    marginTop={"8px"}
                  >
                    {t("$1.100.200")}
                  </Typography>
                </div>
              </div>

              <hr className="explore__hr" />
              <a href="#maps" className="visit__links">
                {t("Need Directions ?")}{" "}
                <i className="fa-solid fa-right-long"></i>
              </a>
            </div>
          </div>

          <div className="explore__card visit__card">
            <CardMedia
              component="img"
              height="200"
              width="300"
              image="https://zamontour.uz/assets/images/country-02.jpg"
              alt="green iguana"
              className="explore__img"
            />

            <div className="explore__card-right">
              <CardContent>
                <div className="explore__card-top ">
                  <div>
                    <Typography
                      gutterBottom
                      variant="h5"
                      className="explore__subtitle visit__subtitle"
                      component="div"
                    >
                      {t("Antalya")}
                    </Typography>
                    <Typography
                      className="visit__maintext"
                      gutterBottom
                      variant="h8"
                      component="div"
                    >
                      {t("Turkey")}
                    </Typography>
                  </div>
                  <a href="#reservation">
                    <Button variant="contained">
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
                    `Antalya is the fastest-growing city in Turkey, and tourists from around the world are discovering its fabulous mix of great beaches and traditional Turkish culture. Kids will love the Beach Park, which features Aqua Land (a waterslide-fanatic's dream) and Dolphin Land (home to dolphins, sea lions and white whales). Make sure to explore the old town center and to see Hadrian's Gate.`
                  )}
                </Typography>
              </CardContent>

              <hr className="explore__hr" />
              <div className="visit__card-bottom">
                <div className="visit__box">
                  <i className="fa-solid fa-user"></i>
                  <Typography
                    className="visit__maintext"
                    gutterBottom
                    variant="h8"
                    component="div"
                    marginTop={"8px"}
                  >
                    {t("44.48 Mil People")}
                  </Typography>
                </div>
                <div className="visit__box">
                  <i className="fa-solid fa-earth-americas"></i>
                  <Typography
                    className="visit__maintext"
                    gutterBottom
                    variant="h8"
                    component="div"
                    marginTop={"6px"}
                  >
                    {t("275.400 km2")}
                  </Typography>
                </div>{" "}
                <div className="visit__box">
                  <i className="fa-solid fa-house"></i>
                  <Typography
                    className="visit__maintext"
                    gutterBottom
                    variant="h8"
                    component="div"
                    marginTop={"8px"}
                  >
                    {t("$946.000")}
                  </Typography>
                </div>
              </div>

              <hr className="explore__hr" />
              <a href="#maps" className="visit__links">
                {t("Need Directions ?")}{" "}
                <i className="fa-solid fa-right-long"></i>
              </a>
            </div>
          </div>

          <div className="explore__card visit__card">
            <CardMedia
              component="img"
              height="200"
              image="https://zamontour.uz/assets/images/sharm2.jpg"
              alt="green iguana"
              className="explore__img"
            />

            <div className="explore__card-right">
              <CardContent>
                <div className="explore__card-top ">
                  <div>
                    <Typography
                      gutterBottom
                      variant="h5"
                      className="explore__subtitle visit__subtitle"
                      component="div"
                    >
                      {t("Sharm El-Sheikh")}
                    </Typography>
                    <Typography
                      className="visit__maintext"
                      gutterBottom
                      variant="h8"
                      component="div"
                    >
                      {t("Egypt")}
                    </Typography>
                  </div>
                  <a href="#reservation">
                    <Button variant="contained">
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
                    `Sharm El Sheikh is the center of tourism action in Sinai Peninsula and it has the world top diving sites. Specially the underwater wonders of Ras Mohammed national park that took Sharm city to whole different level. The city has diving and shipwreck sites that attract both advanced and recreational divers from around the world to discover the un parallel marine life deep down the red sea.`
                  )}
                </Typography>
              </CardContent>

              <hr className="explore__hr" />
              <div className="visit__card-bottom">
                <div className="visit__box">
                  <i className="fa-solid fa-user"></i>
                  <Typography
                    className="visit__maintext"
                    gutterBottom
                    variant="h8"
                    component="div"
                    marginTop={"8px"}
                  >
                    {t("44.48 Mil People")}
                  </Typography>
                </div>
                <div className="visit__box">
                  <i className="fa-solid fa-earth-americas"></i>
                  <Typography
                    className="visit__maintext"
                    gutterBottom
                    variant="h8"
                    component="div"
                    marginTop={"5px"}
                  >
                    {t("275.400 km2")}
                  </Typography>
                </div>{" "}
                <div className="visit__box">
                  <i className="fa-solid fa-house"></i>
                  <Typography
                    className="visit__maintext"
                    gutterBottom
                    variant="h8"
                    component="div"
                    marginTop={"8px"}
                  >
                    {t("$946.000")}
                  </Typography>
                </div>
              </div>

              <hr className="explore__hr" />
              <a href="#maps" className="visit__links">
                {t("Need Directions ?")}{" "}
                <i className="fa-solid fa-right-long"></i>
              </a>
            </div>
          </div>

          <div className="explore__card visit__card">
            <CardMedia
              component="img"
              height="200"
              image="https://zamontour.uz/assets/images/istanbul3.jpg"
              alt="green iguana"
              className="explore__img"
            />

            <div className="explore__card-right">
              <CardContent>
                <div className="explore__card-top ">
                  <div>
                    <Typography
                      gutterBottom
                      variant="h5"
                      className="explore__subtitle visit__subtitle"
                      component="div"
                    >
                      {t("Istanbul")}
                    </Typography>
                    <Typography
                      className="visit__maintext"
                      gutterBottom
                      variant="h8"
                      component="div"
                    >
                      {t("Turkey")}
                    </Typography>
                  </div>
                  <a href="#reservation">
                    <Button variant="contained">
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
                    `Istanbul is the most populous city in Turkey and its cultural, economic and historic center. It is located in north-western part of Turkey, divided into European and Asian side by Bosphorus, which connects the Sea of Marmara and Black Sea. It is the only city in the world that sits on two continents.`
                  )}
                </Typography>
              </CardContent>

              <hr className="explore__hr" />
              <div className="visit__card-bottom">
                <div className="visit__box">
                  <i className="fa-solid fa-user"></i>
                  <Typography
                    className="visit__maintext"
                    gutterBottom
                    variant="h8"
                    component="div"
                    marginTop={"8px"}
                  >
                    {t("67.41 Mil People")}
                  </Typography>
                </div>
                <div className="visit__box">
                  <i className="fa-solid fa-earth-americas"></i>
                  <Typography
                    className="visit__maintext"
                    gutterBottom
                    variant="h8"
                    component="div"
                    marginTop={"5px"}
                  >
                    {t("551.500 km2")}
                  </Typography>
                </div>{" "}
                <div className="visit__box">
                  <i className="fa-solid fa-house"></i>
                  <Typography
                    className="visit__maintext"
                    gutterBottom
                    variant="h8"
                    component="div"
                    marginTop={"8px"}
                  >
                    {t("$425.600")}
                  </Typography>
                </div>
              </div>

              <hr className="explore__hr" />
              <a href="#maps" className="visit__links">
                {t("Need Directions ?")}{" "}
                <i className="fa-solid fa-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visit;
