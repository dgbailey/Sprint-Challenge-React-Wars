import React from 'react';

const CharacterCard = (props) => {

    return(
        <div className='card-container'>
            <div className='img-container'>
                
                </div>
            <div className='bio-container'>
                <h3>{props.name}</h3>
                <div className='biostats'>
                    <h4>Physical Characteristics</h4>
                    <ul className='stats'>
                        <li>{props.all.hair_color}</li>
                        <li>{props.all.eye_color}</li>
                        <li>{props.all.gender}</li>
                        <li>{props.all.height}</li>
                        <li>{props.all.weight}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CharacterCard;