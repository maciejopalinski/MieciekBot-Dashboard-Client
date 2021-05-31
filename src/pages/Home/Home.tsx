import './Home.css';

export const HomePage = () => {

    return (
        <main className='app center'>

            <img
                className='mieciekbot-avatar'
                src='https://cdn.discordapp.com/avatars/511219391539445761/067aec30675c8483654c344bfabd2c19.png?size=4096'
                alt='MieciekBot Avatar'
                draggable={false}
            />
            <h1 className='header-home'>MieciekBot</h1>
            <p className='description-home'>Includes moderation, leveling, music and much more!</p>

        </main>
    );
}