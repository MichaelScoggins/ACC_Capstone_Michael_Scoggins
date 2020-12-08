import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";

export default function ViewPreTokeModal(props) {
  const [open, toggleOpen] = React.useState(true);

  const preLog = props.preLogs.find((pre) => pre.strainId == props.sID);

  const handleClose = () => {
    toggleOpen(false);
    props.setViewPreTokeModal(false);
  };

  return (
    <Fragment>
      <Typography>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>
            <Typography variant="h5">
              Before You Tried{" "}
              {
                <span style={{ color: "springgreen" }}>
                  {preLog.strainName}
                </span>
              }
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Typography variant="h6">
              While I'm feeling{" "}
              <span style={{ color: "orange" }}>{preLog.preMood}</span>, I'm
              hoping to achieve{" "}
              <span style={{ color: "orange" }}>{preLog.sessionPurpose}</span>,
              and expecting{" "}
              <span style={{ color: "orange" }}>{preLog.expectToAchieve}</span>.
              I'm thinking about{" "}
              <span style={{ color: "orange" }}>{preLog.lingeringWorries}</span>
              , but <span style={{ color: "orange" }}>{preLog.goal}</span>. I
              have already{" "}
              <span style={{ color: "orange" }}>{preLog.alreadyDone}</span>, and
              still need to{" "}
              <span style={{ color: "orange" }}>{preLog.todo}</span>.
            </Typography>
          </DialogContent>
        </Dialog>
      </Typography>
    </Fragment>
  );
}
