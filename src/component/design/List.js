import React,{useState} from "react";

const List = ({ navList,filterItems }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="portfolio___list">
      {navList.map((category, index) => {
        return (
          <button
            className={`${active === index ? 'active-work' : ''} portfolio__list-item text-cs`}
            key={index}
            onClick={() => {
              setActive(index);
              filterItems(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default List;
