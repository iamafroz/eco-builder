import style from "~/css/header.css";
export default function Header() {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href={style} />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Header</title>
      </head>
      <body>
        <div className="container-fluid">
          <div className="row" align="center">
            <div className="col-sm-2 col-xs-6 web-name">Eco-builder</div>
            <div className="col-sm-8 col-xs-6 header-home">
              <div className="row justify-content-center main">
                <a href="#" className="home">
                  Home
                </a>
                <a href="#" className="home">
                  Services
                </a>
                <a href="#" className="home">
                  About us
                </a>
                <a href="#" className="home">
                  Contact us
                </a>
              </div>
            </div>

            <div className="col-sm-2 col-xs-6 login">
              <button className="login-button">Login</button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
