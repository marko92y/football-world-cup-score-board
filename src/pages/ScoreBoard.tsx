import { useAppSelector } from "hooks/hooks";
import { selectScoreBoard } from "store/ScoreBoardSlice";
import { ScoreType } from "../interfaces/interfaces";
import styles from "./ScoreBoard.module.scss";
import NavBar from "components/NavBar";
import Canvas from "components/Canvas";

function scoreSort(a: ScoreType, b: ScoreType) {
  const scoreSumA = a.homeTeamScore + a.awayTeamScore;
  const scoreSumB = b.homeTeamScore + b.awayTeamScore;

  if (scoreSumA > scoreSumB) {
    return -1;
  }

  if (scoreSumA < scoreSumB) {
    return 1;
  } else return 0;
}

const FootballWorldCupScoreBoard = () => {
  const games = useAppSelector(selectScoreBoard);
  const sortedGames = games && [...games].sort(scoreSort);

  return (
    <>
      <div className={styles.scoreBoardContainer}>
        <div className={styles.scoreBoardCard}>
          {games?.length ? (
            sortedGames?.map((game) => (
              <>
                <p className={styles.teams}>
                  {game.homeTeam} - {game.awayTeam} {game.homeTeamScore} -{" "}
                  {game.awayTeamScore}
                </p>
              </>
            ))
          ) : (
            <p>There are no games</p>
          )}
        </div>
      </div>
    </>
  );
};

export default FootballWorldCupScoreBoard;
