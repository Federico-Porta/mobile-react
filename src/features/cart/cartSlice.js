import { createSlice, current } from "@reduxjs/toolkit";


const initialState = {
    user: "userLogged",
    updatedAt: Date.now().toLocaleString(),
    items: [],
    total: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) =>{
            const productRepeated = state.items.find(item => item.id === action.payload.id)

      
           if(productRepeated){
            const itemmsUpdated = state.items.map(item => {
                if(item.id === action.payload.id){
                    item.quantity += action.payload.quantity
                    return item
                }
                return
            })
            
            const total = itemmsUpdated.reduce(
                (acc, current) => (acc += current.price * current.quantity),0
            )
            state = {
                ...state,
                items: itemmsUpdated,
                total,
                updatedAt: new Date().toLocaleString()
                
            }
        }else{
            state.items.push(action.payload)
            const total = state.items.reduce(
                (acc, current) => (acc += current.price * current.quantity)
            )
            state = {
                ...state,
                total,
                updatedAt: new Date().toLocaleString()
            }
        }
    },
    removeItem: (state, action) => {
      
        const index = state.items.findIndex(item => item.id === action.payload);
        
        if (index !== -1) {
           
            state.items.splice(index, 1);

          
            const total = state.items.reduce(
                (acc, current) => (acc += current.price * current.quantity),0
            );

            state.total = total;
            state.updatedAt = new Date().toLocaleString();
        }
    },
    clearCart: (state) => {
        state.items = [];
        state.total = null;
        state.updatedAt = new Date().toLocaleString();
      },
    
},
})

export const {addItem, removeItem, clearCart} = cartSlice.actions

export default cartSlice.reducer