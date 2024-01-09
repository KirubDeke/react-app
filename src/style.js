import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { space, layout, left } from 'styled-system';


export const LandingPage = styled.div`
    display:flex:
   
`;
export const MainContainer = styled.div`
  
  height:110vh;
`;

export const AppContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color:#14110f;
  height:30px;
`;
export const MainBody = styled.div`
  display:flex;
  flexDirection:column;
  align-items:center;
`;
export const ImageStyle = styled.div`
   position: relative;
   z-index: 2; 
   margin-left: 45%;
`;



export const LogoContainer = styled.div`
  ${layout}
 
  a{
    text-decoration:none;
    color:white;
    span{
      color:#fb5657;
    }
  }
`;

export const NavigationContainer = styled.nav`

ul {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-right: 70px;
    display: inline;
  }
  li a{
    color:white;
    text-decoration:none;
    transition:transform 0.3s ease, font-size 0.3s ease;
    font-weight:bold;
  }
  li a:hover{
    transform:scale(1.1);
    color:#fb5657;
    font-size:20px;
    font-weight:bold;

  }
}
`;

export const logoStyles = css`
  width: 30px;
  height: 30px;
`;

export const smallLogoStyles = {
    width:'20px',
    height:'20px'
  };


export const DiagonalLine = styled.div`
position: absolute;
top: 0;
left: 0;
width: 45%;
height: 100%;
z-index: 1;
transform-origin: bottom right;
transform: skew(-20deg);
background-color: #fb5607;
`;
export const LineContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) skew(20deg);
  color: white;
  z-index: 1;
  font-weight:bold;
  font-size:22px;
`;

export const BorderStyle = styled.div`

   border: 1px solid transparent;
   border-radius:5px;
   display: inline-block;
   transform: translateY(-100px);
   margin-left:300px;
   background: #000000;
   padding:0px 50px;

   &:hover{
     background:#fca311;
   }
   a{
    text-decoration:none;
    color:white;
    font-size:17px;
   }
`;

//font
export const FontMylogo = styled.div`
  @font-face {
    font-family: 'logofont';
    src: url('./Fonts/Kalam-Bold.otf') format('opentype');
  }
`;
// second section

export const SecondSection = styled.div`
    height: 200vh;
    background-color: #000000;
    position: relative;
    z-index: 2;
`;
export const SecondTitle = styled.div`
   display:flex;
   justify-content:center;
   align-items:center;
   color:white;
   span{
    color:#fb5607;
   }

`;
export const ListGenres = styled.div`
   display:flex;
   flex-wrap:wrap;
   justify-content:center;
   margin-top:50px;
   padding:40px;

`;
export const Row = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin:10px;
  width: calc(100% / 3);
`;
export const Genres = styled.div`
   display:flex;
   flex-direction:column;
   align-items:center;
   margin:35px;
`;
export const GenreImg = styled.div`
   position:relative;
   width:300px;
   height:300px;
   transition:border-radius 0.3s ease;

   img {
    width: 100%;
    height: 100%;
    object-fit: cover;
   
  }
  &:hover{
    border-radius:50%;
  }
 
`;
export const GenreDescription =styled.div`
  width:100px;
  height:50px;
  color:white;
`;
export const Second =styled.div`
`;
