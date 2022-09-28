import style from "~/css/our-service.css";
import imageRect from "~/images/imagerect.png";

export default function OurService() {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href={style} />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Our Service</title>
      </head>
      <body>
        <div className="our-service">
          <p className="ourservicename">Our Service</p>

          <div className="col-sm col-xs-12 col-centered content-para">
            At Eco-builders, we place the client’s needs first and build
            structures that will have a positive impact on their lives. Below
            are a few types of structures that we specialize in:
            <ul>
              <li>Office buildings</li>
              <li>Mansions</li>
              <li>Eco houses</li>
            </ul>
          </div>

          <div className="row office">
            <div className="col-sm-6 col-xs-12 ">
              <img src={imageRect} alt="" className="imageRect" />
            </div>

            <div className="col-sm-6 col-xs-12">
              <p className="office-name">Office buildings</p>
              <p className="office-text">
                We build elegant office buildings that can be custom-made to
                suit your office needs at an affordable price.
              </p>

              <button className="learn-more">Learn more</button>
            </div>
          </div>

          <div className="row office">
            <div className="col-sm-6 col-xs-12 building-office">
              <p className="office-name">Office buildings</p>
              <p className="office-text">
                We build elegant office buildings that can be custom-made to
                suit your office needs at an affordable price.
              </p>

              <button className="learn-more">Learn more</button>
            </div>

            <div className="col-sm-6 col-xs-12 order-first order-md-last">
              <img src={imageRect} alt="" className="imageRect" />
            </div>
          </div>

          <div className="row office">
            <div className="col-sm-6 col-xs-12">
              <img src={imageRect} alt="" className="imageRect" />
            </div>

            <div className="col-sm-6 col-xs-12">
              <p className="office-name">Office buildings</p>
              <p className="office-text">
                We build elegant office buildings that can be custom-made to
                suit your office needs at an affordable price.
              </p>

              <button className="learn-more">Learn more</button>
            </div>
          </div>

          
        </div>
      </body>
    </html>
  );
}
