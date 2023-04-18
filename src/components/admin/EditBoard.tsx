import React, { FC } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
} from "@mui/material";
import { useAppSelector, useAppDispatch } from "hooks/hooks";
import {
  selectScoreBoard,
  homeTeamScored,
  awayTeamScored,
  deleteGame,
} from "store/ScoreBoardSlice";

const EditBoard: FC = () => {
  const dispatch = useAppDispatch();
  const games = useAppSelector(selectScoreBoard);

  return (
    <TableContainer
      sx={{ minWidth: 250, maxWidth: 600, aling: "center" }}
      component={Paper}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Home Team</TableCell>
            <TableCell align="left">Away Team</TableCell>
            <TableCell align="left">Score</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {games?.map((game, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">
                {game.homeTeam}
                <Button
                  color="success"
                  onClick={() => dispatch(homeTeamScored({ id: game.id }))}
                >
                  +1
                </Button>
              </TableCell>
              <TableCell align="left">
                {game.awayTeam}
                <Button
                  color="success"
                  onClick={() => dispatch(awayTeamScored({ id: game.id }))}
                >
                  +1
                </Button>
              </TableCell>
              <TableCell align="left">
                {game.homeTeamScore} - {game.awayTeamScore}
              </TableCell>
              <TableCell align="left">
                <Button
                  color="error"
                  onClick={() => dispatch(deleteGame({ id: game.id }))}
                >
                  Finish The Game
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EditBoard;
