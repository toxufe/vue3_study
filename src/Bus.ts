
interface BusClass {
    emit: (event: string) => void;
    on: (event: string, callback: () => void) => void;
}

type ParamsKey = string | number | symbol;
type List = {
    [key: ParamsKey]: Array<Function>
}


class Bus implements BusClass {
    list: List;
    constructor() {
        this.list = {};
    }
    emit(event: string, ...args: Array<Function>) {
        const fns = this.list[event];
        fns.forEach(fn => {
            fn.apply(this, args);
        })
    }
    on(event: string, callback: Function) {
        const fns:Array<Function> = this.list[event] || [];
        fns.push(callback);
        this.list[event] = fns;

       
    }
}

export default new Bus();