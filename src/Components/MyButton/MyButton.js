import { Button } from "@mui/material";

export default function MyButton(props) {
  return (
    <Button
      href={props.href}
      variant="contained"
      startIcon={props.startIcon}
      endIcon={props.endIcon}
      onClick={props.onClick}
      type={props.type}
      sx={{
        display: props.display,
        width: {
          md: props.widthupmd,
          sm: props.widthbetweenmdsm,
          xs: props.widthdownsm,
        },
        backgroundImage: "linear-gradient(to right, #fb4208, #ff6a00)",
        padding: props.padding,
        fontWeight: "600",
        marginLeft: {
          md: props.marginleft,
        },
        borderRadius: props.borderradius,
        marginTop: props.margintop,
        fontSize: {
          md: props.fontsizeupmd,
          xs: props.fontsizedownmd,
        },
        marginBottom: props.marginBottom,
      }}
    >
      {props.children}
    </Button>
  );
}
