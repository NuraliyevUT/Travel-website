import React from "react";
import "./visa.scss";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

const Visa = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { t } = useTranslation();

  return (
    <div className="visa">
      <hr className="visa__hr" />
      <div className="visa__wrapper">
        <h2 className="visa__title">{t("Visa Support")}</h2>
        <p className="visa__text">
          {t(
            "Experience stress-free travel with our expert visa support. We provide seamless assistance and comprehensive guidance, ensuring a smooth journey."
          )}
        </p>
      </div>

      <Slider {...settings} className="week__slider">
        <div className="week__card visa__card">
          <CardMedia
            component="img"
            height="450"
            image="https://zamontour.uz/assets/images/china.jpg"
            alt="green iguana"
            className="week__pic visa__pic"
          />
          <Card className="week__item visa__item " sx={{ maxWidth: 280}}>
            <CardActionArea>
              <div className="week__card-top">
                <div className="week__card-wrapper">
                  <h3 className="week__card-title">{t("Canada")}</h3>
                  <h2 className="week__card-price">$800</h2>
                </div>

                <div className="week__card-box">
                  <div>
                    <i className="fa-solid fa-users"></i>
                    <span className="week__card-subtext">
                      {t("345 Check Ins")}
                    </span>
                  </div>

                  <div>
                    <p className="week__card-subtext">{t("/person")}</p>
                  </div>
                </div>
              </div>

              <hr className="week__hr" />

              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  {t("Deal Includes")}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i className="fa-solid fa-car"></i>
                  <span className="week__card-subtext">
                    {t("5 Days Trip > Hotel Included")}
                  </span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i className="fa-solid fa-plane"></i>
                  <span className="week__card-subtext">
                    {t("Airplane Bill Included")}
                  </span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i className="fa-solid fa-building"></i>
                  <span className="week__card-subtext">
                    {t("Daily Places Visit")}
                  </span>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
                 <a href="#forms">
                <Button variant="contained">{t("Make a Reservation")}</Button>
            </a>
            </CardActions>
          </Card>
        </div>

        <div className="week__card visa__card">
          <CardMedia
            component="img"
            height="450"
            image="https://zamontour.uz/assets/images/hongkong.jpg"
            alt="green iguana"
            className="week__pic visa__pic"
          />
          <Card className="week__item visa__item " sx={{ maxWidth: 280}}>
            <CardActionArea>
              <div className="week__card-top">
                <div className="week__card-wrapper">
                  <h3 className="week__card-title">{t("Canada")}</h3>
                  <h2 className="week__card-price">$800</h2>
                </div>

                <div className="week__card-box">
                  <div>
                    <i className="fa-solid fa-users"></i>
                    <span className="week__card-subtext">
                      {t("345 Check Ins")}
                    </span>
                  </div>

                  <div>
                    <p className="week__card-subtext">{t("/person")}</p>
                  </div>
                </div>
              </div>

              <hr className="week__hr" />

              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  {t("Deal Includes")}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i className="fa-solid fa-car"></i>
                  <span className="week__card-subtext">
                    {t("5 Days Trip > Hotel Included")}
                  </span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i className="fa-solid fa-plane"></i>
                  <span className="week__card-subtext">
                    {t("Airplane Bill Included")}
                  </span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i className="fa-solid fa-building"></i>
                  <span className="week__card-subtext">
                    {t("Daily Places Visit")}
                  </span>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
                 <a href="#forms">
                <Button variant="contained">{t("Make a Reservation")}</Button>
            </a>
            </CardActions>
          </Card>
        </div>

        <div className="week__card visa__card">
          <CardMedia
            component="img"
            height="450"
            image="https://zamontour.uz/assets/images/europe.jpeg"
            alt="green iguana"
            className="week__pic visa__pic"
          />
          <Card className="week__item visa__item " sx={{ maxWidth: 280}}>
            <CardActionArea>
              <div className="week__card-top">
                <div className="week__card-wrapper">
                  <h3 className="week__card-title">{t("Canada")}</h3>
                  <h2 className="week__card-price">$800</h2>
                </div>

                <div className="week__card-box">
                  <div>
                    <i className="fa-solid fa-users"></i>
                    <span className="week__card-subtext">
                      {t("345 Check Ins")}
                    </span>
                  </div>

                  <div>
                    <p className="week__card-subtext">{t("/person")}</p>
                  </div>
                </div>
              </div>

              <hr className="week__hr" />

              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  {t("Deal Includes")}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i className="fa-solid fa-car"></i>
                  <span className="week__card-subtext">
                    {t("5 Days Trip > Hotel Included")}
                  </span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i className="fa-solid fa-plane"></i>
                  <span className="week__card-subtext">
                    {t("Airplane Bill Included")}
                  </span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i className="fa-solid fa-building"></i>
                  <span className="week__card-subtext">
                    {t("Daily Places Visit")}
                  </span>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
                 <a href="#forms">
                <Button variant="contained">{t("Make a Reservation")}</Button>
            </a>
            </CardActions>
          </Card>
        </div>

        <div className="week__card visa__card">
          <CardMedia
            component="img"
            height="450"
            image="https://zamontour.uz/assets/images/india.jpg"
            alt="green iguana"
            className="week__pic visa__pic"
          />
          <Card className="week__item visa__item " sx={{ maxWidth: 280}}>
            <CardActionArea>
              <div className="week__card-top">
                <div className="week__card-wrapper">
                  <h3 className="week__card-title">{t("Canada")}</h3>
                  <h2 className="week__card-price">$800</h2>
                </div>

                <div className="week__card-box">
                  <div>
                    <i className="fa-solid fa-users"></i>
                    <span className="week__card-subtext">
                      {t("345 Check Ins")}
                    </span>
                  </div>

                  <div>
                    <p className="week__card-subtext">{t("/person")}</p>
                  </div>
                </div>
              </div>

              <hr className="week__hr" />

              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  {t("Deal Includes")}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i className="fa-solid fa-car"></i>
                  <span className="week__card-subtext">
                    {t("5 Days Trip > Hotel Included")}
                  </span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i className="fa-solid fa-plane"></i>
                  <span className="week__card-subtext">
                    {t("Airplane Bill Included")}
                  </span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i className="fa-solid fa-building"></i>
                  <span className="week__card-subtext">
                    {t("Daily Places Visit")}
                  </span>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
                 <a href="#forms">
                <Button variant="contained">{t("Make a Reservation")}</Button>
            </a>
            </CardActions>
          </Card>
        </div>

        <div className="week__card visa__card">
          <CardMedia
            component="img"
            height="450"
            image="https://zamontour.uz/assets/images/saudi.jpg"
            alt="green iguana"
            className="week__pic visa__pic"
          />
          <Card className="week__item visa__item " sx={{ maxWidth: 280}}>
            <CardActionArea>
              <div className="week__card-top">
                <div className="week__card-wrapper">
                  <h3 className="week__card-title">{t("Canada")}</h3>
                  <h2 className="week__card-price">$800</h2>
                </div>

                <div className="week__card-box">
                  <div>
                    <i className="fa-solid fa-users"></i>
                    <span className="week__card-subtext">
                      {t("345 Check Ins")}
                    </span>
                  </div>

                  <div>
                    <p className="week__card-subtext">{t("/person")}</p>
                  </div>
                </div>
              </div>

              <hr className="week__hr" />

              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  {t("Deal Includes")}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i className="fa-solid fa-car"></i>
                  <span className="week__card-subtext">
                    {t("5 Days Trip > Hotel Included")}
                  </span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i className="fa-solid fa-plane"></i>
                  <span className="week__card-subtext">
                    {t("Airplane Bill Included")}
                  </span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i className="fa-solid fa-building"></i>
                  <span className="week__card-subtext">
                    {t("Daily Places Visit")}
                  </span>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
                 <a href="#forms">
                <Button variant="contained">{t("Make a Reservation")}</Button>
            </a>
            </CardActions>
          </Card>
        </div>

        <div className="week__card visa__card">
          <CardMedia
            component="img"
            height="450"
            image="https://zamontour.uz/assets/images/oman.jpg"
            alt="green iguana"
            className="week__pic visa__pic"
          />
          <Card className="week__item visa__item " sx={{ maxWidth: 280}}>
            <CardActionArea>
              <div className="week__card-top">
                <div className="week__card-wrapper">
                  <h3 className="week__card-title">{t("Canada")}</h3>
                  <h2 className="week__card-price">$800</h2>
                </div>

                <div className="week__card-box">
                  <div>
                    <i className="fa-solid fa-users"></i>
                    <span className="week__card-subtext">
                      {t("345 Check Ins")}
                    </span>
                  </div>

                  <div>
                    <p className="week__card-subtext">{t("/person")}</p>
                  </div>
                </div>
              </div>

              <hr className="week__hr" />

              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  {t("Deal Includes")}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i className="fa-solid fa-car"></i>
                  <span className="week__card-subtext">
                    {t("5 Days Trip > Hotel Included")}
                  </span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i className="fa-solid fa-plane"></i>
                  <span className="week__card-subtext">
                    {t("Airplane Bill Included")}
                  </span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i className="fa-solid fa-building"></i>
                  <span className="week__card-subtext">
                    {t("Daily Places Visit")}
                  </span>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
                 <a href="#forms">
                <Button variant="contained">{t("Make a Reservation")}</Button>
            </a>
            </CardActions>
          </Card>
        </div>
      </Slider>
    </div>
  );
};

export default Visa;
