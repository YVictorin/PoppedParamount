import { Col } from "react-bootstrap";

export default function MainContentColumn({ children, ...props }) {
  return <Col {...props} xs={10} className="mx-auto">{children}</Col>;
}
