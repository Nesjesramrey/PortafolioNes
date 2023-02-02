import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  makeStyles,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import profile from "../images/profile.jpg";
import cvPDF from "../images/cv.pdf";
import TypewriterEffect from "react-typewriter-effect";

const About = ({ title, dark, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h3">{title}</Typography>
        <Card className={classes.card}>
          <CardMedia
            image={profile}
            className={classes.media}
            title="picture"
          ></CardMedia>
          <CardContent className={classes.cardContent}>
            <TypewriterEffect
              text="Hi, I'm a developer and a Data Scientist."
              textStyle={{
                fontSize: "2rem",
                fontWeight: "700px ",
                color: "tomato",
              }}
              startDelay={100}
              cursorColor="black"
              typeSpeed={100}
            />
            <TypewriterEffect
              text="I am available to help you."
              textStyle={{
                fontSize: "1.2rem",
                fontWeight: "500px",
              }}
              startDelay={2500}
              cursorColor="black"
              typeSpeed={100}
            />
            <Typography variant="h6" color="textSecondary">
              I can to transform your ideas in a digital product, like a website
              or a web app.
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" className={classes.pdfbutton}>
              <a href={cvPDF} download>
                Download CV
              </a>
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
  },
  sectiondark: {
    background: "#333",
    color: "#fff",
  },
  sectioncontent: {
    maxWidth: "80vw",
    margin: "0 auto",
  },
  card: {
    height: "70vh",
    display: "flex",
    marginTop: theme.spacing(6),
    position: "relative",
  },
  media: {
    width: "250px",
    height: "auto",
    objectFit: "cover",
    borderRadius: "10px",
    margin: theme.spacing(5),
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  cardContent: {
    marginTop: theme.spacing(2),
    "& h6": {
      marginTop: theme.spacing(6),
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
  },
  pdfbutton: {
    width: "150px",
    height: "50px",
    position: "absolute",
    bottom: "50px",
    right: "50px",
    [theme.breakpoints.down("xs")]: {
      bottom: "1rem",
      right: "1rem",
    },
    backgroundColor: "tomato",
    padding: theme.spacing(3),
    "&:hover": {
      backgroundColor: "#fff",
    },
    "& a": {
      color: "#fff",
      textDecoration: "none",
      fontWeight: "900",
    },
    "& a:hover": {
      color: "tomato",
    },
  },
}));

export default About;
