import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";

const Listings = (props) => {
  const deleteButton = (id) => {
    if (document.cookie === "loggedIn=true") {
      return (
        <TableCell>
          <DeleteIcon
            onClick={() => props.removeListing(id)}
            className="icon text-red"
            style={{ cursor: "pointer" }}
          />
        </TableCell>
      );
    }
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <h2>Listings</h2>
      <div className={classes.root}></div>
      <Table className="listings">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Operating Hours</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.businesses.map((business, index) => (
            <TableRow key={business.id}>
              <TableCell>
                <Link to={`/details/${business.id}`}>{business.name}</Link>
              </TableCell>
              <TableCell>{business.description}</TableCell>
              <TableCell>{business.address}</TableCell>
              <TableCell>{business.operatingHours}</TableCell>
              {deleteButton(business.id)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Listings;
