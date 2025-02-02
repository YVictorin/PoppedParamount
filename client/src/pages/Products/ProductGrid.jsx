import { useState, useEffect } from "react";
import useFetchData from "../../hooks/useFetchData";
import { useOutletContext } from "react-router-dom";

import { apiEndpoints } from "../../utils/apiEndpoints";

import ResponsiveContainer from "../../components/ResponsiveContainer";
import SidebarColumn from "../../components/SidebarColumn";
import MainContentColumn from "../../components/MainContentColumn";
import SidebarFilter from "../../components/SidebarFilter";
import ProductCards from "../../components/ProductCards";
import SortFilter from "../../components/SortFilter";

export default function ProductGrid() {
  const [data, isLoading, isError, error] = useFetchData({ url: apiEndpoints.PRODUCTS });
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [display, setDisplay] = useState([]);
  const [priceFilter, setPriceFilter] = useState("all"); // either all, low, or high
  const [typeFilter, setTypeFilter] = useState([]); // either sweet, savory, or spicy

  const { isMobile } = useOutletContext();

  // Handle hover effect
  const handleMouseOver = (product) => {
    setHoveredProduct(product);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  const applyFilters = () => {
    let filteredProducts = [...data]; // Start with all data

    if (priceFilter === "low") {
      filteredProducts = filteredProducts.filter((product) => parseInt(product.price) < 30);
    } else if (priceFilter === "high") {
      filteredProducts = filteredProducts.filter((product) => parseInt(product.price) > 30);
    }

    if (typeFilter.length > 0) {
      filteredProducts = filteredProducts.filter((product) => typeFilter.includes(product.type));
    }

    setDisplay(filteredProducts); // Update the display state with the filtered products
  };

  // whenever data, priceFilter, or typeFilter changes, apply both filters
  useEffect(() => {
    //if data has elements i.e has fetched already
    if (data.length > 0) {
      applyFilters();
    }
  }, [data, priceFilter, typeFilter]);

  if (isLoading) {
    return <div className="text-center py-5">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center py-5 text-red-500">Error: {error.message}</div>;
  }

  return (

        <ResponsiveContainer isMobile={isMobile}>
          <SidebarColumn>
            <SidebarFilter setTypeFilter={setTypeFilter} isMobile={isMobile} />
          </SidebarColumn>

          <MainContentColumn>
          <SortFilter setPriceFilter={setPriceFilter}/>
            <ProductCards
              display={display}
              hoveredProduct={hoveredProduct}
              handleMouseOver={handleMouseOver}
              handleMouseLeave={handleMouseLeave}
            />
          </MainContentColumn>
        </ResponsiveContainer>

      
  );
}
