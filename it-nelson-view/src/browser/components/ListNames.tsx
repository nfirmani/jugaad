
//import { List } from "@mui/icons-material";
import * as React from "react";


const navLinkStyle = { cursor: "pointer" };
function ListItem({ isSelected, name, count }: any) {
  const textColor = isSelected ? "text-white" : "text-black";
  return (
    <li
      className={`nav-link d-flex align-items-center ${isSelected ? "active" : ""}`}
      style={navLinkStyle}
    >
      {/* <List /> */} <span className={`${textColor} ms-2`}>{name}</span>
      <small className={`${textColor} fw-lighter ms-auto`}>{count}</small>
    </li>
  );
}

export default function ListNames({ lists, selectedListIdx }: any) {
  return (
    <ul className="nav nav-pills flex-column mb-auto">
      {lists?.map((t:any, idx: any) => {
        return (
          <ListItem
            key={t.id}
            isSelected={selectedListIdx === idx}
            name={t.name}
            count={t.undone_count}
          />
        );
      })}
    </ul>
  );
}