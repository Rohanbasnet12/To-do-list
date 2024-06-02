import React from "react";

const ListItem = ({ items }) => {
  return (
    <div id="itemLists" className="w-full px-12 bg-white border-2 my-8">
      <ul className="list-disc">
        {items.length > 0 ? (
          items.map((item, index) => (
            <li key={index} className="py-4">
              {item}
            </li>
          ))
        ) : (
          <li className="py-4">No items added yet!</li>
        )}
      </ul>
    </div>
  );
};

export default ListItem;
