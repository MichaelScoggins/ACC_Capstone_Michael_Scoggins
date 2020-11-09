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
import Details from "../containers/Details";

const Listings = (props) => {
  const cookies = cookie.parse(document.cookie);
  const [showModal, setModal] = React.useState(false);
  const [strainID, setID] = React.useState(null);

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));

  const classes = useStyles();

  // const handleDetails = (id) => {
  //   return <Details sID={id} />;
  // };

  const handleModal = (e) => {
    setID(e.target.id);
    setModal(!showModal);
  };

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
      {showModal && <Details setModal={setModal} sID={strainID} />}
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
              <TableCell id={strain.id} onClick={(e) => handleModal(e)}>
                {strain.name}
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
