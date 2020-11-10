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
  React.useEffect(() => {
    props.fetchAllStrains();
  }, []);
  console.log(props.allStrains);
  console.log(props.posPrefs);
  console.log(
    Object.values(props.allStrains).filter((strain) =>
      props.posPrefs.every((effect) => strain.effects.positive.includes(effect))
    ),
    "prefs",
    props.allStrains
  );
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

  const checkPosEffects = () => {
    return props.allStrains.positive.includes(props.posEffects);
  };

  // const ifNegative
  // const ifMedical

  let display;
  if (props.searchParams !== "") {
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
                <TableCell>{strain.race}</TableCell>
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
    props.flavPrefs.length > 0
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
              <TableCell>Flavors</TableCell>
              <TableCell>Positive Effects</TableCell>
              <TableCell>Negative Effects</TableCell>
              <TableCell>Medical Conditions Treated</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(props.allStrains)
              .filter((strain) =>
                props.posPrefs.every((effect) =>
                  strain[1].effects.positive.includes(effect)
                )
              )
              .map((x) => (
                <TableRow key={x[1].id}>
                  <TableCell
                    style={{ cursor: "pointer", color: "green" }}
                    id={x[1].id}
                    onClick={(e) => handleModal(e)}
                  >
                    {x[0]}
                  </TableCell>
                  <TableCell>{x[1].race}</TableCell>
                  <TableCell>{x[1].flavors}</TableCell>
                  <TableCell>{x[1].effects.positive}</TableCell>
                  <TableCell>{x[1].effects.negative}</TableCell>
                  <TableCell>{x[1].effects.medical}</TableCell>
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

// if (strain.effects.positive.includes(props.posEffects) return (
//   strain.map(strain => (
//     <div>
//     <div>{strain.name}</div>
//     <div>{strain.race}</div>
//     <div>{strain.effects.positive}</div>
//     <div>{strain.effects.negative}</div>
//     <div>{strain.effects.medical}</div>
//     </div>
//   ))
// )

// if (!prefs) return searchElement;
// if (prefs) return filterElement;

// const prefs =
//   props.posPrefs.length > 0 ||
//   props.avoidPrefs.length > 0 ||
//   props.medPrefs.length > 0 ||
//   props.flavPrefs.length > 0;
