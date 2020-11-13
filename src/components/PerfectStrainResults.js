import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
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
}));

export default function PerfectStrainResults(props) {
  const classes = useStyles();
  props.allStrains.length > 0 &&
    Object.entries(props.allStrains)
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
              >
                {card[0]}
              </Typography>
              <Typography>
                {card[1].race === "sativa" ? (
                  <p style={{ color: "orange" }}>{card[1].race}</p>
                ) : card[1].race === "indica" ? (
                  <p style={{ color: "purple" }}>{card[1].race}</p>
                ) : (
                  <p style={{ color: "brown" }}>{card[1].race}</p>
                )}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                View
              </Button>
              <Button size="small" color="primary">
                Record Your Experience
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ));
}
