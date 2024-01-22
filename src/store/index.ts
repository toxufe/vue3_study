import { defineStore } from 'pinia'
import { Names } from './store-names';


type User = {
    name: string,
    age: number

}
let result: User = {
    name: '满神',
    age: 18
}


const Login = (): Promise<User> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(result);
        }, 2000)
    });
}

export const useTestStore = defineStore(Names.TEST, {
    state() {
        return {
            user: <User>{},
            name: '小飞机'
        }
    },
    // computed 可 缓存 修饰
    getters: {

    },
    // methods 可以同步 也可以异步
    actions: {
        // 同步方法
        setUser() {
            this.user = result;
        },
        async getUser() {
            this.user = await Login();
            this.setName("大飞机");
        },
        setName(name: string) {
            this.name = name;
        }
    }
});