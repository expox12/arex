export enum SortOrderType {
    ASC, DESC
}

export enum SortNameType {
    ID, PRICE, DEAL_TYPE, DUE_DATE
}

export interface Sort {
    sortOrderType: SortOrderType,
    sortNameType: SortNameType
}

export const defaultSort: Sort = {
    sortOrderType: SortOrderType.ASC,
    sortNameType: SortNameType.ID
}