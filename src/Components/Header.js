import { useState } from "react";
import { alpha, styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailIcon from "@mui/icons-material/Mail";
import SearchIcon from "@mui/icons-material/Search";
import ReceiptIcon from "@mui/icons-material/Receipt";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import "./Header.css";
import {
  Avatar,
  Badge,
  Button,
  InputBase,
  ListItemAvatar,
  Select,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AddIcon from "@mui/icons-material/Add";
import { AccountCircle } from "@mui/icons-material";
import MainContentLeftCharts from "./MainContentLeftCharts";
import MainContentRightProfile from "./MainContentRightProfile";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: "0px 32px 35px 32px",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const profileNotificationData = [
  {
    avatar: "./Data/profile-pic-05.jpg",
    name: "Lavid Emes ",
    country: "sent message to get data",
    seen: "2min ago",
  },
  {
    avatar: "./Data/profile-pic-06.jpg",
    name: "Jasmine",
    country: " Buy Bitcoins now and win cashback",
    seen: "10min ago",
  },
  {
    avatar: "./Data/profile-pic-02.jpg",
    name: "John wick",
    country: "Today sales are high",
    seen: "1hr ago",
  },
];

const sideBarIcons = [<HomeOutlinedIcon />,<PollOutlinedIcon/>,<InboxOutlinedIcon/>,<ArticleOutlinedIcon/>,<SettingsOutlinedIcon/>]

export default function Header() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "17rem",
      },
    },
  }));

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar className="header_wrapper" position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => (!open ? setOpen(true) : setOpen(false))}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Search  sx={{ display: { xs: "none",sm:"flex", md: "flex" }}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search transactions, invoices or help"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{ display: {xs:"flex"}, alignItems: "center" }}
          >
    
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <>
                  <SearchIcon  sx={{ display: {xs:"flex",sm:"none"}, color: "#8f8f8f",mt:0.3 }} />
                  <IconButton {...bindTrigger(popupState)}>
                    <Badge
                      variant="dot"
                      overlap="circular"
                      sx={{
                        "& .MuiBadge-badge": {
                          color: "lightgreen",
                          backgroundColor: "#81E37A",
                        },
                      }}
                      badgeContent=" "
                    >
                      <NotificationsNoneIcon />
                    </Badge>
                  </IconButton>
                  <Menu {...bindMenu(popupState)}>
                    {profileNotificationData.map((item, index) => {
                      return (
                        <MenuItem onClick={popupState.close} key={index}>
                          {" "}
                          <ListItem key={index}>
                            <ListItemAvatar>
                              <Avatar alt="Travis Howard" src={item.avatar} />
                            </ListItemAvatar>
                            <ListItemText
                              primary={item.name}
                              secondary={item.country}
                            />
                            <span className="user__mobiles user_seen">
                              {" "}
                              {item.seen}
                            </span>
                          </ListItem>
                        </MenuItem>
                      );
                    })}
                    <Divider />
                    <div className="notification__header">Show More</div>
                  </Menu>
                </>
              )}
            </PopupState>
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <>
                  <span
                    className="header__profile__name_icon"
                    {...bindTrigger(popupState)}
                  >
                    John Doe
                  </span>
                  <Avatar
                   {...bindTrigger(popupState)}
                    className="__profile__avatar"
                    alt="Remy Sharp"
                    src="./Data/profile-pic-01.jpg"
                    sx={{ width: 30, height: 30 }}
                  />
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem
                      onClick={popupState.close}
                      className="header_dropdown__menu_item"
                    >
                      <PersonOutlineIcon sx={{ width: 20, height: 20 }} />{" "}
                      <span className="header__dropdown_profile">
                        My Profile
                      </span>{" "}
                    </MenuItem>
                    <MenuItem
                      onClick={popupState.close}
                      className="header_dropdown__menu_item"
                    >
                      <ReceiptIcon sx={{ width: 20, height: 20 }} />{" "}
                      <span className="header__dropdown_profile">Billing</span>{" "}
                    </MenuItem>
                    <MenuItem
                      onClick={popupState.close}
                      className="header_dropdown__menu_item"
                    >
                      <LogoutIcon sx={{ width: 20, height: 20 }} />{" "}
                      <span className="header__dropdown_profile">Logout</span>{" "}
                    </MenuItem>
                  </Menu>
                </>
              )}
            </PopupState>
          </Box>
        </Toolbar>
        <span></span>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#43425D",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Divider />

        <List className="side_list">
          <div className="acme">ACME</div>
          {["Home","Dashboard","Inbox", "Products","Admin"].map((text, index) => (
            <ListItem key={index}  selected={text === "Dashboard"} className="side__listItem_home" disablePadding>
              <ListItemButton>
                <ListItemIcon className="side_bar_icons">
                  {sideBarIcons[index]}
                </ListItemIcon>
                <ListItemText primary={text} className="boxes" />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

      </Drawer>

      <div style={{width:"100%"}}>
      <Main open={open}>
        <DrawerHeader />
        <div className="main__header">
          <h2>Overview</h2>
          <Button
            variant="contained"
            size="small"
            className="main__button"
            endIcon={<AddIcon className="main__button__icon" />}
          >
            Add funds
          </Button>
        </div>
        <div className="main__body__leftright">
          <div className="main__left">
            <MainContentLeftCharts />
          </div>
          <div className="main__right">
            <MainContentRightProfile />
          </div>
        </div>
      </Main>
      </div>
    </Box>
  );
}
