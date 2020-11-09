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

  // const ifPositive = () => {
  //   return (
  //     <TableBody>
  //       {props.listings.map((strain) => (
  //         <TableRow key={strain.id}>
  //           <TableCell
  //             style={{ cursor: "pointer", color: "green" }}
  //             id={strain.id}
  //             onClick={(e) => handleModal(e)}
  //           >
  //             {strain.name} ?
  //           </TableCell>
  //           <TableCell>{strain.race}</TableCell>
  //           <TableCell>{strain.desc}</TableCell>
  //           {deleteButton(strain.id)}
  //         </TableRow>
  //       ))}
  //     </TableBody>
  //   );
  // };

  const sortParam = props.searchParams;
  // const { effects } = props.effects;

  // const posEffects = props.allStrains.filter(effect => {
  //   return (effect.positive === "positive" || "hungry" || "euphoric" || "happy" || "creative" || "energetic" || "talkative" || "uplifted" || "tingly" || "sleepy" || "focused" || "giggly")
  // })

  const posEffects = () => {
    return (
      props.allStrains.positive === "positive" ||
      "hungry" ||
      "euphoric" ||
      "happy" ||
      "creative" ||
      "energetic" ||
      "talkative" ||
      "uplifted" ||
      "tingly" ||
      "sleepy" ||
      "focused" ||
      "giggly"
    );
  };

  // const ifNegative
  // const ifMedical

  let display;
  if (sortParam === "") {
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
                  {strain.name} ?
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
  } else if (sortParam === "posEffects") {
    props.fetchAllStrains();
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
            {props.allStrains.filter(posEffects).map((strain) => (
              <TableRow key={strain.id}>
                <TableCell
                  style={{ cursor: "pointer", color: "green" }}
                  id={strain.id}
                  onClick={(e) => handleModal(e)}
                >
                  {strain.name} ?
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
  }

  return <div>{display}</div>;
};

export default Listings;
