import { DealList } from '.';
import { dealMatchesSearchQuery, SortOrderType, SortNameType } from '..';
import { Deal } from '../deal/deal';

export function createDefaultDealList(): DealList {
    return {
        dealList: [],
        query: '',
        sort: { sortOrderType: SortOrderType.ASC, sortNameType: SortNameType.ID },
        page: 1
    };
}

function getFilteredDeals(dealListEntity: DealList) {
    return dealListEntity.dealList
        .filter(deal => dealMatchesSearchQuery(deal, dealListEntity.query))
}

export function getDeals(dealListEntity: DealList) {
    return Boolean(dealListEntity) ? sortValues(dealListEntity) : [];
}

export function getDeal(dealListEntity: DealList, id: string) {
    return Boolean(dealListEntity) ?
        dealListEntity.dealList.find(deal => deal.id === id) :
        null;
}

function sortValues(dealListEntity: DealList) {
    let dealList: Array<Deal>;
    if(dealListEntity.sort.sortNameType === SortNameType.PRICE) {
        dealList = getFilteredDeals(dealListEntity).sort(compareValues('price', dealListEntity.sort.sortOrderType));
    }else if(dealListEntity.sort.sortNameType === SortNameType.DEAL_TYPE) {
        dealList = getFilteredDeals(dealListEntity).sort(compareValues('type', dealListEntity.sort.sortOrderType));
    }else if(dealListEntity.sort.sortNameType === SortNameType.DUE_DATE) {
        dealList = getFilteredDeals(dealListEntity).sort(compareValues('dueDate', dealListEntity.sort.sortOrderType));
    }
    return dealList;
  }

function compareValues(key, order = SortOrderType.ASC) {
    return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
            return 0;
        }

        const varA = (typeof a[key] === 'string')
            ? a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string')
            ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return (
            (order === SortOrderType.DESC) ? (comparison * -1) : comparison
        );
    };
}