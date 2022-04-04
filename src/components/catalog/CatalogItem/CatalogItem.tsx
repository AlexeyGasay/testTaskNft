import React, { useState } from 'react';
import { ICatalogItem } from '../../../redux/reducers/catalogSlice';
import styles from "./catalogItem.module.scss"


const CatalogItem = (props: ICatalogItem) => {

    const [search, setSearch] = useState<string>()

    return (
        <a href='#' className={styles.catalogItem}>
            <div className={styles.preview}>

                <div className={styles.author}>
                    <p className={styles.created_by}>created by</p>
                    <p className={styles.author}>
                        {props.created_by.display_name}
                    </p>
                </div>


                <div className={styles.name}>
                    <p>{props.name}</p>
                </div>

            </div>


            <div className={styles.price_quantity}>
                
                <div className={styles.quantity}>
                    <p className={styles.aviable}>aviable</p>
                    <p className={styles.quantity_available}>{props.quantity_available}</p>
                </div>


                <div className={styles.price}>
                    <p>price</p>
                    <p className={styles.price_value}>{props.initial_price}</p>
                </div>

            </div>

        </a>
    );
};

export default CatalogItem;