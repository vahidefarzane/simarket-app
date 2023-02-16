import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import SourceOutlinedIcon from "@mui/icons-material/SourceOutlined";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import MyButton from "../MyButton/MyButton";
import { styled } from "@mui/material/styles";

const BoxFullWidth = styled(Box)(({ theme }) => ({
  width: "100%",
  border: "1px solid #E3E3E3",
  padding: "1.5rem",
  borderRadius: "0.8rem",
  margin: "1rem 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export default function OrderReceived() {
  const [infos, setInfos] = useState([
    {
      id: 1,
      icon: TextSnippetOutlinedIcon,
      title: " شماره سفارش",
      dec: "311",
    },
    {
      id: 2,
      icon: AccessTimeOutlinedIcon,
      title: "تاریخ",
      dec: "بهمن 26, 1401",
    },
    {
      id: 3,
      icon: CreditCardOutlinedIcon,
      title: " قیمت نهایی:",
      dec: "236,000 تومان",
    },
    {
      id: 4,
      icon: PercentOutlinedIcon,
      title: " روش پرداخت:",
      dec: "انتقال مستقیم بانکی",
    },
  ]);
  const [bankInfos, setBankInfos] = useState([
    {
      id: 1,
      icon: AccountBalanceOutlinedIcon,
      title: "نام بانک",
      dec: "رفاه کارگران",
    },
    {
      id: 2,
      icon: AccountBalanceWalletOutlinedIcon,
      title: "شماره کارت",
      dec: "0000111122223333",
    },
    {
      id: 3,
      icon: SourceOutlinedIcon,
      title: "شماره حساب",
      dec: "000000000",
    },
    {
      id: 4,
      icon: WalletOutlinedIcon,
      title: "شماره حساب بانک بین المللی",
      dec: "IR10000000000000000",
    },
  ]);
  const [tableCells, setTableCells] = useState([
    { id: 1, product: "نام محصول", total: "کاپشن اسپرت تک سایز Nike " },
    { id: 2, product: "مجموع:", total: "236,000 تومان" },
    { id: 3, product: "حمل و نقل:	", total: "حمل و نقل رایگان" },
    { id: 4, product: "مالیات بر ارزش افزوده:	", total: "0 تومان" },
    { id: 5, product: "روش پرداخت:	", total: "انتقال مستقیم بانکی " },
    { id: 6, product: "قیمت نهایی:	", total: "236,000 تومان" },
  ]);
  return (
    <Box>
      <BoxFullWidth>
        <CheckCircleOutlineIcon
          sx={{
            backgroundColor: "#ff6a00",
            padding: {
              md: "0.7rem",
              xs: "0.5rem",
            },
            fontSize: {
              md: "7rem",
              sm: "6rem",
              xs: "5rem",
            },
            color: "#fff",
            borderRadius: "50%",
          }}
        />
        <Typography sx={{ fontSize: "1.3rem", m: "1rem 0" }}>
          متشکریم ، سفارش شما دریافت شد.
        </Typography>
        <MyButton fontsizeupmd="1.1rem" widthupmd="18%">
          چاپ فاکتور
        </MyButton>
      </BoxFullWidth>
      <BoxFullWidth>
        <Box
          sx={{
            display: "flex",
            justifyContent: {
              md: "none",
              xs: "space-between",
            },
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          {infos.map((info) => (
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "0 1.5rem",
                width: {
                  sm: "7rem",
                  xs: "100%",
                },
                marginBottom: "1rem",
              }}
            >
              <info.icon
                sx={{
                  color: "#BABABA",
                  fontSize: {
                    md: "6rem",
                    xs: "6rem",
                  },
                  marginBottom: "0.6rem",
                }}
              />
              <Typography
                sx={{
                  fontSize: "0.7rem",
                  color: "#808080",
                  marginBottom: "0.3rem",
                }}
              >
                {info.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    md: "1rem",
                    xs: "0.8rem",
                  },
                  color: "#3F3F3F",
                }}
              >
                {info.dec}
              </Typography>
            </Stack>
          ))}
        </Box>
      </BoxFullWidth>
      <BoxFullWidth>
        <Typography
          sx={{ fontWeight: "bold", fontSize: "1.1rem", marginBottom: "1rem" }}
        >
          مشخصات بانکی ما
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: {
              md: "none",
              xs: "space-between",
            },
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          {bankInfos.map((infos) => (
            <Stack
              key={infos.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "0 1.5rem",
                width: "7rem",
              }}
            >
              <infos.icon
                sx={{
                  color: "#BABABA",
                  fontSize: {
                    md: "6rem",
                    xs: "5rem",
                  },
                  marginBottom: "0.6rem",
                }}
              />
              <Typography
                sx={{
                  fontSize: "0.7rem",
                  color: "#808080",
                  marginBottom: "0.3rem",
                }}
              >
                {infos.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    md: "1rem",
                    xs: "0.8rem",
                  },
                  color: "#3F3F3F",
                }}
              >
                {infos.dec}
              </Typography>
            </Stack>
          ))}
        </Box>
      </BoxFullWidth>
      <Table
        sx={{
          width: "100%",
          border: "1px solid #E3E3E3",
        }}
      >
        <TableHead sx={{ backgroundColor: "#909090" }}>
          <TableRow>
            <TableCell
              align="right"
              sx={{
                color: "#fff",
                fontWeight: "Bold",
                fontSize: {
                  sm: "1.1rem",
                  xs: "0.9rem",
                },
              }}
            >
              محصول
            </TableCell>
            <TableCell
              align="right"
              sx={{
                color: "#fff",
                fontWeight: "Bold",
                fontSize: {
                  sm: "1.1rem",
                  xs: "0.9rem",
                },
              }}
            >
              مجموع
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableCells.map((tableCell) => (
            <TableRow key={tableCell.id}>
              <TableCell
                align="right"
                sx={{
                  fontSize: {
                    sm: "1rem",
                    xs: "0.8rem",
                  },
                }}
              >
                {tableCell.product}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  fontSize: {
                    sm: "1rem",
                    xs: "0.8rem",
                  },
                }}
              >
                {" "}
                {tableCell.total}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
