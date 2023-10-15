const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #06050b;
gap: 2rem;
padding-bottom: 3rem;
`;

const IconItem = styled.div`
display: flex;
flex-direction: row;
gap: 1rem;
width: 80%;
min-height: 16rem;
`;

const ItemCard = styled.div`
background-color: transparent;
width: 50%;
display: flex;
flex-direction: column;
padding: 2rem;
justify-content: center;
align-items: center;
color: #f44336;
border-radius: 10px;
box-shadow: 5px 5px 10px 10px black;
`;

const ItemDescription = styled.p`
color: white

`;

const ItemIcon = styled.img`
  width: 6rem;
  color: red;
`;

/* Icon images */
const IconCommunity =
  "https://aquamarine-official-jay-421.mypinata.cloud/ipfs/QmcCxSkVaWgTTsh42T7h8XKJ5uPE5LXqcmMHLrbKqDkDb8";
const IconFees =
  "https://aquamarine-official-jay-421.mypinata.cloud/ipfs/Qma5ydWePSEkDuUdWGiS9kEFHjZyZsEBtMVAPfmHqH1FaK";
const IconChart =
  "https://aquamarine-official-jay-421.mypinata.cloud/ipfs/QmY3C4jiUP3yEcH9X5TU5RR1JySMVzWWLeXLhhkY227Hv1";

const vexDescriptions = [
  {
    icon: IconCommunity,
    title: "Engaged Community",
    description:
      "Vex will leverage a DAO structure to attain an unrivaled level of social governance. Users will be able to level up their betting experience through proposing and voting changes.",
  },
  {
    icon: IconFees,
    title: "Easy Onboarding",
    description:
      "Vex will have gasless betting via meta-transacions, bets will be made in USDC and account creation will be easy through Keypom.",
  },
  {
    icon: IconChart,
    title: "High Potential",
    description:
      "With 231 million potential betters online, VEX would achieve 101 million of revenue with only 1% of market share. This will then be redistributed to VEX stakers.",
  },
];

return (
  <Main>
    <Widget src="vex-hackathon.testnet/widget/VexHero" />

    {vexDescriptions.map((item) => (
      <IconItem key={item.key}>
        <ItemCard>
          <ItemIcon src={item.icon} />
        </ItemCard>

        <ItemCard>
          <h3>{item.title}</h3>
          <ItemDescription>{item.description}</ItemDescription>
        </ItemCard>
      </IconItem>
    ))}
  </Main>
);
