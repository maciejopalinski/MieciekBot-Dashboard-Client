import { AxiosError } from 'axios';
// import { useHistory } from 'react-router';
import { useQuery, UseQueryOptions, UseQueryResult, QueryFunction } from 'react-query';

export const API = (endpoint: string) => process.env.REACT_APP_API_URL + endpoint;
export const CDN = (endpoint: string) => 'https://cdn.discordapp.com' + endpoint;

export class BaseDataHandler<TData> {

    key: string;
    options: UseQueryOptions<TData, AxiosError>;

    query: UseQueryResult<TData, AxiosError> = undefined as any;

    constructor(key: string, options: UseQueryOptions<TData, AxiosError> = {}) {
        this.key = key;
        this.options = options;

        // TODO: redirect
        // eslint-disable-next-line react-hooks/rules-of-hooks
        // const history = useHistory();

        this.options = {
            retry: (failCount, err) => err.response?.status === 429,

            onError: (err) => {
                if(err.response?.status === 401 && window.location.pathname !== '/') {
                    // history.push('/');
                    console.log('[INFO] Not logged in. Redirecting to /.')
                }
            },

            ...this.options
        };
    }

    fetch(handler: QueryFunction<TData>) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        this.query = useQuery<TData, AxiosError>(this.key, handler, this.options);
    }

    get isSuccess() { return this.query.isSuccess }
    get isLoading() { return this.query.isLoading }
    get isError() { return this.query.isError }
    get data() { return this.query.data }
    get error() { return this.query.error }
}