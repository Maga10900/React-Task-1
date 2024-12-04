import { services } from "../../public/data/data" 
import { bag_List } from "../../public/data/data" 
import AddForm from "./AddForm"
import Bag from "./Bag/Bag"
import Services from "./Services/Services"
import { useState } from "react"

function MainComp() {
  let [servicesArray, setServices] = useState(services)
  let [bagArray, setBag] = useState(bag_List)

    return (
      <main>
        <AddForm servicesArray={servicesArray} setServices={setServices}/>
        <Services setServices={setServices} servicesArray={servicesArray} setBag = {setBag} bagArray = {bagArray}/>
        <Bag bagArray={bagArray} />
      </main>
    )
  }
  
  export default MainComp
  
  