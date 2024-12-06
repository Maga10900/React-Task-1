import { useParams } from "react-router-dom";

function ServicesPage({ bag }) {
  let { id } = useParams();
  let elementIndex = bag.findIndex((item) => item.id === parseInt(id));
  bag[elementIndex];
  console.log(id);

  if (!bag[elementIndex]) {
    return (
      <section>
        <div>
          <h1 style={{ color: "red", fontSize: "150px", textAlign: "center" }}>404</h1>
        </div>
      </section>
    );
  }
  return (
    <section>
      <div>
        <h3>{bag[elementIndex] && bag[elementIndex].serviceName}</h3>
        <h4>{bag[elementIndex] && bag[elementIndex].serviceDescription}</h4>
      </div>
    </section>
  );
}

export default ServicesPage;
