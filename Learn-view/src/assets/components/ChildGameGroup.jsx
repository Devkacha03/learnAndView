import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Display } from "./Display";
import { ProFooter } from "./ProFooter";

// IMPORT IMAGES
import sparrowImg from "../img/sparrow.jpg";
import parrotImg from "../img/parrot.jpg";
import gtr from "../img/gtr.jpg";
import bmw from "../img/bmw.jpg";
import lion from "../img/lion.jpg";
import tiger from "../img/tiger.jpg";

export const ChildGameGroup = () => {
  // CREATE STATE
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  //CREATE JSON TO DISPLAY DATA
  const data = {
    Birds: [
      { name: "Sparrow", image: sparrowImg },
      { name: "Parrot", image: parrotImg },
    ],
    Cars: [
      { name: "BMW", image: bmw },
      { name: "GTR", image: gtr },
    ],
    Animals: [
      { name: "Lion", image: lion },
      { name: "Tiger", image: tiger },
    ],
  };

  return (
    <>
      <div className="flex h-screen">
        {/* SIDEBAR COMPONENT */}
        <Sidebar
          categories={data}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <div className="flex-1 flex flex-col ml-[25%]">
          {/* DISPLAY COMPONENT */}
          <Display selectedItem={selectedItem} />
          {/* FOOTER COMPONENT */}
          <ProFooter
            animaKey={selectedCategory}
            animalItem={data}
            setSelectedItem={setSelectedItem}
          />
        </div>
      </div>
    </>
  );
};
