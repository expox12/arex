import { Deal } from './deal';

function textMatchesSearchQuery(text: string, searchQuery: string) {
    return text ?
        text.toLowerCase().includes(searchQuery.toLowerCase()) : 
        false;
}

export function dealMatchesSearchQuery(deal: Deal, searchQuery: string) {
    if (!Boolean(deal)) {
        return false;
    }

    return Boolean(searchQuery) ?
        textMatchesSearchQuery(deal.name, searchQuery) ||
        textMatchesSearchQuery(deal.address, searchQuery) ||
        textMatchesSearchQuery(deal.price.toString(), searchQuery) ||
        textMatchesSearchQuery(deal.type.toString(), searchQuery) ||
        textMatchesSearchQuery(deal.dueDate, searchQuery) :
        true;
}
  