/*eslint-disable*/
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import images1 from "../assets/pic.jpg";
import images2 from "../assets/pic2.jpg";
import images3 from "../assets/image3.jpg";

export default function GroupAvatars() {
  return (
    <>
      <div className="d-flex justify-content-center mb-4">
        <AvatarGroup max={3}>
          <Avatar alt="Remy Sharp" src={images1} />
          <Avatar alt="Travis Howard" src={images2} />
          <Avatar alt="Cindy Baker" src={images3} />
          <Avatar alt="Agnes Walker" src={images1} />
          <Avatar alt="Trevor Henderson" src={images2} />
        </AvatarGroup>
      </div>
    </>
  );
}
