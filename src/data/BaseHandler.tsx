/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery, UseQueryOptions, UseQueryResult, QueryFunction } from 'react-query';
import { AxiosError } from 'axios';

export const API = (endpoint: string) => process.env.REACT_APP_API_URL + endpoint;
export const CDN = (endpoint: string) => 'https://cdn.discordapp.com' + endpoint;

export class BaseDataHandler<TData, TError = AxiosError> {

    key: string;
    options: UseQueryOptions<TData, TError>;

    query: UseQueryResult<TData, TError>;

    constructor(key: string, options: UseQueryOptions<TData, TError> = {}) {
        this.key = key;
        this.options = options;

        this.query = undefined as any;
    }

    fetch(handler: QueryFunction<TData>) {
        this.query = useQuery<TData, TError>(this.key, handler, this.options);
    }

    get isSuccess() { return this.query.isSuccess }
    get isLoading() { return this.query.isLoading }
    get isError() { return this.query.isError }
    get data() { return this.query.data }
    get error() { return this.query.error }
}