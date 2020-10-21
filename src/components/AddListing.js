import React, { Component, Fragment } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

class AddListing extends Component {
  state = {
    open: false,
    name: "",
    description: "",
    address: "",
    operatingHours: "",
    lat: 0,
    lng: 0,
  };

  toggleDialog = () => this.setState({ open: !this.state.open });

  handleTextChange = (e) => {
    const newState = { ...this.state };
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const business = { ...this.state };
    business.id = this.props.businesses.length + 1;
    delete business.open;
    this.props.addListing(business);
    this.setState({ open: false });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.open !== this.state.open) {
      this.setState({
        name: "",
        description: "",
        address: "",
        operatingHours: "",
      });
    }
  };

  render() {
    return (
      <Fragment>
        <div style={{ textAlign: "center" }}>
          <Button
            variant="contained"
            className="add-listing"
            onClick={this.toggleDialog}
          >
            Add Listing
          </Button>
        </div>
        <div>
          <Dialog open={this.state.open} onClose={this.toggleDialog}>
            <DialogTitle>Add New Listing</DialogTitle>
            <DialogContent>
              <form
                onSubmit={this.handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "350px",
                }}
              >
                <TextField
                  id="name"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="description"
                  placeholder="Description"
                  value={this.state.description}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="address"
                  placeholder="Address"
                  value={this.state.address}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="operatingHours"
                  placeholder="Hours of Operation"
                  value={this.state.operatingHours}
                  onChange={this.handleTextChange}
                  required
                />
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  style={{ marginTop: "10px" }}
                >
                  Submit
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </Fragment>
    );
  }
}

export default AddListing;
