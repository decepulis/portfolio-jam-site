import React, { useContext, useEffect, useState } from "react"

import { WindowThemeContext } from "../../components/contexts/WindowThemeContext"
import themes from "../../styles/themes"
import "./polyfills.jsx"

import { Link } from "gatsby"
import Helmet from "react-helmet"
import ParallaxBackground from "../utilities/ParallaxBackground"

import ios7 from "./ios7.png"

const themeOptions = Object.entries(themes).map(([themeKey, themeValue]) => [
  themeKey,
  themeValue.label,
  themeValue.disabled,
])

export default ({ children, location: { pathname } }) => {
  const [theme, setTheme, currentTheme] = useContext(WindowThemeContext)
  const [themeSelect, setThemeSelect] = useState()

  const onThemeSelectChange = e => {
    setTheme(e.target.value)
  }

  useEffect(() => {
    /* useEffect overrides the select as set by the SSR once javascript loads */
    setThemeSelect(theme)
  }, [theme, setThemeSelect])

  return (
    <>
      {/* Manage Head */}
      {currentTheme?.variables && (
        <Helmet>
          <style id="js-variables" type="text/css">
            {currentTheme?.variables}
          </style>
        </Helmet>
      )}

      {/* Manage Body */}
      <div className={`layout${pathname === "/" ? " layout--home" : ""}`}>
        <header
          className={`page-header${
            pathname === "/" ? " page-header--home" : ""
          }`}
        >
          <h1>
            <Link to="/">Darius Cepulis</Link>
          </h1>
          <select
            aria-label="Pick a Theme"
            value={themeSelect}
            onChange={onThemeSelectChange}
            onBlur={onThemeSelectChange}
          >
            {themeOptions.map(([id, label, disabled]) => (
              <option key={id} value={id} disabled={disabled}>
                {label}
              </option>
            ))}
          </select>
        </header>
        {currentTheme.id === "ios7" && pathname === "/" && (
          <ParallaxBackground
            img={ios7}
            gradient="linear-gradient(rgba(18,26,56,0.5) 0%,rgba(14,62,99,0.75) 40%,rgba(78,170,213,0.75) 80%, rgba(78,170,213,1) 100%)"
            color="rgb(25, 33, 60)"
          />
        )}
        {children}
      </div>

      {/* Manage Google Fonts */}
      {currentTheme?.fontHref && (
        <link href={currentTheme?.fontHref} rel="stylesheet" />
      )}
    </>
  )
}
