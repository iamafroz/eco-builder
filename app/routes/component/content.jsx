import style from "~/css/content.css";
import constructImg from "~/images/construction.png";

export default function Content() {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href={style} />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Content</title>
      </head>
      <body>
        <div className="container1" align="center">
          <div className="row align-items-center content" align="center">
            <div className="col-sm-6 col-xs-6 aa">
              <p className="heading-content">Building something?</p>
              Eco-builders is a team of professional construction workers whose
              sole mission is to build durable and eco-friendly buildings.
            </div>

            <div className="col-sm-6 col-xs-6 order-first order-md-last ">
              <img src={constructImg} alt="" className="construct-img" />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
