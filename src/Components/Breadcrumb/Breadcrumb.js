import { Grid, Breadcrumbs, Typography, Container } from "@mui/material";
import { AiOutlineLeft } from "react-icons/ai";

export default function Breadcrumb() {
  return (
    <Container>
      <Grid
        container
        direction="row"
        sx={{
          padding: {
            md: "1rem",
            sm: "0.8rem",
            xs: "0.7rem",
          },
          marginTop: "1rem",
          fontSize: {
            md: "0.9rem",
            sm: "0.7rem",
            xs: "0.6rem",
          },
        }}
      >
        <Breadcrumbs aria-label="breadcrumb" separator={<AiOutlineLeft />}>
          {["صفحه اصلی", "محصولات", "کاپشن اسپرت"].map((name) => (
            <Typography
              color="text.primary"
              sx={{
                fontSize: {
                  md: "0.9rem",
                  sm: "0.7rem",
                  xs: "0.6rem",
                },
              }}
            >
              {name}
            </Typography>
          ))}
        </Breadcrumbs>
      </Grid>
    </Container>
  );
}
