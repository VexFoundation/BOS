const match = props.match;
const betAmount = props.betAmount;
const team = props.team;

const terra = Math.pow(10, 12);

const expandToken = (value, decimals) => {
  return new Big(value).mul(new Big(10).pow(decimals));
};

const view_contract = "dev-1689512846991-59182931023942";
const call_contract = "cusd.fakes.testnet";

const potentialWinnings = Near.view(view_contract, "view_potential_winnings", {
  match_id: match[0],
  team: team,
  bet_amount: betAmount,
});

const handleClick = () => {
  let args = {
    receiver_id: "dev-1689512846991-59182931023942",
    amount: expandToken(betAmount, 24).toFixed(),
    msg: match[0] + " " + team,
  };
  Near.call(call_contract, "ft_transfer_call", args, 300 * terra, 1);
};

return (
  <div>
    <h1>Bet Slip</h1>
    <p>
      Match: {match[1]} vs {match[3]}
    </p>
    <p>Date: {match[0].slice(-10)}</p>
    <p>Bet Amount: {betAmount}</p>
    <p>
      Odds:
      {potentialWinnings !== null &&
        potentialWinnings !== undefined &&
        Math.round((potentialWinnings * 100) / betAmount) / 100}
      Ⓝ
    </p>
    <p>
      Potential Winnings:
      {potentialWinnings !== null &&
        potentialWinnings !== undefined &&
        Math.round(potentialWinnings * 100) / 100}
      Ⓝ
    </p>

    <button
      onClick={() => handleClick()}
      disabled={potentialWinnings == null || potentialWinnings == undefined}
    >
      Place Bet
    </button>
  </div>
);

