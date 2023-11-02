import React, { Component } from "react";
import PetsTable from "./PetsTable";
import PetOwnersTable from "./PetOwnersTable";
import axios from "axios";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { NavMenu } from "./NavMenu";
import Transaction from "./Transactions";

class Home extends Component {
  static displayName = Home.name;

  fetchPetOwners = async () => {
    const response = await axios.get("api/petOwners");
    this.props.dispatch({ type: "SET_PETOWNERS", payload: response.data });
  };

  render() {
    return (
      <>
        <NavMenu />
        <Container tag="main">
          <h1>Welcome To The Pet Hotel!</h1>
          <p>At our Pet Hotel, we take care of your pet while you are away. </p>
          <PetsTable fetchPetOwners={this.fetchPetOwners} />
          <br />
          <PetOwnersTable fetchPetOwners={this.fetchPetOwners} />
          <Transaction />
        </Container>
      </>
    );
  }
}

export default connect()(Home);
