import React from "react";
import FbIcon from "../assets/images/FacebookIcon.png";
import Ghicon from "../assets/images/GitHubIcon.png";
import InIcon from "../assets/images/InstagramIcon.png";
import LnIcon from "../assets/images/LinkedinIcon.png";
import TwIcon from "../assets/images/TwitterIcon.png";

export default function Footer() {
  return (
    <div>
      <img src={FbIcon} alt="fb-icon" className="facebook" />
      <img src={Ghicon} alt="gh-icon" className="github" />
      <img src={InIcon} alt="i-icon" className="instagram" />
      <img src={LnIcon} alt="l-icon" className="linkedin" />
      <img src={TwIcon} alt="t-icon" className="twitter" />
    </div>
  );
}
