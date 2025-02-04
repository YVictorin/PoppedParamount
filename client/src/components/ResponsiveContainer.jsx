import { Container } from "react-bootstrap";

export default function ResponsiveContainer({ children, isMobile, top="60%", padding="20" }) {
  return (
    <Container
      fluid
      className={!isMobile ? `p-${padding} flex gap-2` : "p-20 flex flex-col gap-2"}
      style={{ position: "absolute", top }}
    >
      {children}
    </Container>
  );
}
