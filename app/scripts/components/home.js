/**
 * This file will hold the Main content that lives in the main body of the site
 *
 */
import React, { useContext } from "react";
import ProductCard from "./product-card.js";
import { SearchContext } from "../contexts/search-context.js";

const Home = () => {
  const { searchResult } = useContext(SearchContext);
  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof Home
   */

  return (
    <section id="home">
      <div className="content">
        <p>ELC Coding Test...</p>
        {searchResult.length !== 0 && (
          <div className="container">
            {searchResult.map((item) => (
              <ProductCard key={`product${item._id}`} product={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

// Export out the React Component
export default Home;
