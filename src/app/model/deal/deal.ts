import { DealType } from './deal-type.enum';

export interface Deal {
    id: string,
    name: string,
    address: string,
    price: number,
	type: DealType,
    dueDate: string
    fav: boolean
}


