import React from "react";
import cookie from "cookie";
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
  const cookies = cookie.parse(document.cookie);

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));

  const classes = useStyles();

  const deleteButton = (id) => {
    if (cookies.loggedIn) {
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

  return (
    <Container maxWidth="lg">
      <h2>Strains</h2>
      <div className={classes.root}></div>
      <Table className="listings">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Species</TableCell>
            <TableCell>Description</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {props.listings.map((strain) => (
            <TableRow key={strain.id}>
              <TableCell>
                <Link to={`/details/${strain.id}`}>{strain.name}</Link>
              </TableCell>
              <TableCell>{strain.race}</TableCell>
              <TableCell>{strain.desc}</TableCell>
              {deleteButton(strain.id)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Listings;
