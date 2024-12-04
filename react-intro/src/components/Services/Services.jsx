import ServicesItem from "./ServicesItem";


function Services({servicesArray,setServices,setBag,bagArray}) {

  
  return (
    <section className="services-list">
      <ul>
        
        {servicesArray.map((item, index) => (
          <ServicesItem
            key={index}
            obj={item}
            servicesArray={servicesArray}
            setServices={setServices}
            setBag = {setBag} 
            bagArray = {bagArray}
          />
        ))}
      </ul>
    </section>
  );
}

export default Services;
