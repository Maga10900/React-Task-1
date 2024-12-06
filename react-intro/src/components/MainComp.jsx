import { Route, Routes } from "react-router-dom";
import { services } from "../../public/data/data";
import { bag_List } from "../../public/data/data";
import AddForm from "./AddForm";
import Bag from "./Bag/Bag";
import Services from "./Services/Services";
import { useState } from "react";
import Home from "./Home";
import ServicesPage from "./ServicePage";
import About from "./Services/About";
import Contact from "./Services/Contact";

function MainComp() {
  let [servicesArray, setServices] = useState(services);
  let [bagArray, setBag] = useState(bag_List);

  return (
    <main>
      <Routes>
        <Route
          path="/services"
          element={
            <Services
              setServices={setServices}
              servicesArray={servicesArray}
              setBag={setBag}
              bagArray={bagArray}
            />
          }
        >
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

        </Route>

        <Route path="/bag" element={<Bag bagArray={bagArray} />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/service-page/:id"
          element={<ServicesPage bag={bagArray} />}
        />
      </Routes>
    </main>
  );
}

export default MainComp;
