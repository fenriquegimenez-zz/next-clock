import React from "react"
import Fecha from "../components/date"
import Hora from "../components/hour"
import Head from "next/head"

const index = () => {
  return (
    <div className="h-screen flex flex-wrap content-center justify-center">
      <Head>
        <title>Next Clock</title>
      </Head>
      <div>
        <h1 className="text-center mx-auto my-auto py-3">
          Welcome to this Next JS Clock!
        </h1>
        <Fecha />
        <Hora />
      </div>
    </div>
  )
}

export default index
