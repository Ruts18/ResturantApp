import React, { useState } from "react";
import "./Style.css";
import Menu from "./MenuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";
const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All"
];

console.log(uniqueList);
const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;

// <div className="card-container">
//         <div className=" card ">
//           <div className="card-body">
//             <span className="card-number card-circle subtle">1</span>
//             <span className="card-author subtle">BreakFast</span>
//             <h2 className="card-title"> Maggi</h2>
//             <span className="card-description subtle">i love masala maggi</span>
//             <div className="card-read">Read</div>
//           </div>
//           {/* <img src={image} alt="images" className="card-media" /> */}

//           <span className="card-tag subtle">Order Now</span>
//         </div>
//       </div>
