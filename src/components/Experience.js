import React from "react";
// import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
// import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
// import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import Link from "@material-ui/core/Link";
// import PerfectStrainDetailsCard from "../containers/PerfectStrainDetailsCard";
import PerfectStrainDetailsCard from "../containers/PerfectStrainDetailsCard";
// import FindPerfectStrain from "../containers/FindPerfectStrain";
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import FavoriteIcon from "@material-ui/icons/Favorite";
import SnackbarAddFav from "../containers/SnackbarAddFav";
import RecordPreLog from "../containers/forms/RecordPreLog";
import PerfectStrainDescriptionCard from "../containers/PerfectStrainDescriptionCard";
// import { ArrowBack } from "@material-ui/icons";
// import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

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
    backgroundImage: "url(./../experience.jpg)",
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

export default function Experience(props) {
  const classes = useStyles();
  const [showDetailsModal, setDetailsModal] = React.useState(false);
  const [showDescriptionModal, setDescriptionModal] = React.useState(false);
  const [strainID, setID] = React.useState(null);

  const handleDetailsModal = (e) => {
    setID(e.currentTarget.id);
    setDetailsModal(true);
  };

  const handleDescriptionModal = (e) => {
    setID(e.currentTarget.id);
    setDescriptionModal(true);
  };

  const handleAddFav = (e) => {
    setID(e.currentTarget.id);
    let id = e.currentTarget.id;
    let existingFav = props.favorites.find((x) => x[1].id == id);
    let strain = props.perfectStrainResults.find((s) => s[1].id == id);
    strain.name = strain[0];
    props.setTitle(strain[0]);
    !existingFav && props.addFavorite(strain) && props.toggleSnackbar(true);
    console.log("favs", props.favorites);
  };

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <SnackbarAddFav sID={strainID} />
      {(showDetailsModal && (
        <PerfectStrainDetailsCard
          setDetailsModal={setDetailsModal}
          sID={strainID}
        />
      )) ||
        (showDescriptionModal && (
          <PerfectStrainDescriptionCard
            setDescriptionModal={setDescriptionModal}
            sID={strainID}
          />
        ))}
      {props.experiences.length === 0 && (
        <div className={classes.info}>
          <Typography style={{ color: "white" }} variant="h4">
            Click The Bong On A <br /> Strain Card To Log An Experience!
          </Typography>
        </div>
      )}
      <Grid container spacing={4}>
        {props.experiences.map((card) => (
          <Grid item key={card.strain} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={
                  card.strain.race === "sativa"
                    ? "./../smoking_the_butterflies.jpg"
                    : card.strain.race === "indica"
                    ? "./../spaceman.jpg"
                    : "./../hybrid_zebra.jpg"
                }
                title="species"
              />
              <CardContent className={classes.cardContent}>
                <Grid container>
                  <Grid item xs={10}>
                    <Typography
                      variant="h5"
                      component="h2"
                      style={{ cursor: "pointer", color: "" }}
                      id={card.strain.id}
                      onClick={(e) => handleDescriptionModal(e)}
                    >
                      <h2 className="card-title">{card.strain.name}</h2>
                    </Typography>
                  </Grid>

                  <Typography
                    variant="h5"
                    id={card.strain.id}
                    onClick={(e) => handleDescriptionModal(e)}
                  >
                    <FontAwesomeIcon
                      className="info-icon"
                      icon={faInfoCircle}
                      style={{ cursor: "pointer" }}
                      size="2x"
                    />
                  </Typography>
                  <Grid item xs={2}></Grid>
                </Grid>
                <Typography variant="h5" component="h5">
                  {card.strain.race == "sativa" ? (
                    <div style={{ color: "gold" }}>
                      {card.strain.race.charAt(0).toUpperCase() +
                        card.strain.race.slice(1)}
                    </div>
                  ) : card.strain.race == "indica" ? (
                    <div style={{ color: "orchid" }}>
                      {card.strain.race.charAt(0).toUpperCase() +
                        card.strain.race.slice(1)}
                    </div>
                  ) : (
                    <div style={{ color: "indianred" }}>
                      {card.strain.race.charAt(0).toUpperCase() +
                        card.strain.race.slice(1)}
                    </div>
                  )}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  onClick={(e) => handleDetailsModal(e)}
                  id={card.strain.id}
                >
                  <Typography>Pre-Toke</Typography>
                </Button>
                <Button
                  size="small"
                  disableRipple
                  color="secondary"
                  variant="contained"
                  className="heartIcon"
                  id={card.strain.id}
                  onClick={(e) => handleAddFav(e)}
                >
                  Review
                </Button>
                <RecordPreLog id={card.strain.id} />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
