import { defineStore } from 'pinia'
import {ref,computed} from "vue";

export const useCounterStore = defineStore('counter', () =>{

    const count= ref(0);

    const increment=()=>{
        count.value++;
    };

    const double=computed(()=>
        count.value*2)


    return {

        count,
        increment,
        double
    }
  
});
/*export const useCounterStore = defineStore('counter', {

    //Reactividad
    state:() =>({

        count:0
    }),

    //Metodos
    actions:{
        increment(){
            this.count++;
        }
    },

    //Computable
    getters:{

        double:(state)=>state.count*2
    }
})*/