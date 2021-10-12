import React from "react";
import Head from "next/head";
import Fecha from "@/components/date";
import Hora from "@/components/hour";

const index = () => {
  return (
    <div className="h-screen flex flex-wrap content-center justify-center">
      <Head>
        <title>Next Clock</title>
      </Head>
      <div>
        <h1 className="text-center py-3">Welcome to this Next JS Clock!</h1>
        <Fecha />
        <Hora />
      </div>
    </div>
  );
};

export default index;
