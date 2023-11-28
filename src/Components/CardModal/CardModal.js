import { Box, Typography,Drawer,IconButton,Divider } from "@mui/material";
import {Link} from "react-router-dom";
import MyButton from "../MyButton/MyButton";
import CloseIcon from "@mui/icons-material/Close";

import { styled } from "@mui/material/styles";
import "../NavBar/NavBar.css"

const DrawerStyled = styled(Drawer)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    with: "100%",
    height: "100vh",
    borderRadius: 0,
    padding: "1.5rem",
  },
}));
export default function CardModal(props) {
  const { cardBar, closeCardHandler } = props;
  return (
    <DrawerStyled
      anchor="right"
      open={cardBar}
      onClose={closeCardHandler}
      transitionDuration={700}
    >
      <Box
        sx={{
          width: {
            md: "26rem",
            sm: "24rem",
            xs: "100vw",
          },
        }}
      >
        <Box
          component="div"
          sx={{
            padding: "1rem",
            color: "#fff",
            backgroundColor: "#EF394E",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontSize: "0.9rem" }}>
            شما این محصولات را انتخاب کردید
          </Typography>
          <CloseIcon onClick={closeCardHandler} sx={{ cursor: "pointer" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "88vh",
          }}
        >
          {1 !== 0 ? (
            <Box sx={{ padding: "0 0.5rem" }}>
              {[].map((product) => (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "0 1rem",
                    }}
                  >
                    <IconButton sx={{ p: 0 }}>
                      <CloseIcon />
                    </IconButton>
                    <Box
                      component="img"
                      src={product.image}
                      sx={{
                        width: "5rem",
                        height: "5rem",
                        margin: "1rem",
                      }}
                    />
                    <Typography sx={{ fontSize: "0.8rem", fontWeight: "600" }}>
                      {product.title}
                    </Typography>
                    <Typography component="span" sx={{ margin: "0 1rem" }}>
                      {product.count}
                    </Typography>
                  </Box>
                  <Divider />
                </>
              ))}
            </Box>
          ) : (
            <Box sx={{ margin: "1rem Auto" }}>
              در سبد خرید شما محصولی وجود ندارد.
            </Box>
          )}

          <Box sx={{ borderTop: "1px solid #E0E0E0" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "1rem",
              }}
            >
              <Typography fontWeight="bold" fontSize="1.1rem">
                مجموع :
              </Typography>
              <Typography fontWeight="bold" fontSize="1.1rem">
                {1}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                padding: "0 1rem",
              }}
            >
              <Link to="/cart" className="view-card" onClick={closeCardHandler}>
                <MyButton
                  widthdownsm="100%"
                  borderradius="0.6rem"
                  padding="0.7rem 0"
                >
                  مشاهده سبد خرید
                </MyButton>
              </Link>
              <Link to="/checkout" className="bill" onClick={closeCardHandler}>
                <MyButton
                  widthdownsm="100%"
                  borderradius="0.6rem"
                  padding="0.7rem 0"
                >
                  تسویه حساب
                </MyButton>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </DrawerStyled>
  );
}
