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
import PerfectStrainDetails from "../containers/PerfectStrainDetails";

export default function DisplayPerfectStrainResults(props) {
  const [showModal, setModal] = React.useState(false);
  const [strainID, setID] = React.useState(null);

  const handleModal = (e) => {
    setID(e.target.id);
    setModal(!showModal);
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
    <div>
      <Container maxWidth="lg">
        {showModal && (
          <PerfectStrainDetails setModal={setModal} sID={strainID} />
        )}
        <h2>Strains</h2>
        <div className={classes.root}></div>
        <Table className="listings">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
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
                    onClick={(e) => handleModal(e)}
                  >
                    {x[0]}
                    <br />
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
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Container>
    </div>
  );
}
