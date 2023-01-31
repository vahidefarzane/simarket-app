import {
  Stack,
  Box,
  Typography,
  FormGroup,
} from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import MyButton from "../MyButton/MyButton";
import Logo from "../../logo.png";
import FormInput from "../FormInput/FormInput";

const useStyles = makeStyles((theme) => ({}));

const ContainerImage = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
    width: "55%",
    justifyContent: "center",
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: {
            lg: "75%",
            md: "94%",
            sm:'50%',
            xs:'70%'
          },
          justifyContent: "center",
          margin: {
            md:'2rem 0',
            xs:'1rem 0'

          },
          boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
          padding: {
            md:'2rem 1.5rem',
            xs:'1.5rem 1rem'
          },
          borderRadius: "1rem",
        }}
      >
        <Box
          sx={{
            width: {
              md:'45%',
              xs:'100%'
            },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FormGroup sx={{ width: "85%" }}>
            <Box sx={{ margin: "auto", marginBottom: "2rem" }}>
              <Box
                component="img"
                sx={{
                  width: 130,
                }}
                alt="Your logo"
                src={Logo}
              ></Box>
            </Box>

            <FormInput lable="نام کاربری" type="text"></FormInput>
            <FormInput lable="گذرواژه" type="password"></FormInput>
            <MyButton padding="0.7rem 0" margintop="1.5rem">
              ورود
            </MyButton>
            <Typography sx={{ fontSize: "0.8rem", marginTop: "2rem" }}>
              رمز عبور خود را فراموش کردید؟
              <Link
                to="/register"
                style={{
                  paddingRight: "0.3rem",
                  fontWeight: "bold",
                  color: "blue",
                }}
              >
                بازیابی رمز عبور
              </Link>
            </Typography>
            <Typography sx={{ fontSize: "0.8rem", marginTop: "0.5rem" }}>
              قبلا ثبت نام نکردید؟
              <Link
                to="/register"
                style={{
                  paddingRight: "0.3rem",
                  fontWeight: "bold",
                  color: "blue",
                }}
              >
                ثبت نام
              </Link>
            </Typography>
            
          </FormGroup>
        </Box>

        <ContainerImage>
          <Box
            sx={{ width: "85%", height: "27rem" }}
            component="img"
            alt="Your logo"
            src="./images/login.png"
          ></Box>
        </ContainerImage>
      </Box>
    </Stack>
  );
}
