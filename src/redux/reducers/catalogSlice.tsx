import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import React, { ReactChild } from "react";

export interface ICatalogItem {
    name: string;
    quantity_available: number;
    initial_price: number;
    product_id: number;
    created_by: {
        display_name: string;
    }

}

export interface catalogState {
    data: {
        products: ICatalogItem[]
    },

    isAviable: boolean;
}

const initialCatalog: catalogState = {
    data: {
        products: []
    },

    isAviable: false
}

export const catalogSlice = createSlice({
    name: "catalog",
    initialState: initialCatalog,
    reducers: {
        setCatalog(state, action) {
            state.data.products = action.payload;
        },

        setAviable(state, action: PayloadAction<boolean>) {
            state.isAviable = action.payload;
        }
    }
})

export default catalogSlice.reducer;