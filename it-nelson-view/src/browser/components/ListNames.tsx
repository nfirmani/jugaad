import * as React from "react";

interface IProp {
    name: string;
    active: boolean;
  }


const navLinkStyle = { cursor: "pointer" };
function List({name, active}:IProp ) {
    const classes = `nav-link ${active ? 'active': ''}`
  return (
    <li className={classes} style={navLinkStyle}>
      {name}
    </li>
  );
}
export default function ListNames() {
  return (
    <ul className="nav nav-pills flex-column mb-auto">
      <List name="Importante" active={false}  />
      <List name="Film da vedere" active={true} />
      <List name="Libri da leggere" active={false}  />
    </ul>
  );
}
