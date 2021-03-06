import React from "react";
import axios from "axios";
// import FavoriteIcon from "@material-ui/icons/Favorite";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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
    marginTop: 10,
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

export default function FavStrainsCards(props) {
  const classes = useStyles();
  const [showDetailsModal, setDetailsModal] = React.useState(false);
  const [strainID, setID] = React.useState(null);
  const [strainRace, setStrainRace] = React.useState(null);
  const [strainName, setStrainName] = React.useState(null);

  React.useEffect(() => {
    props.fetchAllStrains();
  }, []);

  const handleDelete = (e, id) => {
    // let id = e.currentTarget.id;
    props.removeFavorite(id);
    axios.delete(`/favorites/${id}`, {
      headers: {
        Authorization: `Bearer ${props.bearerToken}`,
      },
    });
  };

  const handleDetailsModal = (e) => {
    setID(e.currentTarget.id);
    const strain = Object.entries(props.allStrains).find(
      (strain) => strain[1].id == e.currentTarget.id
    );
    setStrainName(strain[0]);
    setStrainRace(strain[1].id);
    setDetailsModal(true);
  };

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
                <Grid container>
                  <Typography
                    variant="h4"
                    id={card.strainId}
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
                  </Typography>
                </Grid>
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
                <Button
                  size="small"
                  disableRipple
                  color="secondary"
                  variant="contained"
                  className="heartIcon"
                  id={card.strainId}
                  onClick={(e) => handleDelete(e, card.strainId)}
                >
                  <FontAwesomeIcon
                    icon={faHeartBroken}
                    size="2x"
                    className="brokenheart-icon"
                  />
                </Button>
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
