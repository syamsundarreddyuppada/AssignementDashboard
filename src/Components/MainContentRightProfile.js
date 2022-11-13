import * as React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import "./MainContentRightProfile.scss";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import {
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 17,
  height: 17,
  border: `2px solid ${theme.palette.background.paper}`,
}));

export default function MainContentRightProfile() {
  const profileData = [
    {
      avatar: "./Data/profile-pic-02.jpg",
      name: "Drew James",
      country: "United States",
      mobile: 866721239,
    },
    {
      avatar: "./Data/profile-pic-03.jpg",
      name: "Bavid Kames",
      country: "United States",
      mobile: 821239667,
    },
    {
      avatar: "./Data/profile-pic-04.jpg",
      name: "Lavid Emes",
      country: "United States",
      mobile: 862396721,
    },
  ];
  return (
    <div className="profile__main">
      <div className="profile__main_profile">
        <div className="profile__top">
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <Avatar className="avatar__subIcon">
                {" "}
                <EditIcon />
              </Avatar>
            }
          >
            <Avatar
              alt="Travis Howard"
              src="./Data/profile-pic-01.jpg"
              className="profile__top__avatar"
            />
          </Badge>
          <div className="profile__details">
            <span className="profile__name">Nick Herasimenka</span>
            <span className="profile__country">United States</span>
            <div className="profile__socialmedia">
              <TwitterIcon className="profile_social_icons" />
              <FacebookRoundedIcon className="profile_social_icons" />
              <LinkedInIcon className="profile_social_icons" />
              <WhatsAppIcon className="profile_social_icons" />
            </div>
          </div>
        </div>
        <Divider className="profile_divider" />
        <div className="profile__bottom">
          <div>
            <div className="profile__users">
              <span>Our Users</span>
              <MoreVertIcon />
            </div>
            <List className="profile__list_users">
              {profileData.map((item, index) => {
                return (
                  <ListItem key={index}>
                    <ListItemAvatar>
                      <Avatar alt="Travis Howard" src={item.avatar} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.name}
                      secondary={item.country}
                    />
                    <span className="user__mobiles">Mobile:{item.mobile}</span>
                  </ListItem>
                );
              })}
            </List>
          </div>
        </div>
      </div>
      <div className="profile__main_product_video bottom_product_video">
        <div className="profile__wrapper">
          <div className="profile__users">
            <span>Product Video</span>
            <MoreVertIcon />
          </div>

          <div className="video">
            <img src="./Data/video thumbnail.png" alt="" />
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
