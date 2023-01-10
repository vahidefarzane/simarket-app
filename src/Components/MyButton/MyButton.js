import { Button } from "@mui/material";

export default function MyButton(props) {
  
  return (
    <Button
      variant="contained"
      sx={{
        backgroundImage: "linear-gradient(to right, #fb4208, #ff6a00)",
        padding: "0.6rem 1.7rem",
        fontWeight: "600",
        marginLeft:props.marginleft,
        borderRadius:props.borderradius,
        marginTop:props.margintop,
      }}
    >
      {props.children}
    </Button>
  );
}
