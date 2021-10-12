import React from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

const Fecha = () => {
const { t } = useTranslation("common");

  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    year: "numeric",
    month: "long",
  };

  const dateFormat = new Intl.DateTimeFormat(useRouter().locale, dateOptions);
  const fecha = dateFormat.format(new Date());

  return (
    <div className="text-center ml-5">
      <h3>{t("Today")} {fecha}.</h3>
    </div>
  );
};

export default Fecha
