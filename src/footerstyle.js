
import styled from '@emotion/styled';



export const FooterSection = styled.div`
  
   height:50vh;
   background-color:#14110f;
   border:0.5px solid #fb5607;

`;
export const FooterLogo = styled.div`
   padding:80px;
   font-weight:bold;
   a{
      text-decoration:none;
      color:white;
    span{
      color:#fb5607;
     }
   }
   

`;
export const BottomNavigation = styled.div`
   
   ul{
    list-style-type:none;
    padding: 0;
    margin: 0;
    
    li{
      display:inline;
      padding:15px;
    }
   li a{
        color:white;
        text-decoration:none;
        font-weight:bold;
      }
   li a:hover{
      
       color:#fb5607;
   }
    
   }

`;
export const CopyRights = styled.div`

   diplay:flex;
   justify-content:center;
   align-items:center;
   color:white;
   padding:0% 35%;
   p{
    font-weight:bold;
    font-size:17px;
   }
   
`;
export const SocialMedia = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin:-13% 80%;
  padding:10px 25px;
`;

export const SocialHeader = styled.div`
  color:white;
 
`;

export const SocialMediaIcon = styled.a`
  
  
  img {
    width: 30px;
    height: 30px;
    object-fit: cover;
    margin-right: 5px;
  }
`;