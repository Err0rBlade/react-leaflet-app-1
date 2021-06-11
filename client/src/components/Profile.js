import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Card, CardTitle, CardSubtitle, CardBody } from "reactstrap";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { logout } from "../actions/authActions";
import { buttonReset } from "../actions/uiActions";
import App from "../map/App";
export class Profile extends Component {
  static propTypes = {
    button: PropTypes.bool,
    authState: PropTypes.object.isRequired,
    buttonReset: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
  };

  onLogout = (e) => {
    e.preventDefault();
    this.props.buttonReset();
    this.props.logout();
  };

  render() {
    if (!this.props.authState.isAuthenticated) {
      return <Redirect to="/" />;
    }

    const { user } = this.props.authState;

    return (
      <>
        <button
          style={{
            width: "180px",
            height: "52px",
            backgroundColor: "white",
            position: "absolute",
            top: "10px",
            left: "10px",
            zIndex: "10000",
            border: "2px solid rgba(0,0,0,0.2)",
            backgroundClip: "padding-box",
            borderRadius: "4px",
            textAlign: "center",
            color: "black",
            padding: "12px",
            fontSize: "14px",
            fontFamily: "Helvetica Neue, Arial, Helvetica, sans-serif",
            fontWeight: "bold",
          }}
        >
          {user ? `Welcome, ${user.name.substring(0, 10)}` : ""}{" "}
        </button>
        <button
          style={{
            width: "80px",
            height: "52px",
            backgroundColor: "white",
            position: "absolute",
            top: "10px",
            left: "200px",
            zIndex: "10000",
            border: "2px solid rgba(0,0,0,0.2)",
            backgroundClip: "padding-box",
            borderRadius: "4px",
            textAlign: "center",
            color: "black",
            padding: "12px",
            fontSize: "14px",
            fontFamily: "Helvetica Neue, Arial, Helvetica, sans-serif",
            fontWeight: "bold",
          }}
          onClick={this.onLogout}
        >
          Logout
        </button>
        <App />
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  //Maps state to redux store as props
  button: state.ui.button,
  authState: state.auth,
});

export default connect(mapStateToProps, { logout, buttonReset })(Profile);
{
  /* <div className="container">
<div className="main">
  <Card>
    <CardBody>
      <CardTitle>
        <h1>
          {user ? `Welcome, ${user.name}` : ""}{" "}
          <span role="img" aria-label="party-popper">
            🎉{" "}
          </span>{" "}
        </h1>
      </CardTitle>
      <br />
      <CardSubtitle>
        <h5>
          {" "}
          You are now Logged In{" "}
          <span role="img" aria-label="clap">
            👏{" "}
          </span>
        </h5>
        <Button size="lg" onClick={this.onLogout} color="primary">
          Logout
        </Button>
      </CardSubtitle>
      <br />
    </CardBody>
  </Card>
</div>
</div> */
}
