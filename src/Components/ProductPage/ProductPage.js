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
} from "@mui/material";
import MuiToggleButton from "@mui/material/ToggleButton";
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
import PropTypes from 'prop-types';

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
    'aria-controls': `simple-tabpanel-${index}`,
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
  const [valuetab, setValuetab] = useState(0);

  const handleChange3 = (event, newValue) => {
    setValuetab(newValue);
  };

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
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange3} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
    </Stack>
  );
}
