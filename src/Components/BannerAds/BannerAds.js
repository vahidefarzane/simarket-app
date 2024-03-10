import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Loading from "../Loading/Loading";
import { useEffect, useState, Suspense } from "react";
import { httpService } from "../../hooks/useAxios";

export default function BannerAds() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    const response = await httpService.get("/bannerimages");
    setData(response.status === 200 ? response.data : []);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        [theme.breakpoints.down("sm")]: {
          margin: "0 2rem",
        },
        [theme.breakpoints.between("sm", "md")]: {
          margin: "0 1.5rem",
        },
        [theme.breakpoints.up("md")]: {
          margin: "0 0.7rem",
        },
      })}
    >
      <Suspense fallback={<Loading />}>
        {data?.map((bannerImg) => (
          <Link to={bannerImg.to} key={bannerImg.id}>
            <Box
              sx={(theme) => ({
                [theme.breakpoints.up("md")]: {
                  width: "19rem",
                },
                [theme.breakpoints.between("sm", "md")]: {
                  width: "13rem",
                },

                [theme.breakpoints.down("sm")]: {
                  width: "10rem",
                },
              })}
              component="img"
              src={bannerImg.src}
            />
          </Link>
        ))}
      </Suspense>
    </Box>
  );
}
