const BannerBg =
  "https://aquamarine-official-jay-421.mypinata.cloud/ipfs/QmP9WkFCfYPy4LxyReTrHMaH45im1avLXjhCk9M25iXMns";

const Hero = styled.div`
border: 0;
box-sizing: border-box;
margin: 0;
background: black;
background-image: url(${BannerBg});
background-size: cover;
background-position: right;
width: 100%;
min-height: 80vh;
display: flex;
flex-direction:column;
justify-content: center;
align-items: left;
padding: 1.5rem;
gap: 0.5rem;
`;

const Buttons = styled.div`
display: flex;
justify-content: left;
align-items: center;
gap: 0.5rem;
`;

const heroTitle = { text: "VEX Esports" };
const heroSubtitle = { text: "Esports betting for gamers, by gamers." };

return (
  <Hero>
    <Widget src="vex-hackathon.testnet/widget/VexTitle" props={heroTitle} />
    <Widget
      src="vex-hackathon.testnet/widget/VexSubtitle"
      props={heroSubtitle}
    />

    <Buttons>
      <a href="https://twitter.com/betvex" className="btn bg-dark text-light">
        <i class="ph-fill ph-twitter-logo"></i>
        Twitter
      </a>

      <a
        href="https://test.near.org/vex-hackathon.testnet/widget/VexBet"
        className="btn bg-dark text-light"
      >
        Place your bets
      </a>
    </Buttons>
  </Hero>
);
