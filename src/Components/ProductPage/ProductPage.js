import React, { useEffect, useState } from "react";
import axios from "axios";
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

const useStyles = makeStyles((theme) => ({
  productPageContainer: {
    padding: "1rem 2rem",
    [theme.breakpoints.up("md")]: {
      padding: "1rem",
    },
  },
  productInfoContainer: {
    display: "flex",
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
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.between("md", "lg")]: {
      alignItems: "start",
      margintop: "0.7rem",
    },
  },
  productImgPage: {
    width: "24rem",
    height: "25rem",
    [theme.breakpoints.between("md", "lg")]: {
      width: "23rem",
      height: "23rem",
    },
  },
  productDetailsInfo: {
    width: "50%",
    padding: "0 3rem",
    [theme.breakpoints.between("md", "lg")]: {
      padding: "0 1rem",
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
  },
  productDetailsPart2: {
    display: "flex",
    padding: "2rem 0",
    [theme.breakpoints.between("md", "lg")]: {
      padding: "0.7rem 0",
    },
  },
  productDetailsPrice: {
    width: "50%",
    display: "flex",
    borderLeft: "1px solid rgba(0, 0, 0, 0.12)",
    [theme.breakpoints.between("md", "lg")]: {},
  },
  productDetailsShare: {
    width: "50%",
    display: "flex",
    FlexDirection: "column",
    paddingRight: "1rem",
    [theme.breakpoints.between("md", "lg")]: {},
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
        <Box sx={{ p: 3 }}>
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
  const [rateValue, setrateValue] = useState(3);
  const [progressInfos, setProgressTitle] = useState([
    { id: 1, title: "کیفیت ساخت", value: 80 },
    { id: 2, title: "ارزش خرید به نسبت قیمت", value: 50 },
    { id: 3, title: "امکانات و قابلیت ها", value: 60 },
    { id: 4, title: "سهولت استفاده", value: 20 },
  ]);

  return (
    <Stack className={classes.productPageContainer}>
      <Box className={classes.productInfoContainer}>
        <Box className={classes.productInfoImg}>
          <Box
            className={classes.productImgPage}
            component="img"
            src="./images/jacket.jpg"
            alt=""
          ></Box>
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
              },
            }}
          >
            ست تیشرت و شلوار مردانه Nike مدل 21077
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
                مردانه
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "center", fontSize: "0.8rem" }}
            >
              256 رای
              <Rating
                name="read-only"
                value={rateValue}
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
                  },
                  color: "#fb4707",
                  marginLeft: "1rem",
                  fontWeight: "bold",
                }}
              >
                22%
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
                  289,000
                </Typography>
                <Typography
                  component={"span"}
                  sx={{
                    fontSize: {
                      lg: "1.5rem",
                      md: "1rem",
                    },
                    color: "#fb4707",
                    fontWeight: "bold",
                  }}
                >
                  250,000 تومان
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
                      md: "0.7rem",
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
                    padding: "0.7rem 1.7rem",
                    color: "#212121",
                    marginRight: "0.7rem",
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
              },
            }}
          >
            <Typography
              component={"h4"}
              sx={{
                fontWeight: "bold",
                marginBottom: {
                  lg: "2rem",
                  md: "1rem",
                },
                fontSize: {
                  lg: "1rem",
                  md: "0.8rem",
                },
              }}
            >
              انتخاب سایز
            </Typography>
            <ToggleButtonGroup
              sx={{
                marginBottom: {
                  lg: "2rem",
                  md: "1.5rem",
                },
              }}
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton value="L">L</ToggleButton>
              <ToggleButton value="XL">XL</ToggleButton>
              <ToggleButton value="XXL">XXL</ToggleButton>
            </ToggleButtonGroup>
            <MyButton padding="0.9rem 0" borderradius="0.9rem">
              افزودن به سبد خرید
            </MyButton>
          </Stack>
        </Stack>
      </Box>
      <Box sx={{ width: "100%", padding: "0.5rem 0" }}>
        <Box
          sx={{
            border: "1px solid rgba(0, 0, 0, 0.12)",
            padding: "0.7rem 1.5rem",

            borderRadius: "1.1rem",
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
                fontSize: "1.1rem",
              }}
            >
              توضیحات تکمیلی
            </Typography>
            <Box
              sx={{
                marginBottom: "1.5rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                component={"span"}
                sx={{
                  fontWeight: "bold",
                  marginLeft: "0.8rem",
                  fontSize: "0.9rem",
                }}
              >
                نام محصول :
              </Typography>
              <Typography component={"span"}>
                ست تیشرت و شلوار مردانه Nike مدل 21077
              </Typography>
            </Box>
            <Typography component={"p"} sx={{ fontSize: "0.8rem" }}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، د.{" "}
            </Typography>
          </Stack>
        </TabPanel>
        <TabPanel value={valuedata} index={1}>
          <Stack>
            <Stack sx={{ marginBottom: "3rem" }}>
              <Typography
                component={"h4"}
                sx={{
                  fontWeight: "bold",
                  marginBottom: "1rem",
                  fontSize: "1.1rem",
                }}
              >
                امتیاز کاربران به :
              </Typography>

              <Typography component={"span"}>
                ست تیشرت و شلوار مردانه Nike مدل 21077
              </Typography>
            </Stack>
            <Box sx={{ display: "flex", justifyContent: "start" }}>
              <Stack
                sx={{
                  width: "50%",
                  paddingLeft: {
                    lg:'3rem',
                    md:'1rem',
                  },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {progressInfos.map((progressInfos) => (
                  <ProductProgressInfos
                    key={progressInfos.id}
                    title={progressInfos.title}
                    value={progressInfos.value}
                  />
                ))}
              </Stack>
              <Stack sx={{ width: "50%", paddingLeft:{
                lg:'4rem',
                md:'0'
              } }}>
                <Typography
                  component={"h3"}
                  sx={{
                    fontWeight: "bold",
                    fontSize: {
                      lg:'1.1rem',
                      md:'1rem'
                    },
                    marginBottom: {
                      lg:'1rem',
                      md:'0.7rem',
                    },
                  }}
                >
                  دیدگاه خود را در باره این کالا بیان کنید
                </Typography>
                <Typography
                  component={"p"}
                  sx={{ fontSize: {
                    lg:'0.9rem',
                    md:'0.8rem'
                  }, lineHeight: "1.8rem" }}
                >
                  برای ثبت نظر، لازم است ابتدا وارد حساب کاربری خود شوید. اگر
                  این محصول را قبلا از این فروشگاه خریده باشید، نظر شما به عنوان
                  مالک محصول ثبت خواهد شد.
                </Typography>
                <Link to="/addComment">
                  <MyButton
                    startIcon={
                      <AddCommentIcon
                        sx={{
                          marginLeft: "0.9rem",
                          width: "1.8rem",
                          height: "1.8rem",
                        }}
                      />
                    }
                    width="45%"
                    padding="0.7rem 0"
                    borderradius="0.6rem"
                    fontsize="1.1rem"
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
  );
}
