if (state.theme === undefined) {
    const css = fetch(
      "https://ipfs.near.social/ipfs/bafkreickjanlocwi253a2qcqiep6dfh4pnvytiwdmi3jv4b7wylcu4nc3u"
    ).body;
    if (!css) return "";
  
    State.update({ theme: styled.div`${css}` });
  }
  const Theme = state.theme;
  return <div class="header">Hello World</div>;
  