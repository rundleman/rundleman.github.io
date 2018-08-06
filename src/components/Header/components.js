import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Wrapper = styled.header`
  /* width: 1000px; */
  width: 100%;
  /* border-bottom: 3px solid #2a65c9; */
  /* background-color: #14485f; */
  color: white;
  box-shadow: rgb(238, 238, 238) 0px 1px 0px;
  /* background-image: url(${require("./img/bg-pattern.png")}); */
`;

const Inner = styled.div`
  display: flex;
  width: 1000px;
  margin: 0 auto;
  padding-top: 20px;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 10px;
`;

const Navigation = styled.nav`
  /* border-bottom: 3px solid #2a65c9; */
`;

const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 27px;
  color: #2a65c9;
  color: white;
  color: darkgray;
  transition: color 0.15s linear;

  &.active {
    color: #31518c;
    border-bottom: 2px solid #31518c;

    &:hover {
      border-bottom: 2px solid #31518c;
    }
  }

  &:hover {
    border-bottom: 2px solid darkgray;
  }

  /* &.active,
  &:hover,
  &:focus {
    color: #31518c;
  } */
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

const Item = styled.li`
  margin-left: 60px;
`;

const Logo = styled.img`
  width: 160px;
  height: 80px;
  display: block;
  /* margin: 20px auto; */
`;

const NewLogo = styled.div`
  text-align: right;
  display: flex;
  justify-content: start;
  align-items: flex-end;
  font-size: 30px;
  color: #2a65c9;
  /* background-color: lightslategray; */
  /* border: 1px solid #eae3e3; */
  /* border: 1px solid #31518C; */
  color: #31518c;
`;

export { Wrapper, Navigation, Link, List, Item, Logo, Inner, NewLogo };
