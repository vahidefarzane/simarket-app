import { Box, Input, TextField, Typography } from "@mui/material";
import MyButton from "../MyButton/MyButton";

export default function NewsLetter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f2f2f2",
        padding:"2rem 0",
        width:'80%',
        borderRadius:"0.8rem",
        margin:"0 auto"

      }}
    >
      <Typography variant="h3" sx={{fontSize:"1.3rem",fontWeight:"bold",marginBottom:"1.5rem"}}>از آخرین تخفیف ها با خبر شوید!</Typography>
      <Typography variant="h4" sx={{fontSize:"0.9rem",marginBottom:"1.1rem"}}>
        برای عضویت در باشگاه مشتریان شوید ایمیل خود را وارد کنید
      </Typography>
      <Box sx={{ display: "flex" }}>
        <TextField type="email" placeholder="آدرس ایمیل خود را وارد کنید" />
        <MyButton borderradius="0.6rem">ثبت</MyButton>
      </Box>
    </Box>
  );
}
