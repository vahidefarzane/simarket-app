import { Button } from "@mui/material";

export default function MyButton(props) {
  
  return (
    <Button
      variant="contained"
      sx={{
        backgroundImage: "linear-gradient(to right, #fb4208, #ff6a00)",
        padding: props.padding,
        fontWeight: "600",
        marginLeft:{
          md:props.marginleft,
        },
        borderRadius:props.borderradius,
        marginTop:props.margintop,
        fontSize:props.fontsize,
        
      }}
    >
      {props.children}
    </Button>
  );
}
