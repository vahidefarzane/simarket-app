import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Loading from "../Loading/Loading";

export default function BannerAds() {
  const { response: bannerImgs, loading } = useAxios({
    url: "/bannerimages",
    method: "get",
  });

  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        justifyContent: "space-between",
        margin: "0 0.7rem",
        flexWrap: "wrap",
        [theme.breakpoints.between("xs")]: {
          justifyContent: "center",
        },
      })}
    >
      {loading ? (
        <Loading />
      ) : (
        bannerImgs?.map((bannerImg) => (
          <Link to={bannerImg.to} key={bannerImg.id}>
            <Box
              sx={(theme) => ({
                [theme.breakpoints.between("sm", "md")]: {
                  width: "13rem",
                },
                [theme.breakpoints.up("md")]: {
                  width: "17rem",
                },
                [theme.breakpoints.down("sm")]: {
                  width: "7.5rem",
                },
              })}
              component="img"
              src={bannerImg.src}
            />
          </Link>
        ))
      )}
    </Box>
  );
}
