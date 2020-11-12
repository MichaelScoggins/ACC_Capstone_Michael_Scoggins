import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import Details from "../containers/Details";

export default function DisplayPerfectStrainResults() {
  return (
    <div>
      <Container maxWidth="lg">
        {showModal && <Details setModal={setModal} sID1={strainID1} />}
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
                    onClick={(e) => handleModal1(e)}
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
                  {deleteButton(x.id)}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Container>
    </div>
  );
}
