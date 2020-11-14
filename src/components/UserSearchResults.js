import React from "react";
// import cookie from "cookie";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import DeleteIcon from "@material-ui/icons/Delete";
import SearchResultsDetails from "../containers/SearchResultsDetails";
// import SearchBar from "../containers/SearchBar";

export default function DisplayUserSearchResults(props) {
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

  const handleModal = (e) => {
    setID(e.target.id);
    setModal(true);
  };

  return (
    <div>
      {showModal && <SearchResultsDetails setModal={setModal} sID={strainID} />}
      <Container maxWidth="lg">
        <h2>Strains</h2>
        <div className={classes.root}></div>
        <Table className="listings">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {props.userSearchResults.map((strain) => (
              <TableRow key={strain.id}>
                <TableCell
                  style={{ cursor: "pointer", color: "green" }}
                  id={strain.id}
                  onClick={(e) => handleModal(e)}
                >
                  {strain.name}
                  <br />
                  {strain.race === "sativa" ? (
                    <p style={{ color: "orange" }}>{strain.race}</p>
                  ) : strain.race === "indica" ? (
                    <p style={{ color: "purple" }}>{strain.race}</p>
                  ) : (
                    <p style={{ color: "brown" }}>{strain.race}</p>
                  )}
                </TableCell>
                <TableCell>{strain.desc}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </div>
  );
}
