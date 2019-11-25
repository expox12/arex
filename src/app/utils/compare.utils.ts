import { SortOrderType } from "../model";


export function compareNumber(a, b, order: SortOrderType) {
    return order === SortOrderType.ASC ? a-b : b-a;
}

export function compareText(a, b, order: SortOrderType) {
    const A = a.toUpperCase();
    const B = b.toUpperCase();

    let comparison = 0;
    if (A > B) {
        comparison = 1;
    } else if (A < B) {
        comparison = -1;
    }
    return (
        (order == SortOrderType.DESC) ? (comparison * -1) : comparison
    );
}