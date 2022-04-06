import React from "react";
import { Footer, Navigation, Routing, Toast } from "./components";

const App = () => {
  return (
    <>
      <Navigation />
      <Toast />
      <Routing />
      <Footer />
    </>
  );
};

export default App;
