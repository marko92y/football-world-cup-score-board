import React, { FC } from "react";
import AddGame from "components/admin/AddGame";
import EditBoard from "components/admin/EditBoard";
import { Container, Card } from "@mui/material";
import NavBar from "components/NavBar";

const ScoreBoard: FC = () => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          pt: 18,
          justifyContent: "space-between",
        }}
      >
        <Card>
          <AddGame />
        </Card>

        <EditBoard />
      </Container>
    </>
  );
};

export default ScoreBoard;
