import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPagePro = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-0">
      <MDBContainer>
        <MDBRow className="pt-5 mb-3 text-center d-flex justify-content-center">
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="/">Home</a>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="/Reasons">Reasons</a>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="/links">Links</a>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="/donate">Donate</a>
            </h6>
          </MDBCol>
        </MDBRow>
        <hr className="rgba-white-light" style={{ margin: "0 15%" }} />
        
        <hr className="clearfix d-md-none rgba-white-light" style={{ margin: "10% 15% 5%" }} />
        <MDBRow className="pb-3">
          <MDBCol md="12">
            <div className="mb-2" style={{"text-align":"center"}}>
              <a className="fb-ic" href="https://www.facebook.com">
              <i class="fa fa-facebook-official" style={{"font-size":"48px","color":"blue","padding":"20px"}}></i>
              </a>
              <a className="mb-4" href="https://www.twitter.com">
              <i class="fa fa-twitter-square" style={{"font-size":"48px","color":"cyan","padding":"20px"}}></i>
              </a>
              <a className="mb-2" href="https://www.google.com">
                <i class="fa fa-google-plus" style={{"font-size":"48px","padding":"20px"}}>

                </i>
              </a>
              <a className="mb-2" href="https://linkedin.com">
                <i className="fa fa-linkedin" style={{"font-size":"48px","padding":"20px"}}> </i>
              </a>
              <a className="mb-2" href="https://instagram.com">
                <i className="fa fa-instagram" style={{"font-size":"48px","padding":"20px"}}> </i>
              </a>
              <a className="mb-2" href="https://pintrest.com">
                <i className="fa fa-pinterest" style={{"font-size":"48px","padding":"20px"}}> </i>
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:
          <a> U-Recycle </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPagePro;