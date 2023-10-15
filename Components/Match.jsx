let match = props.currentMatch;

State.init({
  betAmount: "",
  team: "",
});

const props = {
  match: match,
  betAmount: state.betAmount,
  team: state.team,
};

const MatchBox = styled.div`
background: white;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
position: relative;
top:0.5rem;
text-align: center; /* Center the content horizontally */
background: #06050b;
border: 1px solid #ff1f1f;
border-radius: 10px;
padding: 1rem;
color: white;
width: 100%;
min-height: 12rem;
display: grid;
grid-template-columns: 40% 50%;
grid-template-rows: 2rem 2rem auto;
gap: 1rem;
`;

const BetSlip = styled.div`
grid-column: 1/3;
`;

const StyledInput = styled.input`
  background: transparent; 
  border: 1px solid #ff1f1f; 
  color: white; 
  padding: 8px; 
  border-radius: 10px;
  height: 2rem;
`;

const StyledSelect = styled.select`
  background: transparent; 
  border: 1px solid #ff1f1f; 
  color: #ff1f1f; 
  padding: 0.5rem; 
  border-radius: 10px;
  height: 2rem;
`;

return (
  <MatchBox>
    <label className="bet-text">Bet Amount</label>
    <StyledInput
      className="bet-input"
      type="text"
      required
      value={state.betAmount}
      onChange={(e) =>
        State.update({
          betAmount: e.target.value,
        })
      }
    />

    <label className="bet-text">Team</label>
    <StyledSelect
      className="bet-select"
      value={state.team}
      onChange={(e) =>
        State.update({
          team: e.target.value,
        })
      }
    >
      <option value={""}>Select Team</option>
      <option value={match[1]}>{match[1]}</option>
      <option value={match[3]}>{match[3]}</option>
    </StyledSelect>

    <BetSlip>
      <Widget
        className="bet-slip"
        src={`vex-hackathon.testnet/widget/BetSlip`}
        props={props}
      />
    </BetSlip>
  </MatchBox>
);
