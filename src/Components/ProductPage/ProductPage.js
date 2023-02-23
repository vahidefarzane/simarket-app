import React, { useEffect, useState } from "react";
import {
  Stack,
  Slider,
  Box,
  Typography,
  Divider,
  Button,
  IconButton,
  ToggleButtonGroup,
  Tabs,
  Tab,
  Rating,
} from "@mui/material";
import MuiToggleButton from "@mui/material/ToggleButton";
import MuiTabs from "@mui/material/Tabs";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import MyButton from "../MyButton/MyButton";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import { PropTypes } from "prop-types";
import AddCommentIcon from "@mui/icons-material/AddComment";
import ProductProgressInfos from "../ProductProgressInfos/ProductProgressInfos";
import ReactImageMagnify from "react-image-magnify";

const useStyles = makeStyles((theme) => ({
  productPageContainer: {
    padding: "1rem 2rem",
    [theme.breakpoints.down("md")]: {
      padding: "0.7rem",
    },
    [theme.breakpoints.between("md", "lg")]: {
      padding: "1rem",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "0",
    },
  },
  productInfoContainer: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
    },
    [theme.breakpoints.between("md", "lg")]: {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  productInfoImg: {
    width: "50%",
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    [theme.breakpoints.between("md", "lg")]: {
      alignItems: "start",
      margintop: "0.7rem",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      border: "1px solid rgba(165,160,160,0.26)",
      borderRadius: "1rem",
    },
  },
  productImgPage: {
    // width: "24rem",
    // height: "25rem",
    // [theme.breakpoints.between("md", "lg")]: {
    //   width: "23rem",
    //   height: "23rem",
    // },
    // [theme.breakpoints.down("md")]: {
    //   width: "22rem",
    //   height: "22rem",
    //   padding: "1rem",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   width: "18rem",
    //   height: "17rem",
    //   padding: "1rem",
    // },
  },
  productDetailsInfo: {
    width: "61%",
    padding: "0 3rem",
    [theme.breakpoints.between("md", "lg")]: {
      padding: "0 1rem",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "1rem",
    },
  },

  productDetailsPart1: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
    justifyContent: "space-between",
    [theme.breakpoints.between("md", "lg")]: {
      marginBottom: "0.7rem",
    },
    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
    },
  },
  productDetailsPart2: {
    display: "flex",
    padding: "2rem 0",
    [theme.breakpoints.between("md", "lg")]: {
      padding: "0.7rem 0",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      padding: "1rem 0",
    },
  },
  productDetailsPrice: {
    width: "50%",
    display: "flex",
    borderLeft: "1px solid rgba(0, 0, 0, 0.12)",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      borderLeft: "none",
      marginBottom: "0.7rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      borderLeft: "none",
      marginBottom: "0.9rem",
    },
  },
  productDetailsShare: {
    width: "50%",
    display: "flex",
    FlexDirection: "column",
    paddingRight: "1rem",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      paddingRight: "0rem",
    },
  },
  tabs: {
    "& .MuiTabs-indicator": {
      backgroundColor: "orange",
      height: 3,
    },
    "& .MuiTab-root.Mui-selected": {
      color: "red",
    },
  },
}));
const ToggleButton = styled(MuiToggleButton)(({ theme }) => ({
  "&.MuiButtonBase-root": {
    width: "6rem",
    color: "#000",
    fontWeight: "bold",
    [theme.breakpoints.between("md", "lg")]: {
      width: "5rem",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "4rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "5rem",
    },
  },
  "&.MuiButtonBase-root:not(:last-of-type), &.MuiButtonBase-root:last-of-type":
    {
      borderTopRightRadius: "0.7rem",
      borderBottomRightRadius: " 0.7rem",
      borderTopLeftRadius: "0.7rem",
      borderBottomLeftRadius: " 0.7rem",
      marginLeft: "0.7rem",
      border: "1px solid #ff6a00",
    },
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "#fff",
    backgroundColor: "#ff6a00",
  },
}));
const TabsStyled = styled(Tabs)(({ theme }) => ({
  display: "flex",
  "& .MuiTabs-indicator": {
    backgroundColor: "#ff6a00",
  },
  "& .MuiTab-root.Mui-selected": {
    color: "#ff6a00",
  },
}));
const BoxShareProduct = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.between("md", "lg")]: {
    display: "none",
  },
}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function ProductsList() {
  const classes = useStyles();

  const [alignment, setAlignment] = useState("L");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const [value, setValue] = useState("one");

  const handleChange1 = (event, newValue) => {
    setValue(newValue);
  };
  const [valuedata, setvaluedata] = useState(0);

  const handleChange3 = (event, newValue) => {
    setvaluedata(newValue);
  };

  const { product, ispendingProduct } = useFetch(
    `http://localhost:4000${window.location.pathname}`
  );
  console.log(product);

  return (
    <>
      {ispendingProduct && (
        <Stack className={classes.productPageContainer}>
          <Box className={classes.productInfoContainer}>
            <Box
              sx={{
                width: {
                  lg: "40%",
                  md: "45%",
                  xs: "100%",
                },
                padding: {
                  md: "0 3rem 2rem 3rem",
                  xs: "1rem 3rem",
                },
              }}
            >
              <ReactImageMagnify
                fadeDurationInMs={400}
                isHintEnabled={true}
                smallImage={{
                  alt: "Phasellus laoreet",
                  isFluidWidth: true,
                  src: product.image,
                }}
                largeImage={{
                  height: 900,
                  width: 850,
                  src: product.image,
                }}
                enlargedImageContainerStyle={{
                  background: "#fff",
                  border: "1px solid red",
                  zIndex: 9,
                  marginLeft: "-58rem",
                }}
              />
            </Box>

            <Stack className={classes.productDetailsInfo}>
              <Typography
                component="h2"
                sx={{
                  fontSize: {
                    lg: "1.2rem",
                    md: "0.9rem",
                  },
                  fontWeight: "bold",
                  lineHeight: "2.5rem",
                  marginBottom: {
                    lg: "1rem",
                    md: "0.7rem",
                    sm: "1rem",
                  },
                }}
              >
                {product.title}
              </Typography>
              <Box className={classes.productDetailsPart1}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <FolderOutlinedIcon
                    sx={{
                      color: "#9e9e9e",
                      fontSize: "1.1rem",
                      marginLeft: "0.5rem",
                    }}
                  />
                  <Typography
                    component={"span"}
                    sx={{
                      fontSize: {
                        lg: "1rem",
                        md: "0.9rem",
                      },
                    }}
                  >
                    دسته بندی :
                  </Typography>
                  <Typography
                    component={"span"}
                    sx={{
                      color: "#9e9e9e",
                      fontSize: {
                        lg: "0.9rem",
                        md: "0.8rem",
                      },
                      marginRight: "0.2rem",
                    }}
                  >
                    {product.category}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "0.8rem",
                  }}
                >
                  {product.rating.count}
                  <Rating
                    name="read-only"
                    value={product.rating.rate}
                    readOnly
                    sx={{ marginRight: "0.5rem" }}
                  />
                </Box>
              </Box>
              <Divider />
              <Box className={classes.productDetailsPart2}>
                <Box className={classes.productDetailsPrice}>
                  <Typography
                    component={"span"}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid  #fb4707",
                      borderRadius: "0.9rem",
                      padding: {
                        lg: "1rem",
                        md: "0.8rem",
                        sm: "1rem",
                        xs: "1rem",
                      },
                      color: "#fb4707",
                      marginLeft: {
                        md: "1rem",
                        xs: "2rem",
                      },
                      fontWeight: "bold",
                    }}
                  >
                    {product.off}%
                  </Typography>
                  <Stack>
                    <Typography
                      component={"del"}
                      sx={{
                        color: "#b5b5b5",
                        fontSize: {
                          lg: "1.1rem",
                          md: "0.9rem",
                        },
                        marginBottom: "1rem",
                      }}
                    >
                      {product.price}
                    </Typography>
                    <Typography
                      component={"span"}
                      sx={{
                        fontSize: {
                          lg: "1.5rem",
                          md: "1rem",
                          sm: "1.2rem",
                        },
                        color: "#fb4707",
                        fontWeight: "bold",
                      }}
                    >
                      {product.price}
                    </Typography>
                  </Stack>
                </Box>

                <Stack className={classes.productDetailsShare}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: {
                        lg: "0.7rem",
                        md: "0",
                        sm: "0.7rem",
                        xs: "0.7rem",
                      },
                    }}
                  >
                    <BeenhereIcon
                      sx={{ fontSize: "0.8rem", marginLeft: "0.4rem" }}
                    />
                    <Typography
                      component={"span"}
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
                  <BoxShareProduct>
                    <IconButton>
                      <FavoriteBorderIcon />
                    </IconButton>

                    <Button
                      sx={{
                        backgroundColor: "#c5c5c5",
                        borderRadius: "2rem",
                        padding: {
                          md: "0.7rem 1.7rem",
                          xs: "0.6rem 1rem",
                        },
                        color: "#212121",
                        marginRight: "0.7rem",
                        fontSize: {
                          md: "1rem",
                          xs: "0.7rem",
                        },
                      }}
                      startIcon={<ShareIcon sx={{ marginLeft: "0.7rem" }} />}
                    >
                      دوستاتو با خبر کن
                    </Button>
                  </BoxShareProduct>
                </Stack>
              </Box>
              <Divider />
              <Stack
                sx={{
                  padding: {
                    lg: "1.5rem 0",
                    md: "0.7rem 0",
                    xs: "0.6rem 0",
                  },
                }}
              >
                {product.size && (
                  <Typography
                    component={"h4"}
                    sx={{
                      fontWeight: "bold",
                      marginBottom: {
                        lg: "2rem",
                        md: "1rem",
                        sm: "1rem",
                        xs: "1rem",
                      },
                      fontSize: {
                        lg: "1rem",
                        md: "0.8rem",
                        xs: "0.8rem",
                      },
                    }}
                  >
                    انتخاب سایز
                  </Typography>
                )}

                <ToggleButtonGroup
                  sx={{
                    marginBottom: {
                      lg: "2rem",
                      md: "1.5rem",
                      sm: "1rem",
                      xs: "1rem",
                    },
                  }}
                  value={alignment}
                  exclusive
                  onChange={handleChange}
                  aria-label="Platform"
                >
                  {product.size &&
                    product.size.map((size) => (
                      <ToggleButton>{size}</ToggleButton>
                    ))}
                </ToggleButtonGroup>
                <MyButton padding="0.9rem 0" borderradius="0.9rem">
                  افزودن به سبد خرید
                </MyButton>
              </Stack>
            </Stack>
          </Box>
          <Box sx={{ width: "100%", padding: "0" }}>
            <Box
              sx={{
                border: "1px solid rgba(0, 0, 0, 0.12)",
                padding: {
                  md: "0.7rem 1.5rem",
                  xs: "0.2rem 0.7rem",
                },
                borderRadius: {
                  md: "1.1rem",
                  xs: "0.9rem",
                },
              }}
            >
              <TabsStyled
                value={valuedata}
                onChange={handleChange3}
                aria-label="basic tabs example"
              >
                <Tab label="مشخصات" {...a11yProps(0)} />
                <Tab label="نظرات" {...a11yProps(1)} />
              </TabsStyled>
            </Box>
            <TabPanel value={valuedata} index={0}>
              <Stack>
                <Typography
                  component={"h4"}
                  sx={{
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    fontSize: {
                      md: "1.1rem",
                      xs: "1rem",
                    },
                  }}
                >
                  توضیحات تکمیلی
                </Typography>
                <Box
                  sx={{
                    marginBottom: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Typography
                    component={"span"}
                    sx={{
                      marginLeft: "0.8rem",
                      fontSize: {
                        md: "1rem",
                        xs: "0.9rem",
                      },
                    }}
                  >
                    نام محصول :
                  </Typography>
                  <Typography
                    component={"span"}
                    sx={{
                      fontSize: {
                        md: "1rem",
                        xs: "0.9rem",
                      },
                    }}
                  >
                    {product.title}
                  </Typography>
                </Box>
                <Typography
                  component={"p"}
                  sx={{
                    fontSize: {
                      md: "1rem",
                      xs: "0.8rem",
                    },
                    textAlign: "justify",
                  }}
                >
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، د.{" "}
                </Typography>
              </Stack>
            </TabPanel>
            <TabPanel value={valuedata} index={1}>
              <Stack>
                <Stack
                  sx={{
                    marginBottom: {
                      md: "2.5rem",
                      xs: "1rem",
                    },
                  }}
                >
                  <Typography
                    component={"h4"}
                    sx={{
                      fontWeight: "bold",
                      marginBottom: {
                        md: "1rem",
                        xs: "0.7rem",
                      },
                      fontSize: {
                        md: "1.1rem",
                        xs: "1rem",
                      },
                    }}
                  >
                    امتیاز کاربران به :
                  </Typography>

                  <Typography
                    component={"span"}
                    sx={{
                      fontSize: {
                        md: "1rem",
                        xs: "0.9rem",
                      },
                    }}
                  >
                    {product.title}
                  </Typography>
                </Stack>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    flexDirection: {
                      md: "row",
                      xs: "column",
                    },
                  }}
                >
                  <Stack
                    sx={{
                      width: {
                        md: "50%",
                        xs: "100%",
                      },
                      paddingLeft: {
                        lg: "3rem",
                        md: "1rem",
                      },
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      marginBottom: {
                        md: "0",
                        xs: "1.5rem",
                      },
                    }}
                  >
                    {product.commentBar.map((progressInfos) => (
                      <ProductProgressInfos
                        key={progressInfos.id}
                        title={progressInfos.title}
                        value={progressInfos.value}
                      />
                    ))}
                  </Stack>
                  <Stack
                    sx={{
                      width: {
                        md: "50%",
                        xs: "100%",
                      },
                      paddingLeft: {
                        lg: "4rem",
                        md: "0",
                      },
                    }}
                  >
                    <Typography
                      component={"h3"}
                      sx={{
                        fontWeight: "bold",
                        fontSize: {
                          lg: "1.1rem",
                          md: "1rem",
                          xs: "1rem",
                        },
                        marginBottom: {
                          lg: "1rem",
                          md: "0.7rem",
                          xs: "0.7rem",
                        },
                      }}
                    >
                      دیدگاه خود را در باره این کالا بیان کنید
                    </Typography>
                    <Typography
                      component={"p"}
                      sx={{
                        fontSize: {
                          lg: "0.9rem",
                          md: "0.8rem",
                          xs: "0.8rem",
                        },
                        lineHeight: "1.8rem",
                        textAlign: "justify",
                      }}
                    >
                      برای ثبت نظر، لازم است ابتدا وارد حساب کاربری خود شوید.
                      اگر این محصول را قبلا از این فروشگاه خریده باشید، نظر شما
                      به عنوان مالک محصول ثبت خواهد شد.
                    </Typography>
                    <Link to="/addComment">
                      <MyButton
                        startIcon={
                          <AddCommentIcon
                            sx={{
                              marginLeft: {
                                md: "0.9rem",
                                xs: "0.5rem",
                              },
                              width: {
                                md: "1.8rem",
                                xs: "1.3rem",
                              },
                              height: {
                                md: "1.8rem",
                                xs: "1.3rem",
                              },
                            }}
                          />
                        }
                        widthupmd="45%"
                        widthbetweenmdsm="30%"
                        widthdownsm="60%"
                        padding="0.7rem 0"
                        borderradius="0.6rem"
                        fontsizeupmd="1.1rem"
                        fontsizedownmd="0.9rem"
                        margintop="1rem"
                      >
                        افزودن دیدگاه
                      </MyButton>
                    </Link>
                  </Stack>
                </Box>
                <Box sx={{ margin: "4rem 0" }}>
                  <Typography
                    component={"h2"}
                    sx={{ marginBottom: "1rem", fontWeight: "bold" }}
                  >
                    نظرات کاربران
                  </Typography>
                  <Typography component={"p"} sx={{ fontSize: "0.9rem" }}>
                    هیچ دیدگاهی برای این محصول نوشته نشده است.
                  </Typography>
                </Box>
              </Stack>
            </TabPanel>
          </Box>
        </Stack>
      )}
    </>
  );
}
