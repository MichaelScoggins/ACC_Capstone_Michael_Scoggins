import React from "react";
import { Container, Box, Typography } from "@material-ui/core";

const Details = (props) => {
  const strainID = props.match.params.id;
  const strain = props.listings.find((s) => s.id == strainID);
  props.fetchEffects(strainID);
  const positiveEffects = props.effects.positive;
  const negativeEffects = props.effects.negative;
  const medicalEffects = props.effects.medical;

  return (
    <Container maxWidth="md">
      <Box>
        <Typography>
          <h1 style={{ color: "green" }}>{strain.name}</h1>
          <hr />
          <h2>
            Positive Effects: {""}
            <span style={{ color: "green" }}>{positiveEffects.join(", ")}</span>
          </h2>
          <h2>
            Negative Effects:{" "}
            <span style={{ color: "red" }}>{negativeEffects.join(", ")}</span>
          </h2>
          <h2 style={{ color: "" }}>
            Helps to treat: {""}
            <span style={{ color: "orange" }}>{medicalEffects.join(", ")}</span>
          </h2>
          <h2
            style={{
              fontWeight: "800",
              textAlign: "center",
              textDecoration: "underline",
            }}
          >
            {}
          </h2>
        </Typography>
      </Box>
    </Container>
  );
};

export default Details;
