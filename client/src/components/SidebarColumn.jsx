import { Col } from "react-bootstrap";

export default function SidebarColumn({ children }) {
  return <Col xs={2}>{children}</Col>;
}
