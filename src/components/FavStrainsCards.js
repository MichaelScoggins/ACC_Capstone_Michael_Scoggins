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
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import Container from "@material-ui/core/Container";
// import Link from "@material-ui/core/Link";
import PerfectStrainDetailsCard from "../containers/PerfectStrainDetailsCard";
import PerfectStrainDescriptionCard from "../containers/PerfectStrainDescriptionCard";
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
    backgroundImage: "url(./../memorexijuana.jpg)",
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

const BioToolTip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#424242",
    color: "orange",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

export default function FavStrainsCards(props) {
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

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      {showDetailsModal && (
        <PerfectStrainDetailsCard
          setDetailsModal={setDetailsModal}
          sID={strainID}
        />
      )}
      {props.favorites.length === 0 && (
        <div className={classes.info}>
          <Typography style={{ color: "white" }} variant="h4">
            Use Our Perfect Strain Finder To Add <br />
            Some Favorites!
          </Typography>
        </div>
      )}
      {showDescriptionModal && (
        <PerfectStrainDescriptionCard
          setDescriptionModal={setDescriptionModal}
          sID={strainID}
        />
      )}
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
                <BioToolTip
                  title={
                    <React.Fragment>
                      <Typography>Click For Bio</Typography>
                    </React.Fragment>
                  }
                  placement="top"
                  TransitionComponent={Zoom}
                >
                  {/* <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ cursor: "pointer", color: "springgreen" }}
                    id={card[1].id}
                    onClick={(e) => handleDetailsModal(e)}
                  >
                    <h2>{card[0]}</h2>
                  </Typography> */}

                  <Typography
                    variant="h5"
                    component="h2"
                    style={{ cursor: "pointer", color: "" }}
                    id={card[1].id}
                    onClick={(e) => handleDescriptionModal(e)}
                  >
                    {/* <h2 className="card-title">{card.strain.name}</h2> */}

                    {card[1].race === "sativa" ? (
                      <h2 style={{ color: "gold" }}>{card[0]}</h2>
                    ) : card[1].race === "orchid" ? (
                      <h2 style={{ color: "purple" }}>{card[0]}</h2>
                    ) : (
                      <h2 style={{ color: "indianred" }}>{card[0]}</h2>
                    )}
                    <hr />
                  </Typography>
                </BioToolTip>
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
                  onClick={(e) => handleDetailsModal(e)}
                  id={card[1].id}
                >
                  <Typography>View</Typography>
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="secondary"
                  id={card[1].id}
                  onClick={(e) => handleDescriptionModal(e)}
                >
                  <Typography
                    style={{
                      fontWeight: "600",
                      color: "green",
                      textShadow: "1px 1px yellowgreen",
                    }}
                  >
                    Bio
                  </Typography>
                </Button>
                <RecordPreLog id={card[1].id} />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
