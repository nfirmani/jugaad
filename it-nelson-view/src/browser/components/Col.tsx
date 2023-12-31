import * as React from "react";

export default function Col({ children, size, className = "", style }: any) {
  const colClass = `col${size ? `-${size}` : ""}`;
  const classes = `${colClass} ${className} p-3 overflow-scroll vh-
    100`;
  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
}
