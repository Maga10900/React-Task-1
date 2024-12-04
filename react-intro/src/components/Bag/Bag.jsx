import ServicesItem from "../Services/ServicesItem";
import BagItem from "./BagItem";

function Bag({ bagArray }) {
  return (
    <section className="bag-list">

      <ul>
        {
          bagArray.map((item) => (<BagItem
            key={item.id}
            {...item} />))
        }
      </ul>
    </section>
  );
}

export default Bag;
