import axios from "axios";
import { AppDispatch } from "../store";
import {catalogSlice, catalogState} from "./catalogSlice";



export const getCatalog = () => async (dispatch: AppDispatch) => {
    const res = await axios.get<catalogState>(`https://artisant.io/api/products`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })


    dispatch(catalogSlice.actions.setCatalog(res.data.data.products))


}