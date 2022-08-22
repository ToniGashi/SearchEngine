import React, {useState} from "react";

import {Navbar} from "./components/Navbar"
import {Footer} from "./components/Footer"
import {Routes} from "./components/Routes";
import RouteNavigation from "./components/RouteNavigation"

export default function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? "dark bg-gray-500 h-screen" : ""}>
      <div className="h-screen ">
        <Navbar isDark={isDark} setIsDark={setIsDark}/>
        <RouteNavigation />
        <Routes />
        <Footer />
      </div>
    </div>
  )
}