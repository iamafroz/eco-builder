import style from "~/css/about-us.css";
import vision from "~/images/vision.png";
import mission from "~/images/mission.png";
import polygon1 from "~/images/polygon1.png";
import polygon2 from "~/images/polygon2.png";
import polygon3 from "~/images/polygon3.png";
import insta from "~/images/insta.png";

export default function AboutUs() {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href={style} />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About us</title>
      </head>
      <body>
        <div className="about-us-body">
          <p className="about-us-name">About Us</p>

          <div
            className="row row-centered justify-content-around about"
            align="center"
          >
            <div className="col-sm-4 col-xs-12 col-centered">
              <div className="ourmission">
                <div className="row our-mission">
                  <img src={vision} alt="" className="mission-img" />
                  <div className="our-mission-text">Our vision</div>
                  Being a world class organization that transforms lifes one
                  building at a time.
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-xs-12 col-centered">
              <div className="ourmission">
                <div className="row our-mission">
                  <img src={mission} alt="" className="mission-img" />
                  <div className="our-mission-text">Our mission</div>
                  Build durable and eco-friendly buildings that will serve many
                  generations to come.
                </div>
              </div>
            </div>
            
          </div>

          <p className="meet">Meet our leaders:</p>

          <div className="row polygon" align="center">
            <div className="col-sm-4 col-xs-12 col-centered">
              <div className="col-sm col-xs-12 col-centered">
                <img src={polygon1} alt="" className="poly1" />
                <div className="team-name">Hillary Doe</div>
                <div className="team-des">Chief Architect</div>
                <div className="team-des">
                  <img src={insta} alt="" />
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-xs-12 col-centered">
              <div className="col-sm col-xs-12 col-centered">
                <img src={polygon2} alt="" className="poly2" />
                <div className="team-name">Janet Juma</div>
                <div className="team-des">CEO & Co-founder</div>
                <div className="team-des">
                  <img src={insta} alt="" />
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-xs-12 col-centered">
              <div className="col-sm col-xs-12 col-centered">
                <img src={polygon3} alt="" className="poly3" />
                <div className="team-name">John James</div>
                <div className="team-des">Head of Marketting</div>
                <div className="team-des">
                  <img src={insta} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
