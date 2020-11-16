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
// import SnackbarAddFav from "../containers/SnackbarAddFav";
import RecordPreLog from "../containers/forms/RecordPreLog";
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
    backgroundImage: "url(./../favs.jpg)",
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

export default function FavStrainsCards(props) {
  const classes = useStyles();
  const [showModal, setModal] = React.useState(false);
  const [strainID, setID] = React.useState(null);

  const handleModal = (e) => {
    setID(e.currentTarget.id);
    setModal(true);
  };

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      {showModal && (
        <PerfectStrainDetailsCard setModal={setModal} sID={strainID} />
      )}
      {props.favorites.length === 0 && <div className={classes.info} />}
      <Grid container spacing={4}>
        {props.favorites.map((card) => (
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
                title="species"
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

                <RecordPreLog />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
