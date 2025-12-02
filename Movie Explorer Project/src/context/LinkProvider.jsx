import { LinkContext } from "./LinkContext";

export default function LinkProvider({ children }) {
  const links = {
    link1: "https://moviesdrive.pics/",
    link2: "https://prmovies.sale/",
  };
  return <LinkContext.Provider value={links}>{children}</LinkContext.Provider>;
}
