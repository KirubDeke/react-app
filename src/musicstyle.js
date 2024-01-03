import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MusicSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000000;
  color: white;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
  span{
    color:#fb5607;
  }
`;

export const MusicBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background-color: #fb8500;
  height: 80px;
  width: 70%;
  margin-left: 100px;
  position: relative;
  &:hover {
    border-radius: 15px;
  }
`;

export const MusicImage = styled.div`
  img {
    height: 60px;
    width: 80px;
    padding-left: 15px;
  }
`;

export const MusicInfo = styled.div`
    display: flex;
    flex-grow: 1; 
    flex-direction: column;
    justify-content: center;
    align-items: flex-start; 
    padding-left: 15px;
`;

export const MusicDescription = styled.div`
  color: black;
  text-align: center;
  h3{
    margin:0;
  }
  p{
    margin:0;
  }
  
`;

export const MusicDescriptionButton = styled.div`
  position: absolute;
  right: 200px;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const MoreButton = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  border-radius:5px;
  background-color:#fb5607;
  width:150px;
  height:50px;
  margin:50px 400px;
  
  &:hover{
    background-color:#fca311;
  }
  a{
    text-decoration:none;
    color:white;
    font-size:17px;
  }
 
`;
export const AddButton = styled.div`
button {
  background-color: #fb5607;
  color:white;
  height:50px;
  width:120px;
  float:right;
  margin:5px 400px;
  font-weight:bold;
  border-radius:5px;
  border:none;

  &:hover{
    background-color:#fca311;
  }
}

form {
  display: flex;
  flex-direction: column;
  max-width: 450px;
  margin: 200px 100px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color:#fb8500;
  color:#000000;
  font-weight:bold;
  padding-left:40px;
  h3{
    text-align:center;
    color:#000000;
  }
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  margin-bottom: 15px;
  font-size:20px;
}

input[type="text"] {
  margin:10px 40px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

button {
  margin:50px 150px;
  padding: 10px 20px;
  background-color: #000000;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #f76c00;
}

`;


