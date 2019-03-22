import React from 'react';
import CharacterCard from './CharacterCard';


import './CharacterList.css';

const CharacterList = (props) => {
    return (
        <div className = 'character-list-cont'>
        {props.masterList.map(
            (currentCharacter) => {
                return  (
                <CharacterCard 
                homeworld={currentCharacter.homeworld}
                name={currentCharacter.name}
                all={currentCharacter}/>
                );
                
            }
        )}
       
        </div>
    )
}

export default CharacterList;