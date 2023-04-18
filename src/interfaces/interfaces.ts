export interface ScoreType {
      homeTeam: string;
      homeTeamScore: number;
      awayTeam: string;
      awayTeamScore: number;
      startedTime: number;
      id: string;
}

export interface ScoreBoardType {
    scoreBoard?: ScoreType[];
  }
