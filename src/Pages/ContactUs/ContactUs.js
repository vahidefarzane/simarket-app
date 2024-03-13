import { Stack, Box, Typography } from "@mui/material";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <Stack sx={{ padding: "2rem 4rem" }}>
      <Typography
        component={"p"}
        sx={{ marginBottom: "1rem", lineHeight: "2rem" }}
      >
        سلام خدمت شما کاربر گرامی،
        <br />
        برای ارتباط با مدیریت می‌توانید از پل های ارتباطی زیر استفاده نموده و یا
        از طریق فرم مقابل اقدام فرمایید:
      </Typography>
      <Typography>آدرس ایمیل: vahidefarzane@gmail.com</Typography>
      <Typography>شماره تلفن تماس: 0915000000</Typography>
      <Typography
        component={"h3"}
        sx={{ marginTop: "1rem", lineHeight: "2rem" }}
      >
        <Typography component={"strong"}>ساعات کاری:</Typography>
      </Typography>
      <Typography component={"p"} sx={{ fontSize: "0.9rem" }}>
        شنبه تا چهارشنبه 8 صبح تا 18 عصر؛ پنج شنبه‌ها ساعت 8 صبح تا 12 ظهر
      </Typography>
    </Stack>
  );
}
