import style from "~/css/about-us.css";
import vision from "~/images/vision.png";
import mission from "~/images/mission.png";
import polygon1 from "~/images/polygon1.png";
import polygon2 from "~/images/polygon2.png";
import polygon3 from "~/images/polygon3.png";
import insta from "~/images/insta.png";


export default function AboutUs() {
  return (



    <div className="about-us-body">
      <link rel="stylesheet" href={style} />
      <p className="about-us-name">About Us</p>

      <div className="grid grid-rows-1">

        <div className="grid grid-cols-2 gap-32">

          <div className="basic-2/2 justify-self-center">
            <div className="ourmission">
              <div className="row our-mission">
                <img src={vision} alt="" className="mission-img" />
                <div className="our-mission-text"> Our vision</div><br></br>
                Being a world class organization that transforms lifes one
                building at a time.
              </div>
            </div>
          </div>

          <div className="basic-2/2 justify-self-center">
            <div className="ourmission">
              <div className="row our-mission">

                <img src={mission} alt="" className="mission-img" />
                <div className="our-mission-text"> Our mission</div><br></br>
                Build durable and eco-friendly buildings that will serve many
                generations to come.
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="meet">Meet our leaders:</p>

      <div className="grid grid-rows-1 justify-center  ">

        <div className="grid grid-cols-3 gap-x-96 ">

          <div className="basic-1/3">
            <div className="grid grid-flow-row justify-items-center">
              <img src={polygon1} alt="" className="poly1" />
              <div className="team-name">Hillary Doe</div>
              <div className="team-des">Chief Architect</div>
              <div className="team-des">
                <img src={insta} alt="" />
              </div>
            </div>

          </div>
          <div className="basic-1/3"><div className="grid grid-flow-row justify-items-center">
            <img src={polygon2} alt="" className="poly2" />
            <div className="team-name">Janet Juma</div>
            <div className="team-des">CEO & Co-founder</div>
            <div className="team-des">
              <img src={insta} alt="" />
            </div>
          </div></div>
          <div className="basic-1/3"><div className="grid grid-flow-row justify-items-center">
            <img src={polygon3} alt="" className="poly3" />
            <div className="team-name">John James</div>
            <div className="team-des">Head of Marketting</div>
            <div className="team-des">
              <img src={insta} alt="" />
            </div>
          </div></div>

        </div>

      </div>

    </div>

  );
}
