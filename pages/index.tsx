import React from "react";
import Head from "next/head";
import Fecha from "../components/date";
import Hora from "../components/hour";
import useTranslation from 'next-translate/useTranslation';

const index = () => {
  const { t } = useTranslation("common");

  return (
    <div className="h-screen flex flex-wrap content-center justify-center">
      <Head>
        <title>{t("Next_Clock")}</title>
      </Head>
      <div>
        <h1 className="text-center py-3">{t("Welcome_To_JS_Clock")}</h1>
        <Fecha />
        <Hora />
      </div>
    </div>
  );
};

export default index;
