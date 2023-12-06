import {
  Box,
  Divider,
  Typography,
  InputBase,
  Stack,
  Button,
  IconButton,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import BeenhereIcon from "@mui/icons-material/Beenhere";

import { CartContext } from "../../Contexts/CartContext";
import { useContext, useEffect } from "react";
function OrderedProduct() {
  const { remove, cart, plusCountProduct, minusCountProduct } =
    useContext(CartContext);

  const handelRemove = (productID) => {
    remove(productID);
  };

  const plusCountProductHandler = (productId) => {
    plusCountProduct(productId);
  };
  const minusCountProductHandler = (productId) => {
    minusCountProduct(productId);
  };
  return (
    <>
      {cart.map((product) => (
        <>
          <Box
            key={product.id}
            sx={{
              display: "flex",
              justifyContent: "start",
              flexDirection: {
                sm: "row",
                xs: "column",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "right",

                width: {
                  md: "72%",
                  xs: "100%",
                },
                flexDirection: {
                  sm: "row",
                  xs: "column",
                },
              }}
            >
              <Box
                src={product.image}
                component="img"
                sx={{
                  margin: {
                    md: "0 0 0 2rem",
                    sm: "0 0 0 1rem",
                    xs: "0 auto",
                  },
                  width: {
                    md: "29%",
                    sm: "28%",
                    xs: "60%",
                  },
                }}
              ></Box>
              <Box sx={{ marginTop: "1.5rem" }}>
                <Typography sx={{ marginBottom: "1.5rem", fontWeight: "bold" }}>
                  {product.title}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <BeenhereIcon
                    sx={{ fontSize: "0.8rem", marginLeft: "0.4rem" }}
                  />
                  <Typography
                    component="span"
                    sx={{
                      fontSize: {
                        lg: "0.8rem",
                        xs: "0.7rem",
                      },
                    }}
                  >
                    گارانتی 18 ماهه فروشگاه اینترنتی پارس کالا
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Box
                    sx={{
                      border: "1px solid  #ff6a00",
                      borderRadius: "0.6rem",
                      padding: "0.2rem ",
                    }}
                  >
                    <IconButton
                      onClick={() => plusCountProductHandler(product.id)}
                      disableRipple={true}
                      sx={{ color: " #ff6a00" }}
                    >
                      <AddIcon />
                    </IconButton>
                    <InputBase
                      type="tel"
                      sx={{
                        width: "4rem",
                        color: " #ff6a00",
                        textAlign: "center",
                      }}
                      value={product.count}
                    >
                      {product.count}
                    </InputBase>
                    <IconButton
                      onClick={() => minusCountProductHandler(product.id)}
                      disableRipple={true}
                      sx={{ color: " #ff6a00" }}
                    >
                      <RemoveIcon />
                    </IconButton>
                  </Box>
                  <Button
                    onClick={() => handelRemove(product.id)}
                    variant="outlined"
                    disableRipple={true}
                    sx={{
                      color: "#535353",
                      borderColor: "#B2B1B1",
                      marginRight: "1rem",
                      borderRadius: "0.6rem",
                      "&:hover": {
                        backgroundColor: "transparent",
                        borderColor: "#B2B1B1",
                      },
                    }}
                    endIcon={
                      <DeleteForeverOutlinedIcon
                        sx={{ marginRight: "0.4rem" }}
                      />
                    }
                  >
                    حذف
                  </Button>
                </Box>
              </Box>
            </Box>
            <Stack
              sx={{
                marginTop: {
                  sm: "0",
                  xs: "1.5rem",
                },
              }}
            >
              <Typography
                sx={{
                  color: "red",
                  fontSize: {
                    md: "0.9rem",
                    sm: "0.7rem",
                    xs: "1rem",
                  },
                }}
              >
                {`تخفیف ${(product.off * product.price) / 100} تومان`}
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    lg: "1.1rem",
                    sm: "0.9rem",
                    xs: "1.1rem",
                  },
                  fontWeight: "bold",
                }}
              >
                {` ${
                  product.price - (product.off * product.price) / 100
                } تومان`}
              </Typography>
            </Stack>
          </Box>
          <Divider sx={{ margin: "1.5rem 0" }} />
        </>
      ))}
    </>
  );
}

export default OrderedProduct;
