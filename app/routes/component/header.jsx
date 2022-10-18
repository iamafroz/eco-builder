import style from "~/css/header.css";
export default function Header() {
  return (


    <>

      <div className="1 grid grid-cols-1 sm:grid-cols-3 lg:grid:cols-3 justify-items-center  py-2">
        <div className="logo font-bold">Eco-Builder</div>
        <div className="links flex space-x-3 lg:space-x-3 sm:space-x-3 md:space-x-1">
          <a href="">Home</a>
          <a href="">Service</a>
          <a href="">About Us</a>
          <a href="">Contact Us</a>
        </div>
        <div className="button-1">
          <button className="login-button bg-[#68A678] text-white p-[3px] rounded">Login</button>
        </div>
      </div>

    </>
  );
}
