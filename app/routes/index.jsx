import Header from "~/routes/component/header"
import Content from "~/routes/component/content"
import style from "~/css/global.css"
import OurService from "~/routes/component/our-service"
import AboutUs from "~/routes/component/about-us"
import LetsTalk from "~/routes/component/lets-talk"
import Footer from "~/routes/component/footer"

export default function Index() {
  return (
    <html lang="en">
    <head>
      <link rel="stylesheet" href={style} />
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Main Page</title>
    </head>
    <body> 
      <div className="header">
      <Header/>
      <Content/>
      <OurService/>
      <AboutUs/>
      <LetsTalk/>
      <Footer/>
      </div>
    </body>
    </html>
  );
}
