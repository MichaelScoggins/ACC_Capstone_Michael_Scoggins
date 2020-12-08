import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";

export default function ViewReviewModal(props) {
  const [open, toggleOpen] = React.useState(true);

  const preLog = props.preLogs.find((pre) => pre.strainId == props.sID);

  const review = props.reviews.find((review) => review.strainId == props.sID);

  const handleClose = () => {
    toggleOpen(false);
    props.setViewReviewModal(false);
  };

  return (
    <Fragment>
      <Typography>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>
            <Typography variant="h5">
              The{" "}
              {
                <>
                  <span style={{ color: "springgreen" }}>
                    {review.strainName}
                  </span>{" "}
                  Experience
                </>
              }
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Typography variant="h6">
              The bud was{" "}
              <span style={{ color: "springgreen" }}>
                {review.budDescript}. This strain is good for {review.goodFor}
              </span>
              . I started out feeling{" "}
              <span style={{ color: "orange" }}>{preLog.preMood}</span>, and
              ended up feeling{" "}
              <span style={{ color: "orchid" }}>{review.transformedMood}</span>.
              I was expecting{" "}
              <span style={{ color: "orange" }}>
                {preLog.expectToAchieve};{" "}
              </span>
              afterwards,{" "}
              <span style={{ color: "orchid" }}>
                {review.transformedExpectations}
              </span>
              . I was thinking about{" "}
              <span style={{ color: "orange" }}>{preLog.lingeringWorries}</span>
              , and <span style={{ color: "orange" }}>{preLog.goal}</span>. I
              experienced{" "}
              <span style={{ color: "orchid" }}>{review.experience}</span> and
              my worries{" "}
              <span style={{ color: "orchid" }}>
                {review.transformedWorries}
              </span>
              . <hr />
              <span style={{ color: "cyan" }}>{review.transformedGoals}</span>.
            </Typography>
          </DialogContent>
        </Dialog>
      </Typography>
    </Fragment>
  );
}
