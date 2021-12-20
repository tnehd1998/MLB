import React from "react";
import { useParams } from "react-router";

const TestPage = () => {
  const { teamName } = useParams();
  return <h1>{teamName}</h1>;
};

export default TestPage;
