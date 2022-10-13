import style from "~/css/header.css";
export default function Header() {
  return (


    <>

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href={style} />




      <div class="grid grid-cols-3 justify-items-center">
        <div className="basic-1/3 text-black font-bold m-1">Eco Builder</div>
        <div className="basic-1/3 m-1">
          <div className="grid grid-rows"></div>
          <a href="" className="px-3">Home</a>
          <a href="" className="px-3">Service</a>
          <a href="" className="px-3">About Us</a>
          <a href="" className="px-3">Contact Us</a>
         
        </div>
        <div className="basic-1/3 justify-self-center">
          <button className="login-button m-1">Login</button>
        </div>
      </div>


    </>
  );
}
