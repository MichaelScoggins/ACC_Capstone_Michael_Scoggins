import React from "react";
// import AppBar from "@material-ui/core/AppBar";
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
// import PerfectStrainDetails from "../containers/PerfectStrainDetails";
import PerfectStrainDetails from "../containers/PerfectStrainDetails";
import FindPerfectStrain from "../containers/FindPerfectStrain";
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { ArrowBack } from "@material-ui/icons";
// import IconButton from "@material-ui/core/IconButton";

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
  const [showModal, setModal] = React.useState(false);
  const [strainID, setID] = React.useState(null);
  const [strainID1, setID1] = React.useState(null);

  const handleModal = (e) => {
    setID(e.currentTarget.id);
    setModal(true);
  };

  const dupChecker = (id) => {
    let dup = false;
    let arr = props.favorites;
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      if (id == arr[i].id) {
        dup = true;
      }
      console.log({ dup });
    }
    return dup;
  };

  const handleAddFav = (e) => {
    console.log("ob entries", Object.values(props.allStrains));
    let strain;
    setID1(e.currentTarget.id);
    strain = Object.values(props.allStrains).find(
      (s) => s.id == e.currentTarget.id
    );
    console.log({ strain });
    console.log({ strainID1 });
    if (dupChecker(strainID1) == false) {
      props.addFavorite(strain);
    }
    // dupChecker(strainID1);
    // if (dup == false) {
    //   props.addFavorite(strain);
    // }
    // let dup = props.allStrains.filter((object) => object.id != strain[1].id);
    console.log("favs", props.favorites);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      {showModal && <PerfectStrainDetails setModal={setModal} sID={strainID} />}
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
                    Sign Up to Post Experience
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {Object.keys(props.allStrains).length === 0 && (
            <div className={classes.info}></div>
          )}
          {/* End hero unit */}
          <Grid container spacing={4}>
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
                      image={
                        card[1].race === "sativa"
                          ? "./../smoking_the_butterflies.jpg"
                          : card[1].race === "indica"
                          ? "./../spaceman.jpg"
                          : "./../hybrid_zebra.jpg"
                      }
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        style={{ cursor: "pointer", color: "green" }}
                        id={card[1].id}
                        onClick={(e) => handleModal(e)}
                      >
                        <h2>{card[0]}</h2>
                      </Typography>
                      <Typography>
                        {card[1].race === "sativa" ? (
                          <h3 style={{ color: "orange" }}>
                            {card[1].race.charAt(0).toUpperCase() +
                              card[1].race.slice(1)}
                          </h3>
                        ) : card[1].race === "indica" ? (
                          <h3 style={{ color: "purple" }}>
                            {card[1].race.charAt(0).toUpperCase() +
                              card[1].race.slice(1)}
                          </h3>
                        ) : (
                          <h3 style={{ color: "brown" }}>
                            {card[1].race.charAt(0).toUpperCase() +
                              card[1].race.slice(1)}
                          </h3>
                        )}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        variant="contained"
                        onClick={(e) => handleModal(e)}
                        id={card[1].id}
                      >
                        <Typography>View</Typography>
                      </Button>
                      <Button
                        size="small"
                        color="secondary"
                        variant="contained"
                        className="heartIcon"
                        id={card[1].id}
                        onClick={(e) => handleAddFav(e)}
                      >
                        <FavoriteIcon />
                      </Button>
                      <Button
                        size="small"
                        style={{ color: "green" }}
                        variant="contained"
                      >
                        <Typography>Record Experience</Typography>
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
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
