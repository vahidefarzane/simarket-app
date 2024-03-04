import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Loading from "../Loading/Loading";
import { useEffect } from "react";


export default function BannerAds() {
  const [data, error, loading, axiosFetch] = useAxios();
  const getData = () => {
    axiosFetch({
      method: "GET",
      url: "/bannerimages",
    });
  };
  useEffect(() => {
    getData();
  }, []);
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
        data?.map((bannerImg) => (
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
