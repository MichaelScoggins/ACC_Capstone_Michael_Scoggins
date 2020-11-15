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
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavAddedSnackbar from "../containers/FavAddedSnackbar";
// import { ArrowBack } from "@material-ui/icons";
// import IconButton from "@material-ui/core/IconButton";

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

export default function DisplayPerfectStrains(props) {
  const classes = useStyles();
  const [showModal, setModal] = React.useState(false);
  const [strainID, setID] = React.useState(null);

  const handleModal = (e) => {
    setID(e.currentTarget.id);
    setModal(true);
  };

  const handleAddFav = (e) => {
    setID(e.currentTarget.id);
    let id = e.currentTarget.id;
    // let strainEntry = props.perfectStrainResults.find(
    //   (s) => s[1].id == id
    // );
    let existingFav = props.favorites.find((x) => x[1].id == id);
    let strain = props.perfectStrainResults.find((s) => s[1].id == id);
    strain.name = strain[0];
    props.setTitle(strain[0]);
    !existingFav && props.addFavorite(strain) && props.toggleSnackbar(true);
    console.log("favs", props.favorites);
  };

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <FavAddedSnackbar sID={strainID} />
      {showModal && <PerfectStrainDetails setModal={setModal} sID={strainID} />}
      {props.perfectStrainResults.length == 0 && (
        <div className={classes.info}></div>
      )}

      {props.perfectStrainResults[1].id == 9999 ? (
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image="./../picky.jpg"
            title="picky"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              <h2>
                Sorry! You'll have to be a little less picky than that! <br />{" "}
                <span style={{ color: "red" }}>Hint:</span>{" "}
                <span style={{ color: "cornflowerblue" }}>
                  Pick at most 2 flavors.
                </span>
              </h2>
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Grid container spacing={4}>
          {props.perfectStrainResults.map((card) => (
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
                    {card[1].race == "sativa" ? (
                      <h3 style={{ color: "orange" }}>
                        {card[1].race.charAt(0).toUpperCase() +
                          card[1].race.slice(1)}
                      </h3>
                    ) : card[1].race == "indica" ? (
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
      )}
    </Container>
  );
}
