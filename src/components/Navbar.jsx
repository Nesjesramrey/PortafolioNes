import { React, useState } from "react";
import {
  AppBar,
  Toolbar,
  List,
  IconButton,
  Drawer,
  Divider,
  ListItem,
  ListItemIcon,
} from "@mui/material";
//import { makeStyles } from "@mui/styles";
import logo from "../images/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import EmojiObjectsTwoToneIcons from "@mui/icons-material/EmojiObjectsTwoTone";
import BuildTwoToneIcon from "@mui/icons-material/BuildTwoTone";
import { ContactMail } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";

const Navbar = () => {
  //const classes = useStyles();
  const [open, setOpen] = useState(false);
  const links = [
    {
      title: "About me",
      id: "about",
      icon: <InfoTwoToneIcon fontSize="large" />,
    },
    {
      title: "Skills",
      id: "skills",
      icon: <EmojiObjectsTwoToneIcons fontSize="large" className="ligth" />,
    },
    {
      title: "My Work",
      id: "myWork",
      icon: <BuildTwoToneIcon fontSize="large" />,
    },
    {
      title: "Contact",
      id: "contact",
      icon: <ContactMail fontSize="large" />,
    },
  ];

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <AppBar position="sticky" className="root">
        <Toolbar className="toolbar">
          <img
            src={logo}
            className="logo"
            alt="logoNes"
            onClick={scrollToTop}
          ></img>
          <List className="menu">
            {links.map(({ id, title }, index) => (
              <Link
                key={index}
                to={id}
                spy={true}
                smooth={true}
                duration={500}
                offset={-65}
              >
                {title}
              </Link>
            ))}
          </List>
          <IconButton
            edge="end"
            className="menuButton"
            onClick={() => setOpen(!open)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <IconButton onClick={() => setOpen(false)} className="cancelicon">
          <CancelIcon fontSize="large" />
        </IconButton>
        <Divider />
        {links.map(({ id, title, icon }, index) => (
          <Link
            key={index}
            className="sidebar"
            to={id}
            spy={true}
            smooth={true}
            duration={500}
            offset={-65}
          >
            <ListItem component="h5">
              <span>
                <ListItemIcon>{icon}</ListItemIcon>
              </span>
              {title}
            </ListItem>
          </Link>
        ))}
      </Drawer>
    </>
  );
};

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: "#fafafa",
//     top: 0,
//     left: 0,
//     right: 0,
//     zIndex: 999,
//   },
//   toolbar: {
//     display: "flex",
//     justifyContent: "flex-start",
//     alignItems: "center",
//   },
//   logo: {
//     height: "60px",
//     objectFit: "contain",
//     "&:hover": {
//       cursor: "pointer",
//     },
//   },
//   menu: {
//     [theme.breakpoints.down("xs")]: {
//       display: "none",
//     },
//     "& a": {
//       color: "#333",
//       fontSize: "1.4rem",
//       fontWeight: "bold",
//       marginLeft: theme.spacing(3),
//     },
//     "& a:hover": {
//       cursor: "pointer",
//       color: "tomato",
//       borderBottom: "3px solid tomato",
//     },
//   },
//   menuButton: {
//     display: "none",
//     [theme.breakpoints.down("xs")]: {
//       display: "block",
//       color: "tomato",
//       position: "absolute",
//       top: 0,
//       right: 10,
//     },
//   },
//   cancelicon: {
//     color: "tomato",
//     position: "absolute",
//     top: 0,
//     right: 10,
//   },
//   sidebar: {
//     width: "40vw",
//     [theme.breakpoints.down("xs")]: {
//       width: "60vw",
//     },
//     "& h5": {
//       margin: theme.spacing(10, 0, 0, 4),
//       fontSize: "1.4rem",
//       color: "#333",
//       fontWeight: "bold",
//     },
//     "& h5:hover": {
//       color: "tomato",
//       cursor: "pointer",
//     },
//   },
//   ligth: {
//     color: "#ffcc00",
//   },
// }));

export default Navbar;
