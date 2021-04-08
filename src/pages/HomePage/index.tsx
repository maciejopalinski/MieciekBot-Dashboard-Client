import React from 'react';

import './styles.css';

export const HomePage = () => {
    
    return (
        <div className='app'>
            <img
                className='mieciekbot-img'
                src='https://cdn.discordapp.com/avatars/511219391539445761/067aec30675c8483654c344bfabd2c19.png?size=4096'
                alt='MieciekBot Avatar'
                draggable={false}
            />
            <h1 className='mieciekbot-name'>MieciekBot</h1>
            <p className='mieciekbot-desc'>Includes moderation, leveling, music and much more!</p>
        </div>
    );
}