import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import { AxiosResponse, AxiosError } from 'axios';
import { fetchMutualGuilds, IGuild } from '../../data';
import { Guild, Spinner } from '../';
import './GuildsWrapper.css';

export const GuildsWrapper = () => {

    let history = useHistory();

    const { data, isSuccess } = useQuery<AxiosResponse<IGuild[]>, AxiosError>('/guilds/mutual', fetchMutualGuilds, {
        retry: (failureCount, error) => error.response?.status === 429,

        onError: (err) => {
            if (err.response?.status === 401 && window.location.pathname !== '/') {
                console.log('[INFO] Not logged in. Redirecting to /');
                history.push('/');
            }
        }
    });

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