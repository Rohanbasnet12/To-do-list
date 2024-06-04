import React from "react";

const ListItem = ({ items }) => {
  return (
    <div
      id="itemLists"
      className="w-full px-12 bg-white my-8 rounded-md"
      style={{ boxShadow: "2px 2px 22px 2px #8a8a8a" }}
    >
      <ul className="list-disc">
        {items.length > 0 ? (
          items.map((item, index) => (
            <div className="flex items-center justify-between">
              <li key={index} className="py-4">
                {item}
              </li>
              <div className="font flex gap-6">
                <i class="fa-solid fa-trash"></i>
                <i class="fa-solid fa-pen-to-square"></i>
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-between">
            <li className="py-4">No items added yet!</li>
            <div className="font flex gap-6">
              <i class="fa-solid fa-trash"></i>
              <i class="fa-solid fa-pen-to-square"></i>
            </div>
          </div>
        )}
      </ul>
    </div>
  );
};

export default ListItem;
