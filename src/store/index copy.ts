import {defineStore} from 'pinia'
import { Names } from './store-names';

export const useTestStore = defineStore(Names.TEST,{
    state(){
        return {
            current:1,
            name:'满神'
        }
    },
    // computed 可 缓存 修饰
    getters:{
       
    },
    // methods 可以同步 也可以异步
    actions:{
       setCurrent(){
        this.current++;
       }
    }
});