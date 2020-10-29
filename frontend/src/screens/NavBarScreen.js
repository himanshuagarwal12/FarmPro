
import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
         
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Fertilizers</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Nitrogen Fertilizers</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Potassium Fertilizers</MDBDropdownItem>
                </MDBDropdownMenu>
                </MDBDropdown>
                <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Pesticides</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Insecticides</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Herbicides</MDBDropdownItem>
                </MDBDropdownMenu>
                </MDBDropdown>
                <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Seeds</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">SunFlower Seeds</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Pumpkin Seeds</MDBDropdownItem>
                </MDBDropdownMenu>
                </MDBDropdown>
                <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Motor Pump</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Impulse Pumps</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Velocity Pumps</MDBDropdownItem>
                </MDBDropdownMenu>
                </MDBDropdown>
                <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Shadenets</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Mono Agro</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Mono Filament</MDBDropdownItem>
                </MDBDropdownMenu>
                </MDBDropdown>
                <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Mulching Sheets</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Plastic Films</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Geotextiles</MDBDropdownItem>
                </MDBDropdownMenu>
                </MDBDropdown>
                <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Sprayers</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">UTV</MDBDropdownItem>
                  <MDBDropdownItem href="#!">ATV</MDBDropdownItem>
                </MDBDropdownMenu>
                </MDBDropdown>
                <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Crop Strings</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Green</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Yellow</MDBDropdownItem>
                </MDBDropdownMenu>
                </MDBDropdown>
                <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Offer Zones</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Coupon Codes</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default NavbarPage;