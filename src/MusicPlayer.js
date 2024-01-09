import React, { useState } from 'react';
import Records from './records.json';
import lecraeImage from './image/lecrae.png';
import zauntee1Image from './image/zauntee-1.png';
import zauntee2Image from './image/zauntee-2.png';
import ebenImage from './image/Eben.png';
import forestImage from './image/Forest.png';
import walkImage from './image/walk.png';
import mattImage from './image/Matt.png';
import littleMoreImage from './image/little-more.png';
import bigNikImage from './image/Big-nik.png';
import ebukaImage from './image/ebuka.png';
import playButtonImage from './image/play.png';
import pauseButtonImage from './image/pause.png';
import deleteimg from './image/delete.png';
import updateimg from './image/update.png';
import { MusicSection, Title, MusicImage, MusicInfo, MusicBox, MusicDescriptionButton, MusicDescription, MoreButton, AddButton } from './musicstyle';



  const getImage = (imageName) => {
    const imageMap = {
      '/image/lecrae.png': lecraeImage,
      '/image/zauntee-1.png': zauntee1Image,
      '/image/zauntee-2.png': zauntee2Image,
      '/image/Eben.png': ebenImage,
      '/image/Forest.png': forestImage,
      '/image/walk.png': walkImage,
      '/image/Matt.png': mattImage,
      '/image/little-more.png': littleMoreImage,
      '/image/Big-nik.png': bigNikImage,
      '/image/ebuka.png': ebukaImage,
    };

    return imageMap[imageName] || ebukaImage;
  };

  function MusicPlayer() {
    const [playingState, setPlayingState] = useState({});
  const [musicLists, setMusicLists] = useState(Records);
  const [newRecord, setNewRecord] = useState({ artist: '', title: '', duration: '', image: '' });
  const [currentUpdateId, setCurrentUpdateId] = useState(null);

  const togglePlayPause = (ID) => {
    setPlayingState((prevState) => ({
      ...prevState,
      [ID]: !prevState[ID],
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewRecord((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  const handleDelete = (id) => {
    setMusicLists((prevMusicLists) =>
      prevMusicLists.filter((record) => record.ID !== id)
    );
  
    // Simulate deleting from JSONPlaceholder (replace with actual logic)
    console.log(`Deleting record with ID ${id} from JSONPlaceholder...`);
  };
  
  
    const handleUpdateImage = (ID) => {
      setCurrentUpdateId(ID);
    
      const updatedArtist = prompt('Enter the updated artist:');
      const updatedTitle = prompt('Enter the updated title:');
      const updatedDuration = prompt('Enter the updated duration:');
    
      if (updatedArtist !== null && updatedTitle !== null && updatedDuration !== null) {
        const updatedMusicList = musicLists.map((record) =>
          record.ID === ID
            ? { ...record, artist: updatedArtist, title: updatedTitle, duration: updatedDuration }
            : record
        );
    
        setMusicLists(updatedMusicList);
        setCurrentUpdateId(null);
    
        // Simulate updating record in JSONPlaceholder (replace with actual logic)
        console.log(`Updating record with ID ${ID} in JSONPlaceholder...`);
      } else {
        console.log('Update canceled by the user.');
      }
    };
  
  
    const handleAddMusic = () => {
      const newRecordId = Math.max(...musicLists.map((record) => record.ID)) + 1;
  
      const newMusicRecord = {
        ID: newRecordId,
        artist: newRecord.artist,
        title: newRecord.title,
        duration: newRecord.duration,
        image: newRecord.image,
      };
  
      setMusicLists([...musicLists, newMusicRecord]);
      setNewRecord({ artist: '', title: '', duration: '', image: '' });
  
      // Simulate adding record to JSONPlaceholder (replace with actual logic)
      console.log('Adding new record to JSONPlaceholder...');
    };
  return (
    <MusicSection>
      <Title>
        <h2>Trending Musics on <span>Kirub Music</span></h2>
      </Title>
      {Records.map((record) => (
        <MusicBox key={record.ID}>
          <MusicImage>
          <img src={getImage(record.image)} alt={record.title} />
          </MusicImage>
            
          <MusicInfo>
            <MusicDescription>
              <h3>{record.title}</h3>
              <p> {record.artist}</p>
              <p>{record.duration}</p>
            </MusicDescription>
            <MusicDescriptionButton>
            <img
            src={playingState[record.ID] ? pauseButtonImage : playButtonImage}
            alt={playingState[record.ID] ? 'Pause' : 'Play'}
            style={{ width: '30px', height: '30px', cursor: 'pointer' }}
            onClick={() => togglePlayPause(record.ID)}
          />
         <img
            src={deleteimg}
            alt="delete"
            style={{ width: '30px', height: '30px', paddingRight: '5px', paddingLeft: '100px', cursor: 'pointer' }}
            title="Delete Item"
            onClick={() => handleDelete(record.ID)}
          />
       <img
  src={updateimg}
  alt="update"
  style={{ width: '50px', height: '30px', paddingRight: '0px', paddingLeft: '5px', cursor: 'pointer' }}
  title="Update Image"
  onClick={() => handleUpdateImage(record.ID)}
/>
            </MusicDescriptionButton>
          </MusicInfo>
        </MusicBox>
      ))}
      <AddButton>
        <form>

          <b><h3>Add Music</h3></b>
     Artist:<input
            type="text"
            name="artist"
            value={newRecord.artist}
            onChange={handleInputChange}
          />
     Title:   <input
            type="text"
            name="title"
            value={newRecord.title}
            onChange={handleInputChange}
          />
     Duration: <input
            type="text"
            name="duration"
            value={newRecord.duration}
            onChange={handleInputChange}
          />

  <button type="button" onClick={handleAddMusic}> Add Music  </button>
        </form>
        
      </AddButton>
    </MusicSection>
  );
}

export default MusicPlayer;
