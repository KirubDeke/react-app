import React from 'react';
import {FooterSection,FooterLogo,BottomNavigation,CopyRights,
     SocialMedia,SocialHeader,SocialMediaIcon} from './footerstyle';
import facebook from './image/facebook-icon.png';
import instagram from './image/instagram-icon.jpg';
import linkeden from './image/linked-in-icon.jpg';
import twitter from './image/twitter-icon.png';





function Footer(){
    return(
         
<FooterSection>
<FooterLogo>
<a href="index.js" ><h3>Kirub <span>Music</span></h3></a>
 </FooterLogo>

<BottomNavigation>
 <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#musicPlayerSection">Music</a></li>
    <li><a href="#">My Library</a></li>
 </ul>
</BottomNavigation>

<CopyRights >

<p>© 2023 Kirubel Deke. All rights reserved.</p>
</CopyRights>

<SocialMedia >

<SocialHeader>
  <h3>Follow us on social media</h3>
</SocialHeader>


<SocialMediaIcon href="https://example.com/facebook">
<img src={facebook} alt="Facebook" />
</SocialMediaIcon>

<SocialMediaIcon href="https://example.com/twitter">
<img src={twitter} alt="Twitter" />
</SocialMediaIcon>

<SocialMediaIcon href="https://example.com/instagram">
<img src={instagram} alt="Instagram" />
</SocialMediaIcon>

<SocialMediaIcon href="https://example.com/instagram">
<img src={linkeden} alt="Linkeden" />
</SocialMediaIcon>

</SocialMedia >

</FooterSection>
    );
}

 export default Footer;
