import Banner from "./components/banner";
import Contact from "./components/contact";
import Customer from "./components/customer";
import Demo from "./components/demo";
import Service from "./components/service";
import Viewpoint from "./components/viewpoint";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <Demo />
      <Service />
      <Viewpoint />
      <Customer />
      <Contact />
    </div>
  );
}
