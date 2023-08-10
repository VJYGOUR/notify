import { useState } from "react";
import Main from "./Components/Main";
import Header from "./Components/Mark";
import Centre from "./Components/Rizky";
import AboveFotter from "./Components/Kimber";
import "./App.css";
import Fotter from "./Components/Nathana";
import Last from "./Components/Anna";
import Angela from "./Components/Angela";
import Jacob from "./Components/Jacob";

export default function App() {
  return (
    <div className="rounded-2xl hover:cursor-pointer md:w-1/2 md:ml-auto md:mr-auto md:bg-white md:pt-3 md:px-5">
      <Main />
      <Header />
      <Angela />
      <Jacob />
      <Centre />
      <AboveFotter />
      <Fotter />
      <Last />
    </div>
  );
}
