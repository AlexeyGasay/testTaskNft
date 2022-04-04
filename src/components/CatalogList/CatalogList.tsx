import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getCatalog } from '../../redux/reducers/AsyncAction';
import CatalogItem from '../catalog/CatalogItem/CatalogItem';
import styels from "./catalog-list.module.scss"

const CatalogList: FC = () => {

    const dispatch = useAppDispatch();
    const { products } = useAppSelector(state => state.catalogReucer.data);
    const { isAviable } = useAppSelector(state => state.catalogReucer);


    useEffect(() => {
        dispatch(getCatalog());
    }, [])



    return (
        <div className={styels.catalogList}>
            {products.map((i) => {
                if (!isAviable && i.quantity_available > 0) {
                    return <CatalogItem
                        key={i.product_id}
                        product_id={i.product_id}
                        created_by={i.created_by}
                        initial_price={i.initial_price}
                        name={i.name}
                        quantity_available={i.quantity_available}
                    />
                }
                else if (isAviable) {
                    return <CatalogItem
                        key={i.product_id}
                        product_id={i.product_id}
                        created_by={i.created_by}
                        initial_price={i.initial_price}
                        name={i.name}
                        quantity_available={i.quantity_available}
                    />
                }
            })}
        </div>
    );
};

export default CatalogList;
