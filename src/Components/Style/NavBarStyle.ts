import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  navBar: {
    marginBottom: "25px !important",
    "& a.active": {
      background: "#282A3A",
      color: "white",
    },
  },
  nav: {
    textDecoration: "none",
    color: "black",
    background: "#BAD1C2",
    padding: "10px",

  },
});

export default useStyle;