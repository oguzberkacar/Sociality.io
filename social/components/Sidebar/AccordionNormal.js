import { BellAlertIcon } from "@heroicons/react/24/outline";
import React from "react";

// This component is custom accordion component.
// We can use this component to create accordion.
// We need to pass the children to this component.
// Children format is like this: [ { id: uniqueID, item: ['title','inactive css' ,'active css'], panel: ['title' , 'active css'] } ]

//This Component is just normal accordion , It's not have function like always open.

export const AccordionNormal = ({ list }) => {
  return (
    <Accordion>
      {list.map((i ,index) => (
        <div key={index} className="">
          <AccordionItem
            toggle={i.id}
            className={`text-red-400`}
            activeStyle={`bg-red-400 text-white`}
            icon={i.item[0]}
          >
            <div className="flex  flex-col my-6">
              <div className="flex relative justify-start  space-x-2 items-center">
                <h4 className="uppercase text-white text-sm">{i.item[1]}</h4>
              </div>
            </div>
          </AccordionItem>
          <AccordionPanel id={i.id}>
            <ul className={`p-4  list-disc list-inside`}>
              {i.panel.map((i, index) => (
                <li key={index} className="hover:text-red-400 focus:text-red-400 cursor-pointer">
                  {i}
                </li>
              ))}
            </ul>
          </AccordionPanel>
        </div>
      ))}
    </Accordion>
  );
};



/* Logic */

const Context = React.createContext({});

function Accordion({ children }) {
  const [selected, setSelected] = React.useState();

  const toggleItem = React.useCallback(
    (id) => () => {
      setSelected((prevState) => (prevState !== id ? id : ""));
    },
    []
  );
  return (
    <Context.Provider value={{ selected, toggleItem }}>
      {children}
    </Context.Provider>
  );
}

//custom hook to consume all accordion values
const useAccordion = () => React.useContext(Context);

const style = {
  item: `block focus:outline-none border-1 w-full`,
  panel: `overflow-hidden transition-height ease duration-300 text-white  `,
};

function AccordionItem({ toggle, children, className, activeStyle, icon }) {
  const { selected, toggleItem } = useAccordion();
  return (
    <div
      role="button"
      onClick={toggleItem(toggle)}
      className={`w-full flex items-center justify-between  pr-2 ${
        selected === toggle ? activeStyle + "relative text-white " : className
      } ${style.item}  `}
    >
      <div className="flex relative items-center space-x-2 ">
        <div>{icon}</div>
        <div className="text-white"> {children}</div>
        {selected == toggle && (
          <div className="w-4 h-4 absolute -bottom-2 left-0 origin-center rotate-45 bg-red-400"></div>
        )}
      </div>

      <span className="float-right text-2xlfont-light text-white">
        {selected === toggle ? "-" : "+"}
      </span>
    </div>
  );
}

function AccordionPanel({ children, id }) {
  const { selected } = useAccordion();
  const ref = React.useRef();
  const inlineStyle =
    selected === id ? { height: ref.current?.scrollHeight } : { height: 0 };

  return (
    <div ref={ref} id={id} className={`${style.panel}`} style={inlineStyle}>
      {children}
      <div className=""></div>
    </div>
  );
}

// Up & Down Icons
const AngleUpIcon = () => (
  <svg
    fill="black"
    strokeWidth="0"
    viewBox="0 0 320 512"
    xmlns="http://www.w3.org/2000/svg"
    className=" h-4"
  >
    <path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" />
  </svg>
);

const AngleDownIcon = () => (
  <svg
    stroke="currentColor"
    fill="black"
    strokeWidth="0"
    viewBox="0 0 320 512"
    xmlns="http://www.w3.org/2000/svg"
    className=" h-4"
  >
    <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
  </svg>
);
