import React, { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {catalogSlice} from '../../redux/reducers/catalogSlice';
import styles from "./header.module.scss"


const Header: FC = () => {

    const dispatch = useAppDispatch();
    const {isAviable} = useAppSelector(state => state.catalogReucer);


    const handlerSearch = () => {
        dispatch(catalogSlice.actions.setAviable(!isAviable))
    }


    return (
        <div className={styles.header}>
            <h1 className={styles.header_explore}>Explore</h1>
            <h2 className={styles.sub_header}>Buy and sell digital fashion NFT art</h2>
            {isAviable &&  <button onClick={() => handlerSearch()}>Только в наличие</button>}
            {!isAviable &&  <button onClick={() => handlerSearch()}>Показать все</button>}
            
        </div>
    );
};

export default Header;