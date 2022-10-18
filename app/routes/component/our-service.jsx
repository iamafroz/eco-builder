import imageRect from "~/images/imagerect.png";

export default function OurService() {
  return (
    <div className="our-service grid">
      <div className="our-service justify-self-center">
        <div className="grid px-2">
          <p className="our-servce font-bold text-black text-3xl text-center">Our Service</p>
          <p> At Eco-builders, we place the client’s needs first and build
            structures that will have a positive impact on their lives. Below
            are a few types of structures that we specialize in:</p>

          <div className="grid justify-items-start m-[20px]">
            <ul className="list-disc">
              <li>Office buildings</li>
              <li>Mansions</li>
              <li>Eco houses</li>
            </ul>
          </div>



          <div className="buildings grid grid-rows-3">
            <div className="grid lg:flex gap-x-52 justify-self-center">
              <div className="order1">
                <img src={imageRect} alt="" className="imageRect" />
              </div>
              <div className="self-center order-2">
                <p className="office-name">Office buildings</p>
                <p className="office-text">
                  We build elegant office buildings that can be custom-made to<br></br>
                  suit your office needs at an affordable price.
                </p>

                <button className="learn-more bg-[#68A678] p-[3px] rounded text-white my-[10px]">Learn more</button>
              </div>
            </div>

            <div className="grid lg:flex gap-x-52 justify-self-center m-[20px]">

              <div className="self-center lg:order-4 sm:order-4 order-5">
                <p className="office-name">Office buildings</p>
                <p className="office-text">
                  We build elegant office buildings that can be custom-made to<br></br>
                  suit your office needs at an affordable price.
                </p>

                <button className="learn-more bg-[#68A678] p-[3px] rounded text-white my-[10px]">Learn more</button>
              </div>

              <div className="sm:order-3 lg:order-4 order-4">
                <img src={imageRect} alt="" className="imageRect" />
              </div>
            </div>

            <div className="grid lg:flex gap-x-52 justify-self-center m-[20px]">

              <div className="order-5">
                <img src={imageRect} alt="" className="imageRect" />
              </div>
              <div className="order-6 self-center">
                <p className="office-name">Office buildings</p>
                <p className="office-text">
                  We build elegant office buildings that can be custom-made to<br></br>
                  suit your office needs at an affordable price.
                </p>

                <button className="learn-more bg-[#68A678] p-[3px] rounded text-white my-[10px]">Learn more</button>
              </div>


            </div>
          </div>



        </div>
      </div>


    </div>
  );
}
