import style from "~/css/content.css";
import constructImg from "~/images/construction.png";

export default function Content({ value }) {
  return (

    <div className="grid justify-items-center">


      <div className="grid grid-cols-2 gap-4 justify-items-center my-11 w-3/4">

        <div className="basic-1/2 text-center self-center" >
          <p className="heading-content text-black font-bold text-3xl">{value}</p>
          Eco-builders is a team of professional construction workers whose
          sole mission is to build durable and eco-friendly buildings.

        </div>

        <div className="basic-1/2" >
          <img src={constructImg} alt="" className="construct-img" />

        </div>

      </div>

    </div>

  );
}
