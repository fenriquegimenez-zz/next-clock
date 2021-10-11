import React, { ReactChild, ReactElement } from "react"

type ChildType = {
  children: React.ReactNode
}

const Layout = ({ children }: ChildType) => {
  return <div className="bg-gray-800 text-white min-h-screen">{children}</div>
}

export default Layout
