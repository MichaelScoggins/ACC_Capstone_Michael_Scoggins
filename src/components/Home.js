import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  CssBaseline,
  Grid,
  Typography,
  Container,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import PerfectStrainCards from "../containers/cards/PerfectStrainCards";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}../
      <Link color="inherit">High../er Intentions</Link>{" "}
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
  info: {
    backgroundImage:
      "url(./../indica-vs-sativa-understanding-the-difference.png)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "500px",
    padding: theme.spacing(8, 0, 6),
  },
}));

export default function Home(props) {
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
              and locate the perfect mood.{" "}
              {!props.user
                ? `Sign up to keep track of your
              experience with each strain--posting them for others to reference,
              or keeping them as a private collection.`
                : `Click the strain's name for a short bio of each strain. Click the little astronaut to start tracking your experiences.`}
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button
                    onClick={() => props.toggleFindPerfectStrain(true)}
                    variant="contained"
                    color="primary"
                  >
                    <Typography
                      style={{
                        fontWeight: 600,
                        color: "#FFA726",
                        textShadow: "1px 1px #333",
                      }}
                    >
                      Find The Perfect Strain
                    </Typography>
                  </Button>
                </Grid>
                {!props.user && (
                  <Grid item>
                    <Link
                      to="/signup"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <Button variant="contained" color="secondary">
                        <Typography
                          style={{
                            fontWeight: "600",
                            color: "green",
                            textShadow: "1px 1px yellowgreen",
                          }}
                        >
                          Sign Up to Post Experience
                        </Typography>
                      </Button>
                    </Link>
                  </Grid>
                )}
              </Grid>
            </div>
          </Container>
        </div>
        {props.perfectStrainResults.length === 0 ? (
          <div className={classes.info}></div>
        ) : (
          <PerfectStrainCards />
        )}
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          HIGHER INTENTIONS
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
