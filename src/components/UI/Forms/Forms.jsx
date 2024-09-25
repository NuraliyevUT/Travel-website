import React, { useState } from "react";
import "./forms.scss";
import axios from "axios";
import { FormControl, Input, FormGroup, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Bounce, toast } from "react-toastify";
const Forms = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
  const [country, setCountry] = useState("");
  const [surName, setSurName] = useState("");
  const [date, setDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const userData = {
    name: name,
    number: number,
    country: country,
    setName: surName,
    date: date,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(!loading);

    if (date && surName && name && country && number) {
      const token = `7276780290:AAFZ5uwwEw3HwQn86eHxCV126WTpGdZ5pvo`;
      const chat_id = -1002176782841;
      const url = `https://api.telegram.org/bot${token}/sendMessage`;

      axios({
        url: url,
        method: "POST",
        data: {
          chat_id: chat_id,
          text: JSON.stringify(userData),
        },
      })
        .then((data) => {
          toast.success("🦄 Malumot yuborildi Tezda aloqaga chiqamiz !!! ", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
        })
        .catch((error) => {
          toast.error(`${error}`, {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      toast.warn("🦄 Iltimos malumot kiriting!! ", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }

    e.target.reset();
  };

  return (
    <form id="forms" onSubmit={handleSubmit} className="forms">
      <div className="forms__wrapper">
        <FormGroup className="maps__form">
          <h2 className="maps__title">
            {t("Make Your Reservation Through This Form")}
          </h2>
          <div className="maps__inputs">
            <div className="maps__left">
              <FormControl className="maps__control" size="small" focused>
                <Input
                  required
                  onChange={(e) => {
                    setName(e.target.value.trim());
                  }}
                  type="text"
                  placeholder={t("Your name example John")}
                />
              </FormControl>

              <FormControl className="maps__control" size="small" focused>
                <Input
                  required
                  type="text"
                  placeholder={t("Your surname  example : Smith")}
                  onChange={(e) => {
                    setSurName(e.target.value.trim());
                  }}
                />
              </FormControl>
            </div>
            <div className="maps__right">
              <FormControl className="maps__control">
                <Input
                  required
                  onChange={(e) => {
                    setNumber(e.target.value.trim());
                  }}
                  placeholder={t("Your number example : +998950090845")}
                  type="number"
                />
              </FormControl>
              <FormControl className="maps__control">
                <Input
                  required
                  onChange={(e) => {
                    setDate(e.target.value.trim());
                  }}
                  placeholder={t("Ex. +998910050913")}
                  type="date"
                />
              </FormControl>
            </div>
          </div>

          <FormControl>
            <Input
              required
              onChange={(e) => {
                setCountry(e.target.value.trim());
              }}
              list="list"
              type="text"
              placeholder={t("Saudi Arabia")}
            />
          </FormControl>
          <br />

          <Button onLoad={loading} type="submit" variant="contained">
            {loading === true ? t("Sending...") : t("Send")}
          </Button>
        </FormGroup>
      </div>
    </form>
  );
};

export default Forms;
