import { Link, Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import AddForm from "../AddForm";
import ServicesItem from "./ServicesItem";
import Contact from "./Contact";
import About from "./About";

function Services({ servicesArray, setServices, setBag, bagArray }) {
  let navigate = useNavigate()
  return (
    <section className="services-list">
      <AddForm servicesArray={servicesArray} setServices={setServices} />
      <button onMouseOver={() => navigate("about")}>Click me for about</button>
      <button onMouseOver={() => navigate("contact")}>Click me for about</button>
      <Outlet />
      <ul>
        {servicesArray.map((item, index) => (
          <ServicesItem
            key={index}
            obj={item}
            servicesArray={servicesArray}
            setServices={setServices}
            setBag={setBag}
            bagArray={bagArray}
          />
        ))}
      </ul>
    </section>
  );
}

export default Services;
