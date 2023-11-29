import {
  Modal,
  Box,
  Divider,
  List,
  ListItem,
  Stack,
  Typography,
  ListItemText,
  ListItemIcon,
  IconButton,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

import Loading from "../Loading/Loading";
import useAxios from "../../hooks/useAxios";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { ModalStyled, LocationStyled } from "../../Style/styles";
import "./NavBar.css";

export default function CitiesModal() {
  const { response: cities, loading: loadingCities } = useAxios({
    url: "/cities",
    method: "get",
  });

  const [openLocation, setOpenLocation] = useState(false);
  const handleOpenLocation = () => setOpenLocation(true);
  const handleCloselocation = () => setOpenLocation(false);

  const cityHandeler = (e) => {
    setOpenLocation(false);
    localStorage.setItem("yourLocation", `${e.target.innerText}`);
  };
  return (
    <>
      <Stack
        direction="row"
        sx={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "0.7rem",
          borderTop: "1px solid #e2e2e2",
          borderBottom: "1px solid #e2e2e2",
          display: { md: "none" },
        }}
      >
        <Stack
          direction="row"
          sx={{
            width: "100%",
            justifyContent: "start",
            alignItems: "center",
            margin: "0.2rem 0",
          }}
          onClick={handleOpenLocation}
        >
          <IconButton>
            <FmdGoodOutlinedIcon sx={{ color: "primary.main" }} />
          </IconButton>
          <Typography sx={{ fontSize: "0.7rem" }}>
            {localStorage.getItem("yourLocation") ||
              "مکان را جهت فیلتر محصولات انتخاب کنید"}
          </Typography>
        </Stack>
        <IconButton>
          <ChevronLeftIcon sx={{ color: "primary.main" }} />
        </IconButton>
      </Stack>
      <Stack
        sx={(theme) => ({
          [theme.breakpoints.up("md")]: {
            display: "block",
          },
          [theme.breakpoints.down("md")]: {
            display: "none",
          },
        })}
      >
        <LocationStyled
          startIcon={<FmdGoodOutlinedIcon color="red" />}
          onClick={handleOpenLocation}
        >
          <Stack textAlign="right" marginRight="0.5rem">
            <Typography fontSize="0.7rem" color="#212121">
              انتخاب مکان
            </Typography>
            <Typography fontSize="0.8rem">
              {localStorage.getItem("yourLocation") || "مکان شما"}
            </Typography>
          </Stack>
        </LocationStyled>
      </Stack>

      <Modal
        open={openLocation}
        onClose={handleCloselocation}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalStyled>
          <Stack sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <Typography id="modal-modal-title" component="h2">
                منطقه ارسال خود را انتخاب کنید
              </Typography>
              <CloseIcon
                onClick={handleCloselocation}
                sx={{ cursor: "pointer" }}
              />
            </Box>
            <Divider />
            <List
              sx={{
                width: "100%",
                padding: 0,
                overflowY: "scroll",
                height: "400px",
              }}
            >
              {loadingCities ? (
                <Loading />
              ) : (
                cities?.map((city) => (
                  <>
                    <ListItem
                      key={city.id}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        padding: "0.3rem 0",
                        cursor: "pointer",
                        alignContent: "center",
                      }}
                    >
                      <ListItemText
                        componen="div"
                        sx={{ textAlign: "right" }}
                        onClick={(e) => cityHandeler(e)}
                      >
                        {city.name}
                      </ListItemText>
                      <ListItemIcon
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                        }}
                      >
                        <ChevronLeftIcon sx={{ fontSize: "1.1rem" }} />
                      </ListItemIcon>
                    </ListItem>
                    <Divider />
                  </>
                ))
              )}
            </List>
          </Stack>
        </ModalStyled>
      </Modal>
    </>
  );
}
