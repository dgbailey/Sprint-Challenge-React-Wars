import React from 'react';


import './CharacterCard.css';

const CharacterCard = (props) => {

    return(
        <div className='card-container'>
            <div className='hex-container'>
                
                
                <div className='bio-container'>
                    <h3>{props.name}</h3>
                    <div className='biostats'>
                        <h4>Physical Characteristics</h4>
                        <ul className='stats'>
                            <li>Hair color: {props.all.hair_color}</li>
                            <li>Eye color: {props.all.eye_color}</li>
                            <li>Gender: {props.all.gender}</li>
                            <li>Geight: {props.all.height}</li>
                            <li>Mass: {props.all.mass}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CharacterCard;