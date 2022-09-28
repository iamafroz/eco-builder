import style from "~/css/lets-talk.css";

export default function LetsTalk() {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href={style} />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Let’s talk</title>
      </head>
      <body>
        <div className="main-lets-talk">
          <p className="lets-talk">Let’s talk</p>

          <div className="text-box">
            <div className="col-sm col-xs">
              <input
                type="text"
                
                placeholder="Enter your email"
                className="email"
              />
            </div>

            <div className="col-sm col-xs">
              <input
                type="text"
                placeholder="Enter your full name"
                className="name"
              />
            </div>

            <div className="col-sm col-xs">
              <input
                type="text"
                placeholder="Enter message.."
                className="message"
              />
            </div>

            <div className="col-sm col-xs">
              <button className="send-message">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
