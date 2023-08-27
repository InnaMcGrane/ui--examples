import { AccordianItem } from "./AccordianIItem"
import { list } from "./list"
import "./style.css";

export const Accordian = () => {
  return (
    <div>
      {list.map((item, index) => 
        <AccordianItem key = {index} title = {item.title} content={item.content} />
    )}
    </div>)
};
