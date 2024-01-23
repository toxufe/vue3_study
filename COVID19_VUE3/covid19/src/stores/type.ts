
export interface ChinaAdd {
    confirm: number;
    suspect?: any;
    heal: number;
    dead: number;
    severe?: any;
    storeConfirm: number;
    input: number;
}

export interface ChinaTotal {
    confirm: number;
    suspect: number;
    heal: number;
    dead: number;
    severe: number;
    input: number;
}

export interface ExtData {
    noSymptom: number;
    incrNoSymptom: number;
}

export interface ChinaTotal {
    today: ChinaAdd;
    total: ChinaTotal;
    extData: ExtData;
}

export interface ChinaTodayAdd {
    confirm: number;
    suspect: number;
    heal: number;
    dead: number;
    severe: number;
    storeConfirm?: any;
}

export interface Total {
    confirm: number;
    suspect: number;
    heal: number;
    dead: number;
    severe: number;
    input: number;
}

export interface ChinaDayList {
    date: string;
    today: Today;
    total: Total;
    extData?: any;
    name: string,
    id: string,
    lastUpdateTime?: any;
}

export interface Today {
    confirm: number;
    suspect?: any;
    heal: number;
    dead: number;
    severe?: any;
    storeConfirm?: any;
}

export interface Total {
    confirm: number;
    suspect: number;
    heal: number;
    dead: number;
    severe: number;
    input: number;
}

export interface ExtData { }

export interface AreaTree {
    today: Today;
    total: Total;
    extData: ExtData;
    name: string;
    id: string;
    lastUpdateTime: string;
    children: any[];
}

export interface RootObject {
    chinaTotal: ChinaTotal;
    chinaDayList: ChinaDayList[];
    lastUpdateTime: string;
    overseaLastUpdateTime: string;
    areaTree: AreaTree[];
}