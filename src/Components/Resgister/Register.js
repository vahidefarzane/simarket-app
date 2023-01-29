import { TextField, Stack, FormControl, Box, Typography } from "@mui/material";
import {Link} from 'react-router-dom'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import MyButton from '../MyButton/MyButton'
import Logo from "../../logo.png";

const useStyles = makeStyles((theme) => ({}));
const TextFieldStyled = styled(TextField)(({ theme }) => ({
  marginBottom: "1rem",
  fontSize:'0.9rem'
}));
export default function Register(params) {
  const classesStyles = useStyles();

  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <FormControl
        sx={{
          width: {
            lg: "30%",
            md: "35%",
            sm: "45%",
            xs: "80%",
          },
          backgroundColor: "#fff",
          padding: "3rem 2rem",
          marginTop: "2rem",
          boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
          borderRadius: "0.7rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom:'1.5rem',
          }}
        >
          <Box
            component="img"
            sx={{
              width: 150,
            }}
            alt="Your logo"
            src={Logo}
          ></Box>
        </Box>
          <Typography sx={{fontSize:'1.1rem',fontWeight:'600',marginBottom:'1.5rem'}}>ثبت نام </Typography>
        <TextFieldStyled
          
          id="outlined-username-input"
          label="نام کاربری"
          variant="outlined"
          type="text"
          placeholder="نام کاربری خود را وارد کنید"
        />
        <TextFieldStyled
          
          id="outlined-username-input"
          label="ایمیل"
          variant="outlined"
          type="email"
          placeholder=" ایمیل خود را وارد کنید"
        />
        <TextFieldStyled
          id="outlined-password-input"
          label="گذرواژه"
          variant="outlined"
          type="password"
          placeholder="گذرواژه خود را وارد کنید"
        />
        <MyButton padding='0.7rem 0'>ثبت نام</MyButton>
        <Typography sx={{fontSize:"0.9rem",marginTop:'1rem'}}>
            قبلا ثبت نام کردید؟ 
        <Link to='/login' style={{paddingRight:'0.3rem',fontWeight:'bold',color:'blue'}}> ورود</Link>

        </Typography>
      </FormControl>
    </Stack>
  );
}
