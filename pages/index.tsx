import React from "react"
import Fecha from "../components/date"
import Hora from "../components/hour"
import Head from "next/head"

const index = () => {
  return (
    <div className="container">
      <Head>
        <title>Next Clock</title>
      </Head>
      <h1 className="text-center mx-auto my-auto py-3">
        Welcome to this Next JS Clock!
      </h1>
      <Fecha />
      <Hora />
    </div>
  )
}

export default index
