import { Container } from "react-bootstrap";

export default function ResponsiveContainer({ children, isMobile }) {
  return (
    <Container
      fluid
      className={!isMobile ? "p-20 flex gap-2" : "p-20 flex flex-col gap-2 "}
      style={{ position: "absolute", top: "60%" }}
    >
      {children}
    </Container>
  );
}
