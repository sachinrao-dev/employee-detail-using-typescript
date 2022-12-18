import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  allUser: {
    textAlign: "left",
  },
  bar: {
    width: "25% !important",
    marginBottom: "25px !important",
  },
  navBar: {
    textAlign: "right",
    display: "block",
    background: "#BAD1C2",
    padding: "10px",
    textDecoration: "none",
    color: "black",
    "& a": {
      color: "white",
      background: "#282A3A",
      textDecoration: "none",
    },
  },
  navLink: {
    display: "flex",
  },
  tableContainer: {
    marginTop: "30px",
    "& div": {
      width: "70%",
      margin: "0 auto",
      "& table": {
        "& tbody": {
          background: "#BAD1C2",
          "& td": {
            textAlign: "center",
            "& a": {
              textDecoration: "none",
              cursor: "pointer",
            },
          },
        },
        "& thead": {
          "& th": {
            textAlign: "center",
            color: "white",
            background: "#282A3A",
            fontSize: "1em",
            fontWeight: "700",
            padding: "7px",
          },
        },
      },
    },
  },
});

export default useStyle;
