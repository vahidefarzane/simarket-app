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

} from "@mui/material";
import { styled } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Loading from "../Loading/Loading";
import useAxios from "../../hooks/useAxios";
import CloseIcon from "@mui/icons-material/Close";
import "../NavBar/NavBar.css"


const ModalStyled = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  [theme.breakpoints.down("sm")]: {
    with: "100%",
    height: "100vh",
    borderRadius: 0,
    padding: "1.5rem",
  },
  [theme.breakpoints.up("sm")]: {
    padding: "2rem",
    borderRadius: "0.6rem",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "34rem",
  },
  [theme.breakpoints.down("xs")]: {
    padding: "1rem 0.5rem",
  },
}));
export default function CitiesModal(props) {
  const { response: cities, loading: loadingCities } = useAxios({
    url: "/cities",
    method: "get",
  });

  const { openLocation, handleCloselocation, cityHandeler } = props;

  return (
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
  );
}
