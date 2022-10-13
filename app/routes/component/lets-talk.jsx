import style from "~/css/lets-talk.css";

export default function LetsTalk() {
  return (



    <div className="main-lets-talk">
      <link rel="stylesheet" href={style} />
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

  );
}
