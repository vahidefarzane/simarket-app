import {
  Drawer,
  Badge,
  Box,
  Button,
  AppBar,
  List,
  BottomNavigationAction,
  Typography,
  TextField,
  LinearProgress,
  linearProgressClasses,
  InputBase,
} from "@mui/material";
import { styled } from "@mui/material/styles";

//navbar styles
export const DrawerStyled = styled(Drawer)(({ theme }) => ({
  height: "100vh",
  [theme.breakpoints.down("sm")]: {
    borderRadius: 0,
    padding: "1.5rem",
  },
}));
export const BadgeStyled = styled(Badge)(({ theme }) => ({
  color: "#000",
  "& .MuiBadge-badge": {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
  },
}));
export const ModalStyled = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  [theme.breakpoints.down("sm")]: {
    with: "100%",
    height: "100vh",
    borderRadius: 0,
    padding: "1.5rem",
  },
  [theme.breakpoints.up("sm")]: {
    padding: "2rem",
    borderRadius: "0.6rem",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "34rem",
  },
  [theme.breakpoints.down("xs")]: {
    padding: "1rem 0.5rem",
  },
}));
export const LocationStyled = styled(Button)(() => ({
  borderRadius: "0.7rem",
  cursor: "pointer",
  border: "1px solid #e2e2e2",
  height: "3rem",
}));
export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "white",
  color: "#212121",
  height: "7rem",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
    paddingTop: "0.3rem",
  },
}));
export const StyledList = styled(List)(() => ({
  padding: 0,
  margin: "0 1rem 0 1rem",
  display: "flex",
  fontSize: "0.8rem",
  height: "4.5rem",
}));
export const NavContainer = styled(Box)(({ theme }) => ({
  padding: "0.8rem 0.7rem ",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
  },
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));
export const BottomNavigationActionStyled = styled(BottomNavigationAction)(
  ({ theme }) => ({
    "&.Mui-selected": {
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.down("sm")]: {},
  })
);
export const MenuBarStyled = styled(Drawer)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

// Footer style
export const BtnFooter = styled(Button)(({ theme }) => ({
  backgroundColor: "transparent",
  border: " 1px solid #a1a3a8",
  borderRadius: "0.6rem",
  color: "#a1a3a8",
  [theme.breakpoints.down("md")]: {
    padding: "0.5rem 0.5rem 0.5rem 0.2rem",
    maxHeight: "2.9rem",
  },
  [theme.breakpoints.up("md")]: {
    padding: "1.5rem 1.5rem 1.5rem 1.2rem",
    maxHeight: "3.1rem",
  },
}));
export const NumberBox = styled(Typography)(({ theme }) => ({
  fontSize: "0.85rem",
}));
export const TextFieldStyled = styled(TextField)(({ theme }) => ({
  borderRadius: "0.6rem",
  fontSize: "0.3rem",
  marginLeft: "0.7rem",
  background: "#e3e3e6",
  color: "#81858b",
  [theme.breakpoints.down("md")]: {
    width: " 70%",
  },
  [theme.breakpoints.up("md")]: {
    width: " 100%",
  },
}));

// Header style

export const ImageBannerStyled = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
    flexDirection: "column",
    width: "33%",
    justifyContent: "space-between",
  },
}));

//order Received

export const BoxFullWidth = styled(Box)(({ theme }) => ({
  width: "100%",
  border: "1px solid #E3E3E3",
  padding: "1.5rem",
  borderRadius: "0.8rem",
  margin: "1rem 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

//product progress infos

export const LinearProgressStyled = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 5,
  display: "flex",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#ebebeb",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#ff6a00",
  },
}));

// Search

export const Search = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  borderRadius: "0.7rem",
  color: "#212121",
  backgroundColor: "transparent",
  border: "1px solid #e2e2e2",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    padding: "0",
    height: "2.5rem",
  },
  [theme.breakpoints.up("md")]: {
    margin: "0 2rem 0 1rem",
    width: "87%",
    padding: "0.15rem",
    fontSize: "0.9rem",
    height: "3rem",
  },
}));
export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  padding: "0.2rem 1rem 0.2rem 0.2rem",
  width: "100%",
  fontSize: "1rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "0.9rem",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem",
  },
}));

export const SearchListBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  border: "1px solid #e2e2e2",
  borderRadius: "0.6rem",
  width: "38%",
  height: "21.5rem",
  zIndex: "100",
  background: "#fff",
  top: "4rem",
  right: "11.5rem",
  padding: "1rem",
  overflowY: "auto",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    right: "0",
    top: "7rem",
    padding: "0.5rem 0.6rem",
  },
}));


export const HotBtn = styled(Button)(({ theme }) => ({
  border: "1px solid #e2e2e2",
  borderRadius: "1.5rem",
  background: "transparent",
  marginLeft: "0.5rem",
  color: "#000",
  padding:'0.5rem 0.2rem',
  "&:hover": {
    background: "#ff6a00",
    color:'#fff',
    border:'1px solid #ff6a00'
  },
}));