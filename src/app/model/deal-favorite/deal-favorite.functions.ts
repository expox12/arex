import { FavoritesList } from '.';

export function createDefaultFavoriteList(): FavoritesList {
    return {
        dealList: [],
        query: '',
        page: 1
    };
}