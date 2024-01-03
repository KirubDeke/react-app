import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMusicList, updateMusicList, deleteMusicList } from './reducers/musicListsReducer';
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

function MusicPlayer() {
  const [playingState, setPlayingState] = useState({});
  const [newRecord, setNewRecord] = useState({ artist: '', title: '', duration: '', image: '' });

  const dispatch = useDispatch();
  const musicLists = useSelector((state) => state.musicLists);

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

  const togglePlayPause = (id) => {
    setPlayingState((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle play/pause state for the clicked item
    }));
  };

  const handleDelete = (id) => {
    dispatch(deleteMusicList(id));
  };

  const handleUpdate = (id) => {
    const recordToUpdate = musicLists.find((record) => record.id === id);
  
    if (!recordToUpdate) {
      console.error(`Record with id ${id} not found.`);
      return;
    }
  
    const updatedArtist = prompt('Enter the updated artist:', recordToUpdate.artist);
    const updatedTitle = prompt('Enter the updated title:', recordToUpdate.title);
    const updatedDuration = prompt('Enter the updated duration:', recordToUpdate.duration);
  
    if (updatedArtist && updatedTitle && updatedDuration) {
      dispatch(updateMusicList({ id, updatedArtist, updatedTitle, updatedDuration }));
    }
  };
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewRecord((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddMusic = () => {
    const newRecordId = Math.max(...musicLists.map((record) => record.id)) + 1;

    const newMusicRecord = {
      id: newRecordId,
      artist: newRecord.artist,
      title: newRecord.title,
      duration: newRecord.duration,
      image: newRecord.image,
    };

    dispatch(addMusicList(newMusicRecord));

    setNewRecord({ artist: '', title: '', duration: '', image: '' });
  };

  return (
    <MusicSection>
      <Title>
        <h2>Trending Musics on <span>Kirub Music</span></h2>
      </Title>
      {Records.map((record) => (
        <MusicBox key={record.id}>
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
            src={playingState[record.id] ? pauseButtonImage : playButtonImage}
            alt={playingState[record.id] ? 'Pause' : 'Play'}
            style={{ width: '30px', height: '30px', cursor: 'pointer' }}
            onClick={() => togglePlayPause(record.id)}
          />
          <img
            src={deleteimg}
            alt="delete"
            style={{ width: '30px', height: '30px', paddingRight: '5px', paddingLeft: '100px', cursor: 'pointer' }}
            title="Delete Item"
            onClick={() => handleDelete(record.id)}
          />
          <img
            src={updateimg}
            alt="update"
            style={{ width: '50px', height: '30px', paddingRight: '0px', paddingLeft: '5px', cursor: 'pointer' }}
            title="Update Item"
            onClick={() => handleUpdate(record.id)}
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
