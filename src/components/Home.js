import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
// import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
// import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

import FindPerfectStrain from "../containers/FindPerfectStrain";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Higher Intentions
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Home(props) {
  // React.useEffect(() => {
  //   props.fetchAllStrains();
  // }, []);
  const cards = props.allStrains;
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Higher Intentions
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Use our expertly crafted algorithm to search thousands of strains
              and locate the perfect mood
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <FindPerfectStrain />
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                    Sign Up to Record Your Experiences
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          HI
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Enjoy a Paranoia!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

{
  /* <Grid container spacing={4}>
{Object.entries(props.allStrains)
  .filter(
    (strain) =>
      props.posPrefs.every((effect) =>
        strain[1].effects.positive.includes(effect)
      ) &&
      props.medPrefs.every((effect) =>
        strain[1].effects.medical.includes(effect)
      ) &&
      props.flavPrefs.every((effect) =>
        strain[1].flavors.includes(effect)
      ) &&
      props.avoidPrefs.every(
        (effect) => !strain[1].effects.negative.includes(effect)
      ) &&
      (props.speciesPrefs.length === 0 ||
        props.speciesPrefs.includes(strain[1].race))
  )
  .map((card) => (
    <Grid item key={card[1].id} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image="https://source.unsplash.com/random"
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{ cursor: "pointer", color: "green" }}
          >
            {card[0]}
          </Typography>
          <Typography>
            {card[1].race === "sativa" ? (
              <p style={{ color: "orange" }}>{card[1].race}</p>
            ) : card[1].race === "indica" ? (
              <p style={{ color: "purple" }}>{card[1].race}</p>
            ) : (
              <p style={{ color: "brown" }}>{card[1].race}</p>
            )}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            View
          </Button>
          <Button size="small" color="primary">
            Record Your Experience
          </Button>
        </CardActions>
      </Card>
    </Grid>
  ))}
</Grid> */
}
