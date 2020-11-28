import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
  Tooltip,
  Zoom,
  CssBaseline,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import PerfectStrainDetailsCard from "../../containers/cards/PerfectStrainDetailsCard";
import ViewPreTokeModal from "../../containers/modals/ViewPreTokeModal";
import SnackbarAddFav from "../../containers/modals/SnackbarAddFav";
import PerfectStrainDescriptionCard from "../../containers/cards/PerfectStrainDescriptionCard";
import RecordReview from "../../containers/forms/RecordReview";
import ViewReviewModal from "../../containers/modals/ViewReviewModal";

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
  cardStrainName: {
    "&:hover": {
      color: "springgreen",
    },
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
  const [strainName, setStrainName] = React.useState(null);

  const handleDetailsModal = (e) => {
    setID(e.currentTarget.id);
    const exp = props.experiences.preLogs.find(
      (exp) => exp.strain.id == e.currentTarget.id
    );
    setStrainName(exp.strain.name);
    setDetailsModal(true);
  };

  const handlePreLogModal = (e) => {
    setID(e.currentTarget.id);
    setViewPreTokeModal(true);
  };

  const handleDescriptionModal = (e) => {
    setID(e.currentTarget.id);
    const exp = props.experiences.preLogs.find(
      (exp) => exp.strain.id == e.currentTarget.id
    );
    setStrainName(exp.strain.name);
    setDescriptionModal(true);
  };

  const handleOpenReview = (e) => {
    const id = e.currentTarget.id;
    setID(id);
    let existingReview = props.experiences.reviews.find(
      (review) => review.strain.id == id
    );
    existingReview ? setViewReviewModal(true) : setAddReviewForm(true);
  };

  return (
    <>
      <CssBaseline />
      <Container className={classes.cardGrid} maxWidth="md" m={5}>
        <SnackbarAddFav sID={strainID} />
        {showDetailsModal && (
          <PerfectStrainDetailsCard
            setDetailsModal={setDetailsModal}
            sID={strainID}
            strainName={strainName}
          />
        )}
        {showDescriptionModal && (
          <PerfectStrainDescriptionCard
            setDescriptionModal={setDescriptionModal}
            sID={strainID}
            strainName={strainName}
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
                          className="doodoo"
                          variant="h4"
                          id={card.strain.id}
                          onClick={(e) => handleDescriptionModal(e)}
                          style={{
                            color:
                              card.strain.race === "sativa"
                                ? "gold"
                                : card.strain.race === "indica"
                                ? "orchid"
                                : "indianred",
                            cursor: "pointer",
                            "&:hover": { color: "springgreen" },
                          }}
                        >
                          {card.strain.name}
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
                    <Typography style={{ fontWeight: 500 }}>
                      pre-toke
                    </Typography>
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
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
