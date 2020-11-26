import React from "react";
import Typography from "@material-ui/core/Typography";
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
    setID(e.currentTarget.id);
    setModal(true);
  };

  return (
    <div>
      {showModal && <SearchResultsDetails setModal={setModal} sID={strainID} />}
      <Container maxWidth="lg">
        <Typography>
          <h2>Strains</h2>
        </Typography>
        <div className={classes.root}></div>
        <Table className="listings">
          <TableHead>
            <TableRow>
              <TableCell style={{ width: 150 }}>
                <Typography>Name</Typography>
              </TableCell>
              <TableCell>
                <Typography>Description</Typography>
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {props.userSearchResults.map((strain) => (
              <TableRow key={strain.id}>
                <TableCell>
                  <Typography
                    style={{ cursor: "pointer", color: "springgreen" }}
                    id={strain.id}
                    onClick={(e) => handleModal(e)}
                  >
                    {strain.name}
                  </Typography>
                  <br />
                  {strain.race === "sativa" ? (
                    <p style={{ color: "orange" }}>{strain.race}</p>
                  ) : strain.race === "indica" ? (
                    <p style={{ color: "darkmagenta" }}>{strain.race}</p>
                  ) : (
                    <p style={{ color: "brown" }}>{strain.race}</p>
                  )}
                </TableCell>
                <TableCell>
                  <Typography variant="body1" style={{ color: "#BDB76B" }}>
                    {strain.desc}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </div>
  );
}
