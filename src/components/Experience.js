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
import Container from "@material-ui/core/Container";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
// import Link from "@material-ui/core/Link";
// import PerfectStrainDetailsCard from "../containers/PerfectStrainDetailsCard";
import PerfectStrainDetailsCard from "../containers/PerfectStrainDetailsCard";
import ViewPreTokeModal from "../containers/ViewPreTokeModal";
// import FindPerfectStrain from "../containers/FindPerfectStrain";
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SnackbarAddFav from "../containers/SnackbarAddFav";
// import RecordPreLog from "../containers/forms/RecordPreLog";
import PerfectStrainDescriptionCard from "../containers/PerfectStrainDescriptionCard";
// import { ArrowBack } from "@material-ui/icons";
// import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import RecordReview from "../containers/forms/RecordReview";
import ViewReviewModal from "../containers/ViewReviewModal";

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

const BioToolTip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#424242",
    color: "orange",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

export default function Experience(props) {
  const classes = useStyles();
  const [showDetailsModal, setDetailsModal] = React.useState(false);
  const [showDescriptionModal, setDescriptionModal] = React.useState(false);
  const [showViewPreTokeModal, setViewPreTokeModal] = React.useState(false);
  const [showAddReviewForm, setAddReviewForm] = React.useState(false);
  const [showViewReviewModal, setViewReviewModal] = React.useState(false);
  const [strainID, setID] = React.useState(null);

  const handleDetailsModal = (e) => {
    setID(e.currentTarget.id);
    setDetailsModal(true);
  };

  const handlePreLogModal = (e) => {
    setID(e.currentTarget.id);
    setViewPreTokeModal(true);
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

  const handleOpenReview = (e) => {
    const id = e.currentTarget.id;
    setID(id);
    let existingReview = props.experiences.reviews.find(
      (review) => review.strain.id == id
    );

    console.log({ existingReview });
    existingReview ? setViewReviewModal(true) : setAddReviewForm(true);
    console.log({ showViewReviewModal });
    // let review = props.experiences.reviews.find(
    //   (review) => review.strain.id == id
    // );
  };

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <SnackbarAddFav sID={strainID} />
      {showDetailsModal && (
        <PerfectStrainDetailsCard
          setDetailsModal={setDetailsModal}
          sID={strainID}
        />
      )}
      {showDescriptionModal && (
        <PerfectStrainDescriptionCard
          setDescriptionModal={setDescriptionModal}
          sID={strainID}
        />
      )}
      {showViewPreTokeModal && (
        <ViewPreTokeModal
          setViewPreTokeModal={setViewPreTokeModal}
          sID={strainID}
        />
      )}
      {showAddReviewForm && (
        <RecordReview setAddReviewForm={setAddReviewForm} sID={strainID} />
      )}
      {showViewReviewModal && (
        <ViewReviewModal
          setViewReviewModal={setViewReviewModal}
          sID={strainID}
        />
      )}
      {props.experiences.preLogs.length === 0 && (
        <div className={classes.info}>
          <Typography style={{ color: "white" }} variant="h4">
            Click The Bong On A <br /> Strain Card To Log An Experience!
          </Typography>
        </div>
      )}
      <Grid container spacing={4}>
        {props.experiences.preLogs.map((card) => (
          <Grid item key={card.strain.id} xs={12} sm={6} md={4}>
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
                        id={card.strain.id}
                        onClick={(e) => handleDescriptionModal(e)}
                      >
                        {/* <h2 className="card-title">{card.strain.name}</h2> */}

                        {card.strain.race === "sativa" ? (
                          <h2 style={{ color: "gold" }}>{card.strain.name}</h2>
                        ) : card.strain.race === "orchid" ? (
                          <h2 style={{ color: "purple" }}>
                            {card.strain.name}
                          </h2>
                        ) : (
                          <h2 style={{ color: "indianred" }}>
                            {card.strain.name}
                          </h2>
                        )}
                        <hr />
                      </Typography>
                    </BioToolTip>
                  </Grid>

                  <Typography
                    variant="h5"
                    id={card.strain.id}
                    onClick={(e) => handleDetailsModal(e)}
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
                  {card.when}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  onClick={(e) => handlePreLogModal(e)}
                  id={card.strain.id}
                >
                  <Typography style={{ fontWeight: 500 }}>pre-toke</Typography>
                </Button>
                <Button
                  size="small"
                  color="secondary"
                  variant="contained"
                  id={card.strain.id}
                  onClick={(e) => handleOpenReview(e)}
                >
                  <Typography style={{ fontWeight: 600 }}>review</Typography>
                </Button>
                <Button
                  size="small"
                  disableRipple
                  style={{ backgroundColor: "purple" }}
                  variant="contained"
                  className="heartIcon"
                  id={card.strain.id}
                  onClick={(e) => handleAddFav(e)}
                >
                  <FavoriteIcon />
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
