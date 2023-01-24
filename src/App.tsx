import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Text } from "./components/Text";

const Emphasis = ({ children }: { children: string }) => {
  return <em style={{ background: "yellow" }}>{children}</em>;
};

function App() {
  return (
    <div className="App">
      <Text color="red" as={"h1"}>
        {" "}
        hi
      </Text>
      <Text color="blue" as={"h2"}>
        {" "}
        hi
      </Text>
      <Text color=""> hi</Text>
      <Text color=""> hi</Text>
      <Text color="" as={Emphasis}>
        hi
      </Text>
    </div>
  );
}

export default App;
