import { Link } from "react-router-dom";

function BagItem({ id, serviceName,serviceDescription}) {

    
    return (
      <li>
        <Link to={`/service-page/${id}`}>Show Service-page </Link>
        <h3>{serviceName}</h3>
        <p>{serviceDescription}</p>
      </li>
    );
  }
  
  export default BagItem;
  