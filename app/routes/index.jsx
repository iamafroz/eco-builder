
import Content from "~/routes/component/content"

import OurService from "~/routes/component/our-service"
import AboutUs from "~/routes/component/about-us"
import LetsTalk from "~/routes/component/lets-talk"


export default function Index() {

  return (
    <>
      <div className="header">
        <Content value="Building Something!" />
        <OurService />
        <AboutUs />
        <LetsTalk />
      </div>
    </>
  );
}
