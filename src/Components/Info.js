import React from "react";

import Photo from "../assets/images/photo.jpeg";
import Icon from "../assets/images/icon.png";

export default function Info() {
  return (
    <div>
      <img src={Photo} alt="Photo" className="profile" />
      <h1 className="name">Fazilet Kowalewski</h1>
      <h2 className="occupation">Mechanical Engineer</h2>
      <button className="email">
        <img src={Icon} alt="icon" className="icon" />
        Email
      </button>
    </div>
  );
}
