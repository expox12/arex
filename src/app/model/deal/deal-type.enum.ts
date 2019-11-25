export enum DealType {
    Acquisition,
    Financing,
    Leasing,
    Development
}

export type DealEnumType =
    DealType.Acquisition |
    DealType.Financing |
    DealType.Leasing |
    DealType.Development