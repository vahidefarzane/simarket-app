import { useState } from "react";
import { Box, Typography, IconButton, Divider, Button } from "@mui/material";
import { Link } from "react-router-dom";
import MyButton from "../MyButton/MyButton";
import CloseIcon from "@mui/icons-material/Close";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./NavBar.css";
import { DrawerStyled, BadgeStyled } from "../../Style/styles";
import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";

export default function CardBtnNavBar() {
  const [cardBar, setCardBar] = useState(false);
  const openCardHandler = () => {
    setCardBar(true);
  };
  const closeCardHandler = () => {
    setCardBar(false);
  };
  const { cart, remove, total } = useContext(CartContext);

  const handelremove = (productID) => {
    remove(productID);
  };
  return (
    <>
      <IconButton
        aria-label="show 17 new notifications"
        color="primary"
        onClick={openCardHandler}
        sx={{
          marginRight: {
            md: "0.5rem",
          },
        }}
      >
        <BadgeStyled badgeContent={cart.length}>
          <AddShoppingCartIcon
            sx={{
              fontSize: {
                xs: "1.6rem",
                md: "1.8rem",
              },
            }}
          />
        </BadgeStyled>
      </IconButton>
      <DrawerStyled
        anchor="right"
        open={cardBar}
        onClose={closeCardHandler}
        transitionDuration={700}
      >
        <Box
          sx={(theme) => ({
            [theme.breakpoints.up("sm")]: {
              width: "26rem",
              height: "100vh",
            },
            [theme.breakpoints.down("sm")]: {
              width: "100vw",
              height: "90vh",
            },

            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          })}
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
              height: "100vh",
            }}
          >
            {cart.length !== 0 ? (
              <Box sx={{ padding: "0 0.5rem" }}>
                {cart.map((product) => (
                  <>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "0 1rem",
                      }}
                    >
                      <IconButton
                        sx={{ p: 0 }}
                        onClick={() => handelremove(product.id)}
                      >
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
                      <Typography
                        sx={{ fontSize: "0.8rem", fontWeight: "600" }}
                      >
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
              <>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ margin: "1rem 0" }}>
                    {" "}
                    در سبد خرید شما محصولی وجود ندارد.
                  </Typography>
                  <Link to="/productsList" onClick={closeCardHandler}>
                    مشاهده محصولات
                  </Link>
                </Box>
              </>
            )}

            <Box sx={{ borderTop: "1px solid #E0E0E0", padding: "1.5rem" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "1rem 0",
                }}
              >
                <Typography fontWeight="bold" fontSize="1.1rem">
                  مجموع :
                </Typography>
                <Typography fontWeight="bold" fontSize="1.1rem">
                  {total} تومان
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Link
                  to="/cart"
                  className="view-card"
                  onClick={closeCardHandler}
                >
                  <MyButton
                    widthdownsm="100%"
                    borderradius="0.6rem"
                    padding="0.7rem 0"
                  >
                    مشاهده سبد خرید
                  </MyButton>
                </Link>
                <Link
                  to="/checkout"
                  className="bill"
                  onClick={closeCardHandler}
                >
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
    </>
  );
}
