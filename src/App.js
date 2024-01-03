import React, { useState } from 'react';
import { AppContainer, LogoContainer, NavigationContainer,QuoteStyle,MainContainer,BorderStyle,
  MainBody,DiagonalLine,ImageStyle,SecondSection,LandingPage,SecondTitle,ListGenres,LineContent,Genres,GenreImg,GenreDescription,SectionMusic
 } from './style';
import { smallLogoStyles } from './style';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import myimage from './image/Background.png';
import genreimage1 from './image/country-image.png';
import genreimage2 from './image/jazz-image.png';
import genreimage3 from './image/electric-image.png';
import genreimage4 from './image/randb-image.png';
import genreimage5 from './image/reggae-image.png';
import genreimage6 from './image/hiphop.jpg';
import Footer from './Footer';



const appStyles ={
 backgroundColor:'#000000'
};


function App() {

  
  return (
    
   <LandingPage id="home">
    <MainContainer style={appStyles}>
    <AppContainer>

     <LogoContainer>

        <a href="index.js" ><h3>Kirub <span>Music</span></h3></a>
       
      </LogoContainer>

      <NavigationContainer>
      
      
      <ul>
    <     li>
             <a href="#home">Home</a>
         </li>
     <li>
           <a href="#musicPlayerSection">Music</a>
     </li>
    <li>
         <a href="#library">My Library</a>
    </li>

    </ul>
        
        

      </NavigationContainer>
         
    </AppContainer>
     
     <MainBody >
     <DiagonalLine>
       <LineContent>
         <p>"Music expresses that which can not be said and on which it is impossible to be silent."</p>
                                                                <p>- Victor Hugo</p> 
       </LineContent>
     </DiagonalLine>

    <ImageStyle>
     <img src={myimage} alt="image"/>
     
    </ImageStyle>

    
    </MainBody>
    
    <BorderStyle>
    <h5><a href="#musicPlayerSection">Music</a></h5>
    </BorderStyle>


    </MainContainer>   


    <SecondSection>
      <SecondTitle>
        <h2>Music Genres <span>in our Library</span></h2>
      </SecondTitle>
      <ListGenres>
        <Genres>
          <GenreImg>
            <img src={genreimage4} alt="image" />
          </GenreImg>
          <GenreDescription>
            <h3>R & B</h3>
          </GenreDescription>
        </Genres>
        <Genres>
          <GenreImg>
            <img src={genreimage6} alt="image" />
          </GenreImg>
          <GenreDescription>
            <h3>Hip Hop</h3>
          </GenreDescription>
        </Genres>
        <Genres>
          <GenreImg>
            <img src={genreimage5} alt="image" />
          </GenreImg>
          <GenreDescription>
            <h3>Reggae</h3>
          </GenreDescription>
        </Genres>
        <Genres>
          <GenreImg>
            <img src={genreimage2} alt="image" />
          </GenreImg>
          <GenreDescription>
            <h3>Jazz</h3>
          </GenreDescription>
        </Genres>
        <Genres>
          <GenreImg>
            <img src={genreimage1} alt="image" />
          </GenreImg>
          <GenreDescription>
            <h3>Country</h3>
          </GenreDescription>
        </Genres>
        <Genres>
          <GenreImg>
            <img src={genreimage3} alt="image" />
          </GenreImg>
          <GenreDescription>
            <h3>Electric</h3>
          </GenreDescription>
        </Genres>
      </ListGenres>
    </SecondSection>
   
      </LandingPage>
    
      
  

  );
}


export default App;
