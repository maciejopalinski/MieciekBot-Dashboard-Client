import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import { fetchGuildConfig } from '../../data';
import { DashboardForm, Spinner } from '../../components';

export const DashboardPage = () => {

    const { id } = useParams<{ id: string }>();

    const { data, isSuccess } = useQuery(`/guilds/${id}/config`, () => fetchGuildConfig(id));

    if(isSuccess) {

        const guild_config = data!.data;

        return (
            <main className='app'>

                <DashboardForm config={guild_config} />

            </main>
        );
    }
    else {
        return <Spinner />;
    }
}