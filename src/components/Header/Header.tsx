import * as React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { Wrapper, Logo } from "./styled";

const Header = (): React.ReactElement => (
  <Wrapper>
    <Link to="/">
      <Logo src={logo} alt="logo" />
    </Link>
  </Wrapper>
);

export default Header;
