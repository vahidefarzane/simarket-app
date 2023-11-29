import {
  Drawer,
  Badge,
  Box,
  Button,
  AppBar,
  List,
  BottomNavigationAction,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const DrawerStyled = styled(Drawer)(({ theme }) => ({
  height:"100vh",
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
