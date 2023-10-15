const match = props.match;
const betAmount = props.betAmount;
const team = props.team;

const yotta = Math.pow(10, 24);
const terra = Math.pow(10, 12);

const contract = "dev-1689512846991-59182931023942";
const potentialWinnings = Near.view(contract, "view_potential_winnings", {
  match_id: match[0],
  team: team,
  bet_amount: betAmount,
});

const handleClick = () => {
  Near.call(
    contract,
    "make_bet",
    { match_id: match[0], decision: team },
    100 * terra,
    betAmount * yotta
  );
};

const BetSlip = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: left;
padding: 2rem;
`;

const PlaceBetButton = styled.div`
display: flex;
justify-content: right;
grid-column: 1/3;
`;

const BetGrid = styled.div`
display: grid;
grid-template-columns: 50% 50%;
`;

const Labels = styled.span`
color: color: #ff1f1f;
`;

return (
  <BetSlip>
    <h1>Bet Slip</h1>
    <BetGrid>
      <Labels>Match: </Labels>
      {match[1]} vs {match[3]}
      <Labels>Date: </Labels>
      {match[0].slice(-10)}
      <Labels>Bet Amount: </Labels>
      {betAmount ? betAmount : "0"}
      <Labels>Odds:</Labels>
      {potentialWinnings !== null &&
        potentialWinnings !== undefined &&
        Math.round((potentialWinnings * 100) / betAmount) / 100}
      Ⓝ<Labels>Potential Winnings:</Labels>
      {potentialWinnings !== null &&
        potentialWinnings !== undefined &&
        Math.round(potentialWinnings * 100) / 100}
      Ⓝ
    </BetGrid>
    <PlaceBetButton>
      <button
        className="btn btn-danger"
        onClick={() => handleClick()}
        disabled={potentialWinnings == null || potentialWinnings == undefined}
      >
        Place Bet
      </button>
    </PlaceBetButton>
  </BetSlip>
);
