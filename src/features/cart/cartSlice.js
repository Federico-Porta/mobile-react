import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: "userLogged",
    updatedAt: Date.now().toLocaleString(),
    items: [],
    total: 0, // Agrega un valor inicial de 0 para el total
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const productRepeated = state.items.find(item => item.id === action.payload.id);

            if (productRepeated) {
                const itemsUpdated = state.items.map(item => {
                    if (item.id === action.payload.id) {
                        item.quantity += action.payload.quantity;
                    }
                    return item;
                });

                const total = itemsUpdated.reduce(
                    (acc, current) => (acc += current.price * current.quantity),
                    0 // Valor inicial de 0 para la suma
                );

                state.items = itemsUpdated;
                state.total = total;
                state.updatedAt = new Date().toLocaleString();
            } else {
                state.items.push(action.payload);
                const total = state.items.reduce(
                    (acc, current) => (acc += current.price * current.quantity),
                    0 // Valor inicial de 0 para la suma
                );

                state.total = total;
                state.updatedAt = new Date().toLocaleString();
            }
        },
        removeItem: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload);

            if (index !== -1) {
                state.items.splice(index, 1);

                const total = state.items.reduce(
                    (acc, current) => (acc += current.price * current.quantity),
                    0 // Valor inicial de 0 para la suma
                );

                state.total = total;
                state.updatedAt = new Date().toLocaleString();
            }
        },
    },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
