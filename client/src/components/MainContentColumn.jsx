import { Col } from "react-bootstrap";

export default function MainContentColumn({ children }) {
  return <Col xs={10} className="mx-auto">{children}</Col>;
}
