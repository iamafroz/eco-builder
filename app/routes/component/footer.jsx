import style from "~/css/footer.css";
import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href={style} />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Footer</title>
      </head>
      <body>
        <MDBFooter
          bgColor="light"
          className="text-center footer text-lg-start text-muted"
        >
          <section className="footer">
            <MDBContainer className="text-center text-md-start mt-5">
              <MDBRow className="mt-3">
                <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Quick links:</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Home
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Service
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      About Us
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Contact Us
                    </a>
                  </p>
                </MDBCol>

             <div className="col">
             <div className="our-vision">Our vision:</div>
                  <div className="div">
                    Being a world class organization that transforms lifes one
                    building at a time.
                  </div>
            
             </div>
                

                <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <MDBIcon icon="home" className="me-2" />
                    New York, NY 10012, US
                  </p>
                  <p>
                    <MDBIcon icon="envelope" className="me-3" />
                    info@example.com
                  </p>
                  <p>
                    <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                  </p>
                  <p>
                    <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
        </MDBFooter>
      </body>
    </html>
  );
}
