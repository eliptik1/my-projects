import { useState } from "react";
import AccordionBox from "./AccordionBox";

const list = [
  {
    title: "accordion as a musical instrument",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque placeat amet enim!",
  },
  {
    title: "123123",
    text: "1312placeat amet enim!",
  },
  {
    title: "qweqweqwe",
    text: "bbbbbbvvvvvvvvffffffffffff",
  },
];

function Accordion() {
  const [isMultipleSelection, setIsMultipleSelection] = useState(false);

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <h3>Accordion</h3>

      <button
        onClick={() => setIsMultipleSelection(!isMultipleSelection)}
        className="bg-orange-400 p-3 m-6"
      >
        enable {isMultipleSelection ? "single" : "multi"} selection
      </button>

      <div className="flex flex-col gap-3">
        {list.map((item, index) => (
          <AccordionBox
            key={index}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            isMultipleSelection={isMultipleSelection}
            title={item.title}
          >
            {item.text}
          </AccordionBox>
        ))}

        {/* <AccordionBox
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          title="what are accordion components?"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus dicta magni dolores itaque ipsa quam ex a dolorum?
          Temporibus, laudantium?
        </AccordionBox>
        <AccordionBox
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          title="what are they used for?"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
          consectetur. Autem quasi dolorem eos alias beatae dolores possimus
          voluptas neque ea molestiae repellendus, repellat eum voluptatum ad
          sapiente ex quisquam!
        </AccordionBox>
        <AccordionBox
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          title="accordion as a musical instrument"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          placeat amet enim!
        </AccordionBox> */}
      </div>
    </>
  );
}
export default Accordion;
