function BagItem({ obj, serviceName,serviceDescription}) {

    
    return (
      <li>
        <h3>{serviceName}</h3>
        <p>{serviceDescription}</p>
      </li>
    );
  }
  
  export default BagItem;
  