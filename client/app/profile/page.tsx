"use client";
import React, { FC, useState } from "react";
import Protected from "../hooks/userProtected";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import Profile from "../components/Profile/Profile";
import Footer from "../components/Footer";
type Props = {};

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(5);
  const [route, setRoute] = useState("Login");
  const { user } = useSelector((state: any) => state.auth);

  return (
    <div className="min-h-screen">
      <Protected>
        <Heading
          title={`${user?.name} profile - Bright Forge`}
          description="Bright Forge is a platform for students to learn coding and get expertise from industry level experts"
          keywords="DSA, MERN stack development, Generative AI, Machine Learning"
        />
        <Header
          open={open}
          setOpen={setOpen}
          activeItem={activeItem}
          setRoute={setRoute}
          route={route}
        />
        <Profile user={user} />
        <Footer />
      </Protected>
    </div>
  );
};

export default Page;
