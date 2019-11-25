import { Deal, Sort } from '..';

export interface DealList {
    dealList: Array<Deal>,
    query: string,
    sort: Sort,
    page: number
}
