import * as Yup from "yup";

export const Validation = Yup.object({
  homeTeam: Yup.string().required("Enter Home Team"),
  awayTeam: Yup.string().required("Enter Away Team"),
});
