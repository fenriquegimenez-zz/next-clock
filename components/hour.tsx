import React, { useState, useEffect } from "react"

const Hora = () => {
  const [hour, setHour] = useState<Date>(new Date())

  const hourOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  }

  const hourFormat = new Intl.DateTimeFormat("es-AR", hourOptions)
  const hora = hourFormat.format(hour)

  const getHora = (date: Date) => {
    const ONE_SECOND = 1000
    useEffect(() => {
      const time = setTimeout(() => {
        setHour(date)
      }, ONE_SECOND)
      return () => {
        clearTimeout(time)
      }
    }, [hour])
    return hora
  }

  return (
    <div className="text-center ml-5">
      <h3>Son las {getHora(new Date())}.</h3>
    </div>
  )
}

export default Hora
