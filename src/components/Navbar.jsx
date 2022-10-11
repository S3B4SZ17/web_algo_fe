import { Badge } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { ShoppingCartCheckoutTwoTone } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 1%; /* 1:1 Aspect Ratio */
  position: relative; /* If you want text inside of it */
  background-color: #8fcaf7;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  padding: 5px;
  margin-left: 25px;
`;
const SearchContainer = styled.div`
  border: 1px lightgreen;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border: 0cm;
`;

const Logo = styled.img`
  height: 60px;
`;

const TextLogo = styled.h1`
  font-weight: bold;
  padding: 10px;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  margin-right: 10px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 2;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Navbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input style={{ fontSize: 16 }} />
              <Search style={{ fontSize: 18 }} />
            </SearchContainer>
          </Left>
          <Center>
            <Logo src="algorithms.png" />
            <TextLogo>Codelab</TextLogo>
          </Center>
          <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>LOG IN</MenuItem>
            <MenuItem>
              {/* <Badge badgeContent={4} color="primary">
                <ShoppingCartCheckoutTwoTone />
              </Badge> */}
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
