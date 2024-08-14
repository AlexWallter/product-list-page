import {create} from 'zustand'

export const useOrderstore = create((set)=>({
    order: [],
    numOfItems:0,
    totalCost:0,

    newItem: (shname)=> set((state)=>({
        order: [...state.order, shname],
        numOfItems: state.numOfItems+1,
        totalCost: state.totalCost+Number(shname.price.replace('$','')),
    })),

    addItem: (key, price) => set((state)=>({
        order: [...state.order.map((e)=>{
            if(e.id == key) {
                return {...e, times: e.times+1}
            } else {
                return e
            }
        })],
        numOfItems: state.numOfItems+1,
        totalCost: state.totalCost+Number(price),
    })),

    subItem: (key, price) => set((state)=>({
        order: [...state.order.map((e)=>{
            if(e.id == key && e.times>0) {
                return {...e, times: e.times-1}
            }
            else {
                return e
            }
        })],
        numOfItems: state.numOfItems-1,
        totalCost: state.totalCost-Number(price),
    })),

    deleteItem:(key, quantity, cost)=> set((state)=>({
        order:[...state.order.filter((e)=>{
            if(e.name !== key) {
                return e
            }
            return
        })],
        numOfItems: state.numOfItems-quantity,
        totalCost: state.totalCost - cost,
    })),

    resetOrder:()=> set(()=>({
        order:[],
        numOfItems: 0,
        totalCost: 0,
    }))
}))