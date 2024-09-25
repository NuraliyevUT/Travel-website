import Slider from "react-slick";
import img from "../../../assets/img/canada.jpg";
//MAterial UI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, CardMedia } from "@mui/material";

import "./week.scss";
import { useTranslation } from "react-i18next";
function Week() {
  var settings = {
    dots: false,
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
    <div id="week" className="week">
      <div className="week__wrapper">
        <h2 className="week__title">{t("Best Weekly Offers In Each City")}</h2>
        <p className="week__text">
          {t(
            "Discover the best weekly offers in each city, curated just for you. Immerse yourself in a world of savings and indulge in unparalleled experiences."
          )}
        </p>
      </div>
      <Slider {...settings} className="week__slider">
        <div className="week__card">
          <CardMedia
            component="img"
            height="450"
            image="https://zamontour.uz/assets/images/deals-04.jpg"
            alt="green iguana"
            className="week__pic"
          />
          <Card className="week__item " sx={{ maxWidth: 300 }}>
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
                <Typography
                  display={"flex"}
                  alignItems={'center'}
                  variant="body2"
                  color="text.secondary"
                >
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

        <div className="week__card">
          <CardMedia
            component="img"
            height="450"
            image="https://zamontour.uz/assets/images/deals-01.jpg"
            alt="green iguana"
            className="week__pic"
          />
          <Card className="week__item " sx={{ maxWidth: 300 }}>
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
        <div className="week__card">
          <CardMedia
            component="img"
            height="450"
            image="https://zamontour.uz/assets/images/offers-01.jpg"
            alt="green iguana"
            className="week__pic"
          />
          <Card className="week__item " sx={{ maxWidth: 300 }}>
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
        <div className="week__card">
          <CardMedia
            component="img"
            height="450"
            image="https://zamontour.uz/assets/images/usa1.jpg"
            alt="green iguana"
            className="week__pic"
          />
          <Card className="week__item " sx={{ maxWidth: 300 }}>
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
        <div className="week__card">
          <CardMedia
            component="img"
            height="450"
            image="https://zamontour.uz/assets/images/europe2.jpg"
            alt="green iguana"
            className="week__pic"
          />
          <Card className="week__item " sx={{ maxWidth: 300 }}>
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
        <div className="week__card">
          <CardMedia
            component="img"
            height="450"
            image="https://zamontour.uz/assets/images/cand.jpg"
            alt="green iguana"
            className="week__pic"
          />
          <Card className="week__item " sx={{ maxWidth: 300 }}>
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
        <div className="week__card">
          <CardMedia
            component="img"
            height="450"
            image={img}
            alt="green iguana"
            className="week__pic"
          />
          <Card className="week__item " sx={{ maxWidth: 300 }}>
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
}

export default Week;
