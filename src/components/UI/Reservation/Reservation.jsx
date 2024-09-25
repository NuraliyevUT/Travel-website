import Button from "@mui/material/Button";
import "./reservation.scss";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
const Reservation = () => {
  const { t } = useTranslation();
  return (
    <div id="reservation" className="reservation">
      <div className="reservation__wrapper">
        <p className="reservation__subtext">{t("Book Prefered Deal Here")}</p>
        <hr className="explore__hr reservation__hr" />
        <h2 className="reservation__title">{t("Make Your Reservation")}</h2>
      <a href="#forms">
      <Button variant="outlined">{t("Discover More")}</Button>
      </a>

        <div className="reservation__cards">
          <div className="reservation__card">
            <span className="reservation__sircle intro__sircle">
              <i className="fa-solid fa-location-dot"></i>
            </span>

            <Typography
              fontFamily={"sans-serif"}
              fontWeight="700"
              gutterBottom
              variant="h6"
              component="div"
              textAlign="center"
            >
              {t("Make a Phone Call")}
            </Typography>
            <a href="tel:+998910050505">
              <Typography
                fontFamily={"sans-serif"}
                variant="body2"
                color="text.secondary"
                textAlign="center"
              >
                +998910057989
              </Typography>
            </a>
          </div>
          <div className="reservation__card">
            <span className="reservation__sircle intro__sircle">
              <i className="fa-solid fa-location-dot"></i>
            </span>

            <Typography
              fontFamily={"sans-serif"}
              fontWeight="700"
              gutterBottom
              variant="h6"
              component="div"
              textAlign="center"
            >
              {t("Contact Us via Email")}
            </Typography>
            <a href="mailto:zamantaur@g,ail.com">
              <Typography
                fontFamily={"sans-serif"}
                variant="body2"
                color="text.secondary"
                textAlign="center"
              >
                zamonbiznestour@mail.ru
              </Typography>
            </a>
          </div>
          <div className="reservation__card">
            <span className="reservation__sircle intro__sircle">
              <i className="fa-solid fa-location-dot"></i>
            </span>

            <Typography
              fontFamily={"sans-serif"}
              fontWeight="700"
              gutterBottom
              variant="h6"
              component="div"
              textAlign="center"
            >
              {t("Visit Our Offices")}
            </Typography>
            <a href="#">
              <Typography
                fontFamily={"sans-serif"}
                variant="body2"
                color="text.secondary"
                textAlign="center"
              >
                {t("15/25, Chilanzar - 9, Tashkent city")}
              </Typography>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;

{
  /* <Card className="reservation__card" sx={{ maxWidth: 400 }} >
            <CardActionArea>
              <span className="reservation__sircle intro__sircle">
                <i className="fa-solid fa-phone"></i>
              </span>
              <CardContent>
                <Typography
                  fontFamily="Poppins"
                  fontWeight="700"
                  gutterBottom
                  variant="h6"
                  component="div"
                  textAlign="center"
                >
                  Make a Phone Call
                </Typography>
                <Typography
                  fontFamily="Poppins"
                  variant="body2"
                  color="text.secondary"
                  textAlign="center"
                >
                  +998 99 299 99 96
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card> */
}

{
  /* <Card className="reservation__card" sx={{ maxWidth: 400 }}>
            <CardActionArea>
              <span className="reservation__sircle intro__sircle">
                <i className="fa-solid fa-location-dot"></i>
              </span>
              <CardContent>
                <Typography
                  fontFamily="Poppins"
                  fontWeight="700"
                  gutterBottom
                  variant="h6"
                  component="div"
                  textAlign="center"
                >
                  Visit Our Offices
                </Typography>
                <Typography
                  fontFamily="Poppins"
                  variant="body2"
                  color="text.secondary"
                  textAlign="center"
                >
                  15/25, Chilanzar - 9, Tashkent
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card> */
}
