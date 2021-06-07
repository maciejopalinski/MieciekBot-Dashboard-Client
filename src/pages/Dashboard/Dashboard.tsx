import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import { fetchGuildConfig, fetchMutualGuilds } from '../../data';
import { DashboardForm, Spinner } from '../../components';

export const DashboardPage = () => {

    const { id } = useParams<{ id: string }>();

    const { data, isSuccess } = useQuery(`/guilds/${id}/config`, () => fetchGuildConfig(id), {
        refetchOnWindowFocus: false
    });
    const mutual_guilds = useQuery(`/guilds/mutual`, fetchMutualGuilds);

    if(isSuccess && mutual_guilds.isSuccess) {

        const guild_config = data!.data;
        const guild_discord_data = mutual_guilds.data.data.find(g => g.id === id)!;

        return (
            <main className='app'>

                <h1>{guild_discord_data.name} - Dashboard</h1>

                <DashboardForm config={guild_config} />

            </main>
        );
    }
    else {
        return <Spinner />;
    }
}