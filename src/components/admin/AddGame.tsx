import React, { FC } from "react";
import { useFormik } from "formik";
import { Button, Container, TextField, Box } from "@mui/material";
import { Validation } from "./validation";
import { useAppDispatch } from "hooks/hooks";
import { addGameAdmin } from "store/ScoreBoardSlice";

const AddGame: FC = () => {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      homeTeam: "",
      awayTeam: "",
      homeTeamScore: 0,
      awayTeamScore: 0,
    },
    validationSchema: Validation,
    onSubmit: (values) => {
      dispatch(addGameAdmin(values));
      formik.resetForm();
    },
  });

  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="xs">
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            fullWidth
            name="homeTeam"
            label="Home Team"
            value={formik.values.homeTeam}
            onChange={formik.handleChange}
            error={formik.touched.homeTeam && Boolean(formik.errors.homeTeam)}
            helperText={formik.touched.homeTeam && formik.errors.homeTeam}
            autoComplete="off"
          />
          <TextField
            margin="normal"
            fullWidth
            name="awayTeam"
            label="Away Team"
            value={formik.values.awayTeam}
            onChange={formik.handleChange}
            error={formik.touched.awayTeam && Boolean(formik.errors.awayTeam)}
            helperText={formik.touched.awayTeam && formik.errors.awayTeam}
            autoComplete="off"
          />
          <Button sx={{ mt: 3, mb: 2 }} type={"submit"}>
            Add Game
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default AddGame;
