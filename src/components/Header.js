import React, { useState } from "react";
import PinterestIcon from "@material-ui/icons/Pinterest";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import FaceIcon from "@material-ui/icons/Face";
import TextsmsIcon from "@material-ui/icons/Textsms";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

export default function Header({ getData }) {
  const [query, setquery] = useState("");

  const onSearchSubmit = (e) => {
    e.preventDefault();
    console.log(query);

    getData(query);
  };

  return (
    <div className="header">
      <Wrapper>
        <LogoWrapper>
          <PinterestIcon />
        </LogoWrapper>

        <HomePageButton>
          <a href="/">HomePage</a>
        </HomePageButton>

        <FollowingButton>
          <a href="/">Following</a>
        </FollowingButton>

        <SearchBarWrapper>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <form onSubmit={onSearchSubmit}>
            <input type="text" onChange={(e) => setquery(e.target.value)} />
            <button type="submit">Search</button>
          </form>
        </SearchBarWrapper>

        <IconsWrapper>
          <IconButton>
            <NotificationsIcon />
          </IconButton>

          <IconButton>
            <FaceIcon />
          </IconButton>

          <IconButton>
            <TextsmsIcon />
          </IconButton>

          <IconButton>
            <NotificationsIcon />
          </IconButton>

          <IconButton>
            <KeyboardArrowDownIcon />
          </IconButton>
        </IconsWrapper>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: white;
  color: black;
  max-width: 100vw;
`;

const LogoWrapper = styled.div`
  .MuiSvgIcon-root {
    color: #e60023;
    font-size: 32px;
    cursor: pointer;
  }
`;

const HeaderButton = styled.div`
  display: flex;
  height: 48px;
  min-width: 123px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
`;

const HomePageButton = styled(HeaderButton)`
  background-color: rgb(17, 17, 17);
  margin: 0px 16px;

  a {
    text-decoration: none;
    color: white;
    font-weight: 500;
  }
`;

const FollowingButton = styled(HeaderButton)`
  background-color: white;

  a {
    text-decoration: none;
    color: rgb(17, 17, 17);
    font-weight: 500;
  }

  :hover {
    background-color: #e1e1e1;
  }
`;

const SearchBarWrapper = styled.div`
  background-color: #efefef;
  display: flex;
  height: 48px;
  width: 100%;
  border-radius: 50px;
  border: none;
  padding-left: 10px;

  form {
    flex: 1;
    display: flex;
    width: 100%;
    flex: 1;

    input {
      background-color: transparent;
      border: none;
      width: 100%;
      margin-left: 5px;
      font-size: 16px;
    }

    input:focus {
      outline: none;
    }

    button {
      display: none;
    }
  }
`;

const IconsWrapper = styled.div`
  display: flex;
`;
