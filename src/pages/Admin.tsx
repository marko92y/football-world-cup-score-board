import React, { FC } from "react";
import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import * as yup from "yup";
import AddGame from "components/admin/AddGame";
import EditBoard from "components/admin/EditBoard";
import { Container } from "@mui/material";
const validationSchema = yup.object({
  homeTeam: yup.string().required("Enter Home Team"),
  awayTeam: yup.string().required("Enter Away Team"),
});

const ScoreBoard: FC = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        m: 3,
        justifyContent: "center",
      }}
    >
      <AddGame />
      <EditBoard />
    </Container>
  );
};

export default ScoreBoard;
