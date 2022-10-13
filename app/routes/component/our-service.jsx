import style from "~/css/our-service.css";
import imageRect from "~/images/imagerect.png";

export default function OurService() {
  return (
    <div className="our-service grid justify-items-center">
      <div className="grid">
        <link rel="stylesheet" href={style} />
        <p className="our-servce font-bold text-black text-3xl text-center">Our Service</p>
        <p> At Eco-builders, we place the client’s needs first and build
          structures that will have a positive impact on their lives. Below
          are a few types of structures that we specialize in:</p>

        <div className="grid justify-items-start ">
          <ul>
            <li>Office buildings</li>
            <li>Mansions</li>
            <li>Eco houses</li>
          </ul>
        </div>


        <div className="grid grid-cols-2 gap-80">

          <div className="basic-1/2">
            <img src={imageRect} alt="" className="imageRect" />
          </div>
          <div className="basic-1/2 self-center">
            <p className="office-name">Office buildings</p>
            <p className="office-text">
              We build elegant office buildings that can be custom-made to<br></br>
              suit your office needs at an affordable price.
            </p>

            <button className="learn-more">Learn more</button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-80">

          <div className="basic-1/2 self-center">
            <p className="office-name">Office buildings</p>
            <p className="office-text">
              We build elegant office buildings that can be custom-made to<br></br>
              suit your office needs at an affordable price.
            </p>

            <button className="learn-more">Learn more</button>
          </div>

          <div className="basic-1/2">
            <img src={imageRect} alt="" className="imageRect" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-80">

          <div className="basic-1/2">
            <img src={imageRect} alt="" className="imageRect" />
          </div>
          <div className="basic-1/2 self-center">
            <p className="office-name">Office buildings</p>
            <p className="office-text">
              We build elegant office buildings that can be custom-made to<br></br>
              suit your office needs at an affordable price.
            </p>

            <button className="learn-more">Learn more</button>
          </div>


        </div>

      </div>

    </div>
  );
}
