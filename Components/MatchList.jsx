const contract = "dev-1689512846991-59182931023942";
const matches = Near.view(contract, "view_future_matches", {
  match_id: "all",
});
State.init({
  matchSelected: false,
  currentMatch: "",
});

const isSignedIn = context.accountId;
const props = { currentMatch: state.currentMatch };

const handleClick = (match) => {
  State.update({
    matchSelected: true,
    currentMatch: match,
  });
};

const returnButton = () => {
  State.update({
    matchSelected: false,
    currentMatch: "",
  });
};

const MatchPage = styled.div`
background-color: #06050b;
padding: 3rem 1rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 2rem;
`;

const MatchList = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 1rem;


${(props) =>
  props.grid &&
  css`
      @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
      }
    `}
`;

const matchesTitle = { text: "Matches" };

const MatchCard = styled.button`
border: 1px solid #ff1f1f;
border-radius: 10px;
padding: 1rem;
background: #06050b;
cursor: pointer;
color: white;
width: 24rem;
height: 12rem;
display: grid;
grid-template-columns: 70% 30%;

transition: transform 0.2s, background-color 0.2s;
 
  &:hover {
    transform: translateY(-5px);
    background-color: red; /* Change the background color on hover */
 
    h3 {
    color: black;
  }
  }
`;

const MatchName = styled.h3`
color: #ff1f1f;
font-size: 2rem;
`;

const MatchOdds = styled.div`
color: white;
font-size: 1.5rem;
grid-column: 1/3;
`;

const MatchOverlay = styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center; /* Horizontally center the popup */
  z-index: 999;
`;

const BetCard = styled.div`
width: 80%;
display: flex;
flex-direction: column;
justify-content: left;
`;

const IconReturnUrl =
  "https://aquamarine-official-jay-421.mypinata.cloud/ipfs/QmQyFYbhk4YssMSJg5mU23bm1KyhyaQg9CQGWZnNz5B8xT";

const ReturnIcon = styled.img`
width: 3rem;
cursor: pointer;
color: #ff1f1f;
`;

return (
  <MatchPage>
    <Widget src="vex-hackathon.testnet/widget/VexTitle" props={matchesTitle} />

    <MatchList>
      {matches.map((match) => (
        <MatchCard
          key={match[0]}
          onClick={(e) => handleClick(match)}
          disabled={!isSignedIn}
        >
          <MatchName>
            {match[1]} vs {match[3]}
          </MatchName>
          <p className="match-date text-right">{match[0].slice(-10)}</p>
          <MatchOdds>
            {match[2]} to {match[4]}
          </MatchOdds>
        </MatchCard>
      ))}
    </MatchList>

    {state.matchSelected && (
      <MatchOverlay>
        <BetCard>
          <ReturnIcon src={IconReturnUrl} onClick={returnButton} />
          <Widget
            className="bet-form"
            src={`vex-hackathon.testnet/widget/Match`}
            props={props}
          />
        </BetCard>
      </MatchOverlay>
    )}
  </MatchPage>
);
