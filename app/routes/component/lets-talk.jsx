import style from "~/css/lets-talk.css";

export default function LetsTalk() {
  return (



    <div className="main-lets-talk grid justify-items-center">
      <p className="lets-talk text-black text-2xl">Let’s talk</p>

      <div className="text-box">
        <div className="grid grid-cols-1 lg:cols-1 sm:grid-cols-1">
          <input
            type="text"
            placeholder="Enter your email"
            className="email rounded border-2 border-solid border-[#68A678] p-[2px] m-[4px]"
          />
        </div>

        <div className="grid grid-cols-1 lg:cols-1 sm:grid-cols-1">
          <input
            type="text"
            placeholder="Enter your full name"
            className="name  rounded border-2 border-solid border-[#68A678] p-[2px] m-[4px]"
          />
        </div>

        <div className="grid grid-cols-1 lg:cols-1 sm:grid-cols-1">
          <input
            type="text"
            placeholder="Enter message.."
            className="message  rounded border-2 border-solid border-[#68A678] p-[2px] m-[4px]"
          />
        </div>

        <div className="grid grid-cols-1 lg:cols-1 sm:grid-cols-1">
          <button className="send-message  text-white rounded border-2 border-solid border-[#68A678] p-[2px] m-[4px] bg-[#68A678]">
            Send Message
          </button>
        </div>
      </div>
    </div>

  );
}
