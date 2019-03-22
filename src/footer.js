import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Pie = () => {
  return (
    <MDBFooter color="blue " className="font-small darken-3 pt-0 mt-5 fixed-bottom">
        <MDBRow>
          <MDBCol md="12" className="py-10">
            <div className="mb-5 flex-center">
              <a className="fb-ic" href="https://www.facebook.com/unitec.honduras/" arial-label="Icono de Facebook">
                <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="tw-ic" href="https://twitter.com/huntermata" arial-label="Icono de twitter con su respectivo link">
                <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
             
             
              <a className="ins-ic" href="https://www.instagram.com/matamorosss" arial-label="Icono de instagram con su respectivo link">
                <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x" >
                </i>
              </a>
              
            </div>
          </MDBCol>
        </MDBRow>
      
      
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://penamazon.surge.sh" alt="linkpagin"> penamazon.surge.sh</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Pie;