import * as React from "react";
import IUser from "../type/user.type";
import User from "./User";
import ListNames from "./ListNames";
import Col from "./Col";


const customStyle = {
  boxShadow: "inset -1px 0 0 rgba(0, 0, 0, 0.1)",
  };


export default function Sidebar(user: IUser) {
  return (
    <Col size={3} className="bg-light" style={customStyle}>
     {/* <User id={0} name={user.name} image={user.image} ></User> */}
     <User {...user}></User>
     <hr></hr>
     <ListNames />
    </Col>
  );
}
