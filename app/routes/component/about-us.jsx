import style from "~/css/about-us.css";
import vision from "~/images/vision.png";
import mission from "~/images/mission.png";
import polygon1 from "~/images/polygon1.png";
import polygon2 from "~/images/polygon2.png";
import polygon3 from "~/images/polygon3.png";
import insta from "~/images/insta.png";


export default function AboutUs() {
  return (



    <div className="about-us-body grid bg-[#E7FFED]">
      {/* <link rel="stylesheet" href={style} /> */}
      <p className="about-us-name text-2xl text-center m-[10px]">About Us</p>

      {/* <div className="grid lg:flex">

        <div className="grid lg:flex">

          <div className="justify-self-center mx-2">
            <div className="ourmission">
              <div className="row our-mission px-2">
                <img src={vision} alt="" className="mission-img" />
                <div className="our-mission-text"> Our vision</div><br></br>
                Being a world class organization that transforms lifes one
                building at a time.
              </div>
            </div>
          </div>

          <div className="justify-self-center mx-2">
            <div className="ourmission">
              <div className="row our-mission px-2">

                <img src={mission} alt="" className="mission-img" />
                <div className="our-mission-text"> Our mission</div><br></br>
                Build durable and eco-friendly buildings that will serve many
                generations to come.
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="main grid lg:grid-cols-2 justify-items-center">

        <div className="ourmission w-[60%] border-2 p-[20px] border-[#68A678] rounded-lg m-[10px]">
          <div className="our-mission">
            <div className="our-mission px-2">
              <div className="grid grid-cols-2 w-full">
                <div className="div1 w-[20px]">
                  <img src={mission} alt="" className="mission-img w-[20px]" />
                </div>
                <div className="div2">
                  <p>Our mission</p>
                </div>
              </div>


              <ul className="list-disc">
                <li>
                  Build durable and eco-friendly buildings that will serve many
                  generations to come.
                </li>
              </ul>

            </div>
          </div>
        </div>

        <div className="ourmission w-[60%] border-2 p-[20px] border-[#68A678] rounded-lg m-[10px]">
          <div className="our-mission">
            <div className="our-mission px-2">
              <div className="grid grid-cols-2 w-full">
                <div className="div1 w-[20px]">
                  <img src={vision} alt="" className="mission-img w-[20px]" />
                </div>
                <div className="div2">
                  <p>Our Vision</p>
                </div>
              </div>
              <ul className="list-disc">
                <li>
                  Being a world class organization that transforms lifes one
                  building at a time.
                </li>
              </ul>
            </div>
          </div>
        </div>


      </div>

      <p className="meet text-2xl text-center m-[30px]">Meet our leaders:</p>

      {/* <div className="grid lg:flex justify-center  ">

        <div className="grid lg:flex ">

          <div className="1">
            <div className="grid lg:flex justify-items-center">
              <img src={polygon1} alt="" className="poly1" />
              <div className="team-name">Hillary Doe</div>
              <div className="team-des">Chief Architect</div>
              <div className="team-des">
                <img src={insta} alt="" />
              </div>
            </div>

          </div>
          <div className="1"><div className="grid lg:flex justify-items-center">
            <img src={polygon2} alt="" className="poly2" />
            <div className="team-name">Janet Juma</div>
            <div className="team-des">CEO & Co-founder</div>
            <div className="team-des">
              <img src={insta} alt="" />
            </div>
          </div></div>
          <div className="1"><div className="grid lg:flex justify-items-center">
            <img src={polygon3} alt="" className="poly3" />
            <div className="team-name">John James</div>
            <div className="team-des">Head of Marketting</div>
            <div className="team-des">
              <img src={insta} alt="" />
            </div>
          </div></div>

        </div>

      </div> */}

      <div className="leaders">
        <div className="content grid lg:grid-cols-3">

          <div className="1">
            <div className="grid lg:grid-rows sm:grid:rows justify-items-center">
              <img src={polygon1} alt="" className="poly1 w-[150px]" />
              <div className="team-name">Hillary Doe</div>
              <div className="team-des">Chief Architect</div>
              <div className="team-des">
                <img src={insta} alt="" />
              </div>
            </div>
          </div>

          <div className="1">
            <div className="grid lg:grid-rows sm:grid:rows justify-items-center">
              <img src={polygon2} alt="" className="poly1 w-[150px]" />
              <div className="team-name">Janet Juma</div>
              <div className="team-des">CEO & Co-founder</div>
              <div className="team-des">
                <img src={insta} alt="" />
              </div>
            </div>
          </div>

          <div className="1">
            <div className="grid lg:grid-rows sm:grid:rows justify-items-center">
              <img src={polygon3} alt="" className="poly1 w-[150px]" />
              <div className="team-name">John James</div>
              <div className="team-des">Head of Marketting</div>
              <div className="team-des">
                <img src={insta} alt="" />
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>

  );
}
