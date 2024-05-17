"use client";
import React, { FC, useEffect, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header"
import Hero from "./components/Route/Hero";
interface Props {}

const Page: FC<Props> = (props) => {
    const [open, setOpen]=useState(false);
    const [activeItem, setActiveItem] = useState(0);
  return (
    <div>
      <Heading
        title="Bright Forge"
        description="Bright Forge is a platform for students to learn coding and get expertise from industry level experts"
        keywords="DSA, MERN stack development, Generative AI, Machine Learning"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
      />
      <Hero/>
    </div>
  );
};

export default Page;
