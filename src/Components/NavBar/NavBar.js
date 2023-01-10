import { Link } from "react-router-dom";
import { BsCartDash } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Badge } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import MyButton from "../MyButton/MyButton";
import "./NavBar.css";

export default function Header() {
  const StyledBadge = styled(Badge)(() => ({
    "& .MuiBadge-badge": {
      background: "#FF512F",
      color: "white",
    },
  }));

  return (
    <div className="nav-container">
      <div className="top-nav">
        <div className="top-nav-right">
          <img src="logo.png" className="top-nav-logo" />
          <div className="top-nav-search">
            <button className="nav-search-btn">
              <BsSearch />
            </button>
            <input
              type="search"
              placeholder="جستجو در هزاران محصول..."
              className="nav-search-input"
            />
          </div>
        </div>
        <div className="top-nav-left">
          <MyButton borderradius={"2rem"} marginleft={"2rem"}>ورود / ثبت نام</MyButton>
          <StyledBadge
            badgeContent={4}
            sx={{ fontSize: "1.7rem", cursor: "pointer" }}
          >
            <BsCartDash />
          </StyledBadge>
        </div>
      </div>
      <ul className="bottom-nav">
        <div>
          <GiHamburgerMenu />
        </div>
        <li>
          <Link to="/categories">دسته بندی ها</Link>
        </li>
        <li>
          <Link to="/">صفحه اصلی</Link>
        </li>
        <li>
          <Link to="/productsList">لیست کالا ها</Link>
        </li>
        <li>
          <Link to="/contactUs">تماس با ما </Link>
        </li>
        <li>
          <Link to="/product">محصول</Link>
        </li>
      </ul>
    </div>
  );
}
