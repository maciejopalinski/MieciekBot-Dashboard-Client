import React from 'react';
// import { Spinner } from 'react-bootstrap';

import { UserData } from '../../data';

import './styles.css';

export const HomePage = ({ user } : { user: UserData }) => {

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

            {/* TODO: delete this debug line, it will be moved to dashboard page */}
            {/* <div>
                { user.error?.response?.status == 429 && `Too many requests. Stop it! ` }
                { user.isError && `You are not logged in.` }
                { user.isLoading && <Spinner animation='border' /> }
                { user.isSuccess && `${user.data?.username}#${user.data?.discriminator}` }
                { user.isSuccess &&
                    <div className='mutual-guilds'>
                        {user.data?.mutual_guilds?.map(g => <p key={g.id}>{g.name}</p>)}
                    </div>
                }
            </div> */}

            { user.isSuccess && user.getAvatar(1024) }
        </div>
    );
}