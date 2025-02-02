import Row from "react-bootstrap/Row"
import ProductCard from "./ProductCard";

export default function ProductCards({ display, hoveredProduct, handleMouseOver, handleMouseLeave }) {
  return (
    <Row className="justify-content-center g-4">
      {display.length > 0 ? (
        display.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            hoveredProduct={hoveredProduct}
            handleMouseOver={handleMouseOver}
            handleMouseLeave={handleMouseLeave}
          />
        ))
      ) : (
        <div className="text-center text-gray-500">No products available.</div>
      )}
    </Row>
  );
}
