import React from 'react';
import styled from 'styled-components';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import MessageIcon from '@material-ui/icons/Message';

const Container = styled.div`
  background-color: #fff;
  border-radius: 5%;
  max-width: 300px;
  position: relative;
  margin: 0 auto;
  min-height: 300px;
  padding: 24px;
  cursor: pointer;
  border: 1px solid #eee

  &:hover {
   background-color: #eee;
  }
`;
const IconWrapper = styled.div`

 svg {
  font-size: 48px;
  position: absolute;
  top: -24px;
  left: 50%;
  transform: translateX(-50%);
  color: blue;
 }
`;

const SubTitle = styled.div`
  font-weight: 500;
  color: blue;
`;

const Title = styled.div`
 font-weight: 100;
 font-size: 36px;
 text-align: center;
 line-height: 38px;
`;
const Description =styled.div``;
const LinkWrapper = styled.div`
 position: absolute;
 bottom: -21px;
 left: 50%;
 transform: translateX(-50%);
 background-color: blue;
 border-radius: 10px;
 line-height: 35px;
 padding: 5px 37px;

  a {
   color: #fff;
   text-decoration: none;
  }

  svg {
   position: relative;
   top: 7px;
   padding-right: 12px;
  }
`;

const CvpSingle = (props) => {
 return (
  <Container>
   <IconWrapper>
    <OfflineBoltIcon />
   </IconWrapper>
   <SubTitle>We are awesome</SubTitle>
   <Title>According to schedule</Title>
   <Description>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque</Description>
   <LinkWrapper><a  href=""><MessageIcon />All Info</a></LinkWrapper>
  </Container>
 )
}

export default CvpSingle;