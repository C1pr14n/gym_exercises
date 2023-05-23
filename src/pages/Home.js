import React, { useState } from "react";

import { Box } from "@mui/material";

import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
  // this states lies here bcuz changes here will be reflected all across the SearchExercises component and the Exercises one
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  // instead of passing these props all over our app we can also use ContextAPI

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;
