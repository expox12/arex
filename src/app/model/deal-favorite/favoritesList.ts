import { Deal } from '..';

export interface FavoritesList {
    dealList: Array<Deal>,
    query: string,  
    page: number
}