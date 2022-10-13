import Header from "~/routes/component/header"
import Content from "~/routes/component/content"
import style from "~/css/global.css"
import OurService from "~/routes/component/our-service"
import AboutUs from "~/routes/component/about-us"
import LetsTalk from "~/routes/component/lets-talk"
import Footer from "~/routes/component/footer"


export default function Index() {

  return (

    <div className="header">
      <link rel="stylesheet" href={style} />
      <script src="https://cdn.tailwindcss.com"></script>
      <link href=
        "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
        rel="stylesheet" />
      <Header />
      <Content value="Building Something!" />
      <OurService />
      <AboutUs />
      <LetsTalk />
      <Footer />
    </div>

  );
}
