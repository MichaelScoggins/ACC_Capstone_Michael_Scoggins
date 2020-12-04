import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Tooltip,
  // Zoom,
  Container,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
// import PerfectStrainDetailsCard from "../../containers/cards/PerfectStrainDetailsCard";
// import PerfectStrainDescriptionCard from "../../containers/cards/PerfectStrainDescriptionCard";
import RecordPreLog from "../../containers/forms/RecordPreLog";
import FavsDetailsModal from "../../containers/modals/FavsDetailsModal";

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
  const [strainRace, setStrainRace] = React.useState(null);
  const [strainName, setStrainName] = React.useState(null);

  React.useEffect(() => {
    props.fetchAllStrains();
  }, []);

  const handleDetailsModal = (e) => {
    setID(e.currentTarget.id);
    const strain = Object.entries(props.allStrains).find(
      (strain) => strain[1].id == e.currentTarget.id
    );
    setStrainName(strain[0]);
    setStrainRace(strain[1].id);
    setDetailsModal(true);
  };

  // const handleDetailsModal = (e) => {
  //   setID(e.currentTarget.id);
  //   const strain = props.favorites.find(
  //     (fav) => fav[1].id == e.currentTarget.id
  //   );
  //   setStrainRace(strain[1].race);
  //   setStrainName(strain[0]);
  //   setDetailsModal(true);
  // };

  // const handleDescriptionModal = (e) => {
  //   setID(e.currentTarget.id);
  //   const strain = props.favorites.find(
  //     (fav) => fav[1].id == e.currentTarget.id
  //   );
  //   setStrainRace(strain[1].race);
  //   setStrainName(strain[0]);
  //   setDescriptionModal(true);
  // };

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      {showDetailsModal && (
        <FavsDetailsModal
          setDetailsModal={setDetailsModal}
          sID={strainID}
          strainRace={strainRace}
          strainName={strainName}
          setModal={setDetailsModal}
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
      <Grid container spacing={4}>
        {props.favorites.map((card) => (
          <Grid item key={card.strainId} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={
                  card.strainSpecies === "sativa"
                    ? "./../smoking_the_butterflies.jpg"
                    : card.strainSpecies === "indica"
                    ? "./../spaceman.jpg"
                    : "./../hybrid_zebra.jpg"
                }
                title="species"
              />
              <CardContent className={classes.cardContent}>
                {/* <BioToolTip
                  title={
                    <React.Fragment>
                      <Typography>Click For Bio</Typography>
                    </React.Fragment>
                  }
                  placement="top"
                  TransitionComponent={Zoom}
                > */}
                <Typography
                  variant="h5"
                  component="h2"
                  // style={{ cursor: "pointer", color: "" }}
                  id={card.strainId}
                >
                  <h2
                    style={{
                      color:
                        card.strainSpecies === "sativa"
                          ? "gold"
                          : card.strainSpecies === "indica"
                          ? "orchid"
                          : "indianred",
                    }}
                  >
                    {card.strainName}
                  </h2>
                  <hr />
                </Typography>
                {/* </BioToolTip> */}
                <Typography variant="h5">
                  <div
                    style={{
                      color:
                        card.strainSpecies == "sativa"
                          ? "orange"
                          : card.strainSpecies == "indica"
                          ? "purple"
                          : "brown",
                    }}
                  >
                    {card.strainSpecies}
                  </div>
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  onClick={(e) => handleDetailsModal(e)}
                  id={card.strainId}
                >
                  <Typography>View</Typography>
                </Button>
                {/* <Button
                  size="small"
                  variant="contained"
                  color="secondary"
                  id={card.strainId}
                  onClick={(e) => handleDetailsModal(e)}
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
                </Button> */}
                <RecordPreLog
                  id={card.strainId}
                  strainName={card.strainName}
                  strainSpecies={card.strainSpecies}
                />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
