import styled from "styled-components";
import { Link as _Link } from "react-router-dom";

const Wrapper = styled.header`
  width: 1000px;
`;

const Navigation = styled.nav`
  border-bottom: 3px solid #2a65c9;
`;

const Link = styled(_Link)`
  text-decoration: none;
  font-size: 35px;
  color: #2a65c9;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;
const Item = styled.li``;

const Logo = styled.img`
  width: 160px;
  height: 80px;
  display: block;
  margin: 20px auto;
`;

export { Wrapper, Navigation, Link, List, Item, Logo };
