const AboutUs = styled.div`
border: 0;
box-sizing: border-box;
margin: 0;
background-color: black;
color: white;
display: flex;
flex-direction: column;
justify-content: top;
align-items: center;
padding: 1.5rem;
gap: 0.5rem;
padding: 1rem;
width: 100%;
min-height: 100vh;
`;

const Title = styled.h1`
font-size: 4rem;
color: red;
font-weight: 800;
font-family: ${fontCss}, sans-serif;
`;

const TwitterLink = "https://twitter.com/betvex";

return (
  <AboutUs>
    <Title>About us</Title>

    <a
      class="twitter-follow-button"
      src="https://platform.twitter.com/widgets.js"
      href={TwitterLink}
      data-size="large"
    >
      Follow Us on Twitter
    </a>

    <div>
      <Widget
        src="components-mailchain.near/widget/MailchainWidget"
        props={{
          accountId: "vexesports.near",
        }}
      />
    </div>
  </AboutUs>
);
