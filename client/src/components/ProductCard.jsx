import { Card, Col } from "react-bootstrap";

export default function ProductCard({ product, hoveredProduct, handleMouseOver, handleMouseLeave }) {
  return (
    <Col
      key={product.id}
      xs={12}
      sm={6}
      md={4}
      lg={3}
      className="d-flex justify-content-center"
    >
      <Card
        className="hover:scale-105 transition-transform"
        onMouseOver={() => handleMouseOver(product)}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundImage: `url(${
            hoveredProduct?.id === product.id ? product.imgUrl2 : product.imgUrl1
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          width: "100%",
          position: "relative",
        }}
      >
        <Card.Body
          className="flex flex-col items-center justify-end bg-gradient-to-t from-black/70 via-black/40 to-transparent text-white"
          style={{ height: "100%" }}
        >
          <h5 className="text-lg font-semibold">{product.name}</h5>
          <p className="text-sm">{product.descr || "Gourmet Popcorn"}</p>
          <p className="text-xl font-medium opacity-70">${product.price}</p>
        </Card.Body>
      </Card>
    </Col>
  );
}
