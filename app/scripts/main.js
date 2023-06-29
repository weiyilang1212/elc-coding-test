/**
 * The Initial React Setup file
 * ...
 *
 * === CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 *
 * == JS
 * All files in here start from this init point for the React Components.
 *
 *
 * Firstly we need to import the React JS Library
 */
import React, { useState } from "react";
import { createRoot } from "react-dom/client";

import Menu from "./components/menu";
import Home from "./components/home";
import axios from "axios";
import { SearchContext } from "./contexts/search-context.js";

/**
 * We can start our initial App here in the main.js file
 */

const App = () => {
  const [searchResult, setSearchResult] = useState([]);
  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof App
   */

  axios.defaults.baseURL = "http://localhost:3035";
  return (
    <SearchContext.Provider value={{ searchResult, setSearchResult }}>
      <div className="App">
        <Menu />
        <Home />
      </div>
    </SearchContext.Provider>
  );
};

// Render this out
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
