import { useQuery } from 'react-query';
import { Guild, Spinner } from '../';
import { fetchMutualGuilds } from '../../data';
import './GuildsWrapper.css';

export const GuildsWrapper = () => {

    const { data, isSuccess } = useQuery('/guilds/mutual', fetchMutualGuilds);

    if(isSuccess) {
        // logged in
        const guilds = data!.data;

        return (
            <div className='guilds'>
                {guilds.map(guild => (
                    <Guild guild={guild} key={guild.id} />
                ))}
            </div>
        );
    }
    else {
        // loading
        return <Spinner />;
    }
}