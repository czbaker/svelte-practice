export interface GHRepo {
    name: string;
    desc: string;
    language?: string;
    license?: string;
    url: string;
}

export interface GHError {
    name?: string;
    desc?: string;
}

export interface GHState {
    repos?: GHRepo[]
    selectedIndex: number;
}

