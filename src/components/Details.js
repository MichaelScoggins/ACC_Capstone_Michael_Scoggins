import React from "react";
import { Container, Box, Typography } from "@material-ui/core";
import GoogleMapReact from "google-map-react";

const Details = (props) => {
  const bID = props.match.params.id;
  const business = props.businesses.find((b) => b.id == bID);
  console.log(props.businesses);
  const center = {
    lat: business.lat,
    lng: business.lng,
  };
  const zoom = 11;

  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: business.lat, lng: business.lng },
      map,
      title: business.name,
    });
    return marker;
  };

  return (
    <Container maxWidth="md">
      <Box>
        <Typography>
          <h1 style={{ color: "red" }}>{business.name}</h1>
          <hr />
          <h2 style={{ color: "black" }}>{business.description}</h2>
          <h2 style={{ color: "red" }}>
            <span style={{ color: "black" }}>Hours: </span>
            {business.operatingHours}
          </h2>
          <h2
            style={{
              fontWeight: "800",
              textAlign: "center",
              textDecoration: "underline",
            }}
          >
            {business.address}
          </h2>
        </Typography>
        <Container style={{ height: "50vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: `AIzaSyDO4_O1UDOeMQ9P5CvydjO_Rmv8yFdMV2E`,
            }}
            defaultCenter={center}
            defaultZoom={zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
          ></GoogleMapReact>
        </Container>
      </Box>
    </Container>
  );
};

export default Details;
