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
  Zoom,
  Container,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import PerfectStrainDetailsCard from "../../containers/cards/PerfectStrainDetailsCard";
import PerfectStrainDescriptionCard from "../../containers/cards/PerfectStrainDescriptionCard";
import RecordPreLog from "../../containers/forms/RecordPreLog";

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

  const handleDetailsModal = (e) => {
    setID(e.currentTarget.id);
    const strain = props.favorites.find(
      (fav) => fav[1].id == e.currentTarget.id
    );
    setStrainRace(strain[1].race);
    setStrainName(strain[0]);
    setDetailsModal(true);
  };

  const handleDescriptionModal = (e) => {
    setID(e.currentTarget.id);
    const strain = props.favorites.find(
      (fav) => fav[1].id == e.currentTarget.id
    );
    setStrainRace(strain[1].race);
    setStrainName(strain[0]);
    setDescriptionModal(true);
  };

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      {showDetailsModal && (
        <PerfectStrainDetailsCard
          setDetailsModal={setDetailsModal}
          sID={strainID}
          strainRace={strainRace}
          strainName={strainName}
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
          strainRace={strainRace}
          strainName={strainName}
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
                  <Typography
                    variant="h5"
                    component="h2"
                    style={{ cursor: "pointer", color: "" }}
                    id={card[1].id}
                    onClick={(e) => handleDescriptionModal(e)}
                  >
                    <h2
                      style={{
                        color:
                          card[1].race === "sativa"
                            ? "gold"
                            : card[1].race === "indica"
                            ? "orchid"
                            : "indianred",
                      }}
                    >
                      {card[0]}
                    </h2>
                    <hr />
                  </Typography>
                </BioToolTip>
                <Typography variant="h5">
                  <div
                    style={{
                      color:
                        card[1].race == "sativa"
                          ? "orange"
                          : card[1].race == "indica"
                          ? "purple"
                          : "brown",
                    }}
                  >
                    {card[1].race}
                  </div>
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
                <RecordPreLog id={card[1].id} strainName={String(card[0])} />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
