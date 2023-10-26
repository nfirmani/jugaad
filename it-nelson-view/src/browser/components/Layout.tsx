import * as React from "react";

function Col({ children, size = "", className = "", style }: any) {
  const classes = `col${size ? `-${size}` : ""} ${className}`;
  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
}

function Container({ fluid, children, className }: any) {
  const classes = `container${fluid ? "-fluid" : ""} ${className ? className : ""}`;
  return <div className={classes}>{children}</div>;
}
function Row({ children, className }: any) {
  const classes = `row ${className ? className : ""}`;
  return <div className={classes}>{children}</div>;
}

export default function Layout({ children }: any) {
  return (
    <Container>
      <Row>{children}</Row>
    </Container>
  );
}

export function LeftCol({ children }: any) {
  return (
    <Col
      size="3"
      className="bg-light p-3 overflow-scroll vh-100"
      style={{
        boxShadow: "inset -1px 0 0 rgba(0, 0, 0, 0.1)",
      }}
    >
      {children}
    </Col>
  );
}
export function RightCol({ children }: any) {
  return (
    <Col size="9" className="p-3 overflow-scroll vh-100">
      {children}
    </Col>
  );
}
