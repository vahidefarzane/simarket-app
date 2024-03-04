import React from "react";
import { Stack, Box } from "@mui/material";
import HomeTitleComponent from "../HomeTitleComponent/HomeTitleComponent";
import "./Categories.css";
import useAxios from "../../hooks/useAxios";
import Loading from "../Loading/Loading";
import { useEffect } from "react";

export default function Categories() {
  const [data, error, loading,axiosFetch] = useAxios();
  const getData = () => {
    axiosFetch({
      method: "GET",
      url: "/categories",
    });
  };
  useEffect(() => {
    getData();
  }, []);
   


  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        marginTop: "2rem",
      }}
    >
      <HomeTitleComponent title="دسته بندی ها" />
      <Box
        sx={(theme) => ({
          display: "flex",
          justifyContent: "space-between",
          padding: "1.5rem 0",
          [theme.breakpoints.down("md")]: {
            margin: "0.7rem",
            padding: "1rem",
          },
          [theme.breakpoints.down("sm")]: {
            flexWrap: "wrap",
            margin: "0.5rem",
            padding: "0.2rem",
          },
        })}
      >
        {loading ? (
          <Loading />
        ) : (
          data.map((category) => (
            <Box
              key={category.id}
              sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "23%",
                borderRadius: "3rem",
                padding: "1.5rem",
                margin: "1rem",
                color: "black",
                border: "2px solid #e2e2e2",
                transition: "border 1s",
                "&:hover": {
                  border: " 2px solid var(--main)",
                },
                [theme.breakpoints.down("md")]: {
                  margin: "0.1rem",
                  padding: "0.6rem",
                  borderRadius: "1.2rem",
                },
                [theme.breakpoints.down("sm")]: {
                  width: "48%",
                  margin: "0.1rem",
                  padding: "0.5rem",
                  borderRadius: "1.3rem",
                },
              })}
            >
              <Box
                component="img"
                src={category.image}
                sx={(theme) => ({
                  width: "6rem",
                  [theme.breakpoints.between("sm", "md")]: {
                    width: "4rem",
                  },
                  [theme.breakpoints.down("sm")]: {
                    width: "4rem",
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  },
                })}
              />
              <Stack
                sx={(theme) => ({
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  marginTop: " 1rem",
                  [theme.breakpoints.between("sm", "md")]: {
                    fontSize: "0.8rem",
                    marginTop: "1rem",
                  },
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "0.8rem",
                    marginTop: "0",
                  },
                })}
              >
                {category.name}
              </Stack>
            </Box>
          ))
        )}
      </Box>
    </Stack>
  );
}
