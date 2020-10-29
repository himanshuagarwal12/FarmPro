
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import SubmitBox from './SubmitBox'
 
const Footer = () => {
  return (
    <MDBFooter color="grey" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
      <hr style={{
          color: 'red',
          backgroundColor: 'white',
          height: 5
           }}
           />
        <MDBRow md="6">
        
          <MDBCol md="8" size="10">
          
            <h5 className="title">SIGN UP FOR OUR NEWSLETTER</h5>
            <p>
             Don't miss out on news and promotions
            </p>
            <MDBRow className="mx-auto" size="12">
            <MDBCol>
            <ul>
            <h5 className="title">Help</h5>
              <li className="list-unstyled">
                <a href="/payment">Payments</a>
              </li>
              <li className="list-unstyled">
                <a href="/shipping">Shipping</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Cancel & Returns</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">FAQ</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Report Infringement</a>
              </li>
            </ul>
            </MDBCol>
            <MDBCol>
            <ul>
           
            <h5 className="title">Social</h5>
              <li className="list-unstyled">
                <a href="#!">Facebook</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Twitter</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Youtube</a>
              </li>
            </ul>
  
            </MDBCol>
            <MDBCol>
            <ul>
            <h5 className="title">MY ACCOUNT</h5>
              <li className="list-unstyled">
                <a href="/">Our Products</a>
              </li>
              <li className="list-unstyled">
                <a href="/">What's New</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Offers</a>
              </li>
            </ul>
            </MDBCol>
            <MDBCol> 
            <ul>
            <h5 className="title">INFORMATION</h5>
              <li className="list-unstyled">
                <a href="#!">Store Location</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Privacy Policy</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Terms and Conditions</a>
              </li>
            </ul>
            </MDBCol>
            <MDBCol>
            <ul>
            <h5 className="title">Address</h5>
              <li className="list-unstyled">
                <a href="#!">aaaaaaaaaaaaaaaaaaaaa</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">bbbbbbbbbbb</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">cccccccccc</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">1111111</a>
              </li>
            </ul>
            </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol>
            <SubmitBox containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 8}} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright &copy; FarmPro
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;