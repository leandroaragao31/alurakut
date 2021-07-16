import React from 'react';
import styled from 'styled-components';
import Box from '../Box/box';

export const ProfileRelationsBox = styled(Box)`
  ul {
    display: flex;
    flex-direction:column;
    align-items:center
    height:50vh;
    max-height: 400px;
    list-style: none;
  }
  li{
    display:flex;
    flex-wrap:no-wrap;
    margin-bottom:2vh;
    border-bottom: 2px #BEBEBE solid;
    padding-bottom:2vh;
    
  }
  ul li a {
    display: flex;
    flex-direction:column;
    align-items:center
    
    height: 102px;
    span {
      color: #FFE4B5;
      font-size: 10px;
      position: absolute;
      left: 0;
      margin-top:10vh;
      bottom: 10;
      z-index: 2;
      padding: 0 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-indeX: 1;
      background-image: linear-gradient(0deg,#00000073,transparent);
    }
  }
`; 