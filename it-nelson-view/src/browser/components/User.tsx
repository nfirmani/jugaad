import * as React from "react";
import IUser from "../type/user.type";

const defaultImage = "https://via.placeholder.com/32x32.png";
function getImageOrDefaultURL(imageUrl:string) {
  try {
    new URL(imageUrl);
    return imageUrl;
  } catch {
    return defaultImage;
  }
}
export default function User(user:IUser) {
  return (
    <div
      className="d-flex align-items-center text-black text-
decoration-none py-1"
    >
      <img
        src={getImageOrDefaultURL(user.image)}
        width="32"
        height="32"
        className="rounded-circle me-2"
      />
      <strong>{user.name}</strong>
    </div>
  );
}
