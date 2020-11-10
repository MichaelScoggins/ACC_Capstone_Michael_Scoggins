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
import Details from "../containers/Details";

const Listings = (props) => {
  console.log(props.speciesPrefs);
  React.useEffect(() => {
    props.fetchAllStrains();
  }, []);

  const cookies = cookie.parse(document.cookie);
  const [showModal, setModal] = React.useState(false);
  const [strainID, setID] = React.useState(null);
  const [strainID1, setID1] = React.useState(null);

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
    setModal(!showModal);
  };

  const handleModal1 = (e) => {
    setID1(e.target.id);
    // console.log("poop", strainID1);
    props.fetchDescription(strainID1);
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

  let display;
  if (
    props.posPrefs.length === 0 &&
    props.avoidPrefs.length === 0 &&
    props.medPrefs.length === 0 &&
    props.flavPrefs.length === 0 &&
    props.speciesPrefs.length === 0
  ) {
    display = (
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
            {props.userSearchResults.map((strain) => (
              <TableRow key={strain.id}>
                <TableCell
                  style={{ cursor: "pointer", color: "green" }}
                  id={strain.id}
                  onClick={(e) => handleModal(e)}
                >
                  {strain.name}
                </TableCell>
                <TableCell>
                  {strain.race === "sativa" ? (
                    <p style={{ color: "orange" }}>{strain.race}</p>
                  ) : strain.race === "indica" ? (
                    <p style={{ color: "purple" }}>{strain.race}</p>
                  ) : (
                    <p style={{ color: "brown" }}>{strain.race}</p>
                  )}
                </TableCell>
                <TableCell>{strain.desc}</TableCell>
                {deleteButton(strain.id)}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    );
  } else if (
    props.posPrefs.length > 0 ||
    props.avoidPrefs.length > 0 ||
    props.medPrefs.length > 0 ||
    props.flavPrefs.length > 0 ||
    props.speciesPrefs.length > 0
  ) {
    display = (
      <Container maxWidth="lg">
        {showModal && <Details setModal={setModal} sID1={strainID1} />}
        <h2>Strains</h2>
        <div className={classes.root}></div>
        <Table className="listings">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Species</TableCell>
              <TableCell>Flavors</TableCell>
              <TableCell>Positive Effects</TableCell>
              <TableCell>Negative Effects</TableCell>
              <TableCell>Medical Conditions Treated</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(props.allStrains)
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
              .map((x) => (
                <TableRow key={x[1].id}>
                  <TableCell
                    style={{ cursor: "pointer", color: "green" }}
                    id={x[1].id}
                    onClick={(e) => handleModal1(e)}
                  >
                    {x[0]}
                  </TableCell>
                  <TableCell>
                    {x[1].race === "sativa" ? (
                      <p style={{ color: "orange" }}>{x[1].race}</p>
                    ) : x[1].race === "indica" ? (
                      <p style={{ color: "purple" }}>{x[1].race}</p>
                    ) : (
                      <p style={{ color: "brown" }}>{x[1].race}</p>
                    )}
                  </TableCell>
                  <TableCell>{x[1].flavors.join(", ")}</TableCell>
                  <TableCell>{x[1].effects.positive.join(", ")}</TableCell>
                  <TableCell>{x[1].effects.negative.join(", ")}</TableCell>
                  <TableCell>{x[1].effects.medical.join(", ")}</TableCell>
                  {deleteButton(x.id)}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Container>
    );
  }

  return <div>{display}</div>;
};

export default Listings;
