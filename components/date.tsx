import React from "react"

const Fecha = () => {
  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    year: "numeric",
    month: "long",
  }

  const dateFormat = new Intl.DateTimeFormat("es-AR", dateOptions)
  const fecha = dateFormat.format(new Date())

  return (
    <div className="text-center ml-5">
      <h3>Hoy es {fecha}.</h3>
    </div>
  )
}

export default Fecha
