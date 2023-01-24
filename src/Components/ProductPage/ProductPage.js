import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Stack,
  Slider,
  Box,
  Typography,
  TextField,
  Checkbox,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ListItem,
  ListItemButton,
  ListItemText,
  List,
  Divider,
  Button,
  IconButton,
  ToggleButtonGroup,
  Tabs,
  Tab,
  Rating,
  LinearProgress,
  linearProgressClasses,
} from "@mui/material";
import MuiToggleButton from "@mui/material/ToggleButton";
import MuiTabs from "@mui/material/Tabs";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import MyButton from "../MyButton/MyButton";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import { PropTypes } from "prop-types";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import AddCommentIcon from "@mui/icons-material/AddComment";

const useStyles = makeStyles((theme) => ({
  productDetailsContainer: {
    display: "flex",
    padding: "1rem 3rem",
  },
  productDetailsImgContainer: {
    width: "45%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  productDetailsImg: {
    width: "24rem",
    height: "25rem",
  },
  productDetailsInfo: {
    width: "55%",
    padding: "0 3rem",
  },
  productDetailsCategory: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
    justifyContent: "space-between",
  },
  productDetailsPrice: {
    width: "50%",
    display: "flex",
    borderLeft: "1px solid rgba(0, 0, 0, 0.12)",
  },
  productDetailsShare: {
    width: "50%",
    display: "flex",
    FlexDirection: "column",
    paddingRight: "1rem",
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
const ToggleButtonStyled = styled(Stack)(({ theme }) => ({}));
const ToggleButton = styled(MuiToggleButton)({
  "&.MuiButtonBase-root": {
    width: "6rem",
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
});
const LinearProgressStyled = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 5,
  display: "flex",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#ebebeb",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
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

  return (
    <Stack>
      <Breadcrumb></Breadcrumb>
      <Box className={classes.productDetailsContainer}>
        <Box className={classes.productDetailsImgContainer}>
          <Box
            className={classes.productDetailsImg}
            component="img"
            src="./images/jacket.jpg"
            alt=""
          ></Box>
        </Box>

        <Stack className={classes.productDetailsInfo}>
          <Typography
            component="h2"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              lineHeight: "2.5rem",
              marginBottom: "1rem",
            }}
          >
            ست تیشرت و شلوار مردانه Nike مدل 21077
          </Typography>
          <Box className={classes.productDetailsCategory}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <FolderOutlinedIcon
                sx={{
                  color: "#9e9e9e",
                  fontSize: "1.1rem",
                  marginLeft: "0.5rem",
                }}
              />
              <Typography component={"span"}>دسته بندی :</Typography>
              <Typography
                component={"span"}
                sx={{
                  color: "#9e9e9e",
                  fontSize: "0.9rem",
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
          <Box sx={{ display: "flex", padding: "2rem 0" }}>
            <Box className={classes.productDetailsPrice}>
              <Typography
                component={"span"}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid  #fb4707",
                  borderRadius: "0.9rem",
                  padding: "1rem",
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
                    fontSize: "1.1rem",
                    marginBottom: "1rem",
                  }}
                >
                  289,000
                </Typography>
                <Typography
                  component={"span"}
                  sx={{
                    fontSize: "1.5rem",
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
                  marginBottom: "0.7rem",
                }}
              >
                <BeenhereIcon
                  sx={{ fontSize: "0.8rem", marginLeft: "0.4rem" }}
                />
                <Typography component={"span"} sx={{ fontSize: "0.8rem" }}>
                  گارانتی 18 ماهه فروشگاه اینترنتی پارس کالا
                </Typography>
              </Box>
              <Box>
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
              </Box>
            </Stack>
          </Box>
          <Divider />
          <Stack sx={{ padding: "1.5rem 0" }}>
            <Typography
              component={"h4"}
              sx={{ fontWeight: "bold", marginBottom: "2rem" }}
            >
              انتخاب سایز
            </Typography>
            <ToggleButtonGroup
              sx={{ marginBottom: "2rem" }}
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

      <Box sx={{ width: "100%", padding: "0.5rem 3rem" }}>
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
                  paddingLeft: "4rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "13rem",
                    }}
                  >
                    <Typography component={"h4"}>کیفیت ساخت</Typography>
                    <Typography component={"h4"}>0</Typography>
                  </Box>
                  <Box sx={{ width: "20rem" }}>
                    <LinearProgressStyled variant="determinate" value={70} />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "13rem",
                    }}
                  >
                    <Typography component={"h4"}>
                      ارزش خرید به نسبت قیمت
                    </Typography>
                    <Typography component={"h4"}>0</Typography>
                  </Box>
                  <Box sx={{ width: "20rem" }}>
                    <LinearProgressStyled variant="determinate" value={50} />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "13rem",
                    }}
                  >
                    <Typography component={"h4"}>سهولت استفاده</Typography>
                    <Typography component={"h4"}>0</Typography>
                  </Box>
                  <Box sx={{ width: "20rem" }}>
                    <LinearProgressStyled variant="determinate" value={10} />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "13rem",
                    }}
                  >
                    <Typography component={"h4"}>
                      امکانات و قابلیت ها
                    </Typography>
                    <Typography component={"h4"}>0</Typography>
                  </Box>
                  <Box sx={{ width: "20rem" }}>
                    <LinearProgressStyled variant="determinate" value={10} />
                  </Box>
                </Box>
              </Stack>
              <Stack sx={{ width: "50%", paddingLeft: "4rem" }}>
                <Typography
                  component={"h3"}
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    marginBottom: "1rem",
                  }}
                >
                  دیدگاه خود را در باره این کالا بیان کنید
                </Typography>
                <Typography
                  component={"p"}
                  sx={{ fontSize: "0.9rem", lineHeight: "1.8rem" }}
                >
                  برای ثبت نظر، لازم است ابتدا وارد حساب کاربری خود شوید. اگر
                  این محصول را قبلا از این فروشگاه خریده باشید، نظر شما به عنوان
                  مالک محصول ثبت خواهد شد.
                </Typography>
                <Link to='/addComment'>
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
                    margintop="1.6rem"
                  >
                    افزودن دیدگاه
                  </MyButton>
                </Link>
              </Stack>
            </Box>
            <Box sx={{ margin: "4rem 0" }}>
              <Typography component={"h2"}>نظرات کاربران</Typography>
              <Typography component={"p"}>
                هیچ دیدگاهی برای این محصول نوشته نشده است.
              </Typography>
            </Box>
          </Stack>
        </TabPanel>
      </Box>
    </Stack>
  );
}
