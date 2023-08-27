import { useState } from "react";

export const AccordianItem = ({ title, content }) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <div className={isOpen ? "active" : "default"} onClick={handleIsOpen}>
      { title }
    </div>
  {
    isOpen && <div className="content">
        {content}
        </div>
  }

 </div>)
}
