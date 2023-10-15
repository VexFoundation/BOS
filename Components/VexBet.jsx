const App = () => {
  State.init({
    activeContent: "Content3",
  });

  const styles = {
    bannerText: {
      fontSize: "24px",

      fontWeight: "bold",
    },

    navbar: {
      backgroundColor: "#06050b",

      display: "flex",

      justifyContent: "space-between",

      padding: "40px",

      alignItems: "center",
      marginDown: "50px",
    },

    logo: {
      fontSize: "24px",

      fontWeight: "bold",

      color: "red",
    },

    hidden: {
      display: "none",
    },

    button: {
      backgroundColor: "red",

      border: "none",

      padding: "8px 16px",

      margin: "0 10px",

      cursor: "pointer",

      color: "white",
    },
    buttonHover: {
      backgroundColor: "#06050b",
    },

    footer: {
      backgroundColor: "#06050b",

      padding: "20px",

      textAlign: "center",
      color: "white",
    },
    logo: {
      height: "48px",
      width: "112px",
      marginLeft: "20px",
    },
  };

  const user = "vex-hackathon.testnet";

  const Content1 = () => (
    <div>
      <Widget src={`${user}/widget/VexHomepage`} />
    </div>
  );

  const Content2 = () => (
    <div>
      <Widget src={`${user}/widget/VexAboutUs`} />
    </div>
  );

  const Content3 = () => (
    <div>
      <Widget src={`${user}/widget/MatchList`} />
    </div>
  );
  const contentComponents = {
    Content1: <Content1 />,
    Content2: <Content2 />,
    Content3: <Content3 />,
  };

  const handleButtonClick = () => {
    State.update({
      activeContent: "Content1",
    });
  };

  const handleButton2Click = () => {
    State.update({
      activeContent: "Content2",
    });
  };

  const LogoUrl =
    "https://aquamarine-official-jay-421.mypinata.cloud/ipfs/QmWNrv3KSZZk1rNcPu1DooTZVPWtLW9kxrhnzACsZavVfN";

  const Img = styled.img`
  width: 20rem;
`;

  const handleButton3Click = () => {
    State.update({
      activeContent: "Content3",
    });
  };

  function Footer() {
    return (
      <div style={styles.footer}>
        <div style={styles.footer}>
          <div>&copy; {new Date().getFullYear()} vexesports.com</div>
          <div>Email: info@vexesports.com</div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div style={styles.navbar}>
        <Img style={styles.logo} src={LogoUrl}></Img>
        <div>
          <button
            style={
              state.activeContent === "Content1"
                ? { ...styles.button, ...styles.buttonHover }
                : styles.button
            }
            onClick={handleButtonClick}
          >
            Home
          </button>
          <button
            style={
              state.activeContent === "Content3"
                ? { ...styles.button, ...styles.buttonHover }
                : styles.button
            }
            onClick={handleButton3Click}
          >
            Bet
          </button>
          <button
            style={
              state.activeContent === "Content2"
                ? { ...styles.button, ...styles.buttonHover }
                : styles.button
            }
            onClick={handleButton2Click}
          >
            About
          </button>
        </div>
      </div>

      {contentComponents[state.activeContent] && (
        <div style={styles.content}>
          {contentComponents[state.activeContent]}
        </div>
      )}
      <div style={styles.hidden}></div>
      <Footer />
    </div>
  );
};

return <App />;
