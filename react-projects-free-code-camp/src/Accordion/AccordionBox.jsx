import { useEffect, useState } from "react";

function AccordionBox({
  title,
  children,
  index,
  activeIndex,
  setActiveIndex,
  isMultipleSelection,
}) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setActiveIndex(null);
    setIsOpen(false);
    return () => {};
  }, [isMultipleSelection]);

  return (
    <div className="flex flex-col  w-[500px]">
      <button
        onClick={() => {
          setActiveIndex(index);
          if (isMultipleSelection) {
            setIsOpen(!isOpen);
          } else if (index == activeIndex) {
            setActiveIndex(null);
          }
        }}
        className="bg-orange-300 p-3"
      >
        <div>{title}</div>
      </button>
      {isMultipleSelection && isOpen ? (
        <div className="bg-orange-200 p-3">{children}</div>
      ) : (
        !isMultipleSelection &&
        index == activeIndex && (
          <div className="bg-orange-200 p-3">{children}</div>
        )
      )}
    </div>
  );
}
export default AccordionBox;
