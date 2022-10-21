import constructImg from "~/images/construction.png";

export default function Content({ value }) {
  return (


<>

    <div className="grid justify-center">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-[80%] justify-self-center">
        <div className="text-center self-center" >
          <p className="heading-content text-black font-bold text-3xl">{value}</p>
          Eco-builders is a team of professional construction workers whose
          sole mission is to build durable and eco-friendly buildings.
        </div>

        <div className="image justify-self-center">
          <div className="grid justify-items-center">
          <img src={constructImg} alt="" className="construct-img item-center w-[80%]" />
          </div>
          
        </div>
      </div>



    </div>

    </>

  );
}
