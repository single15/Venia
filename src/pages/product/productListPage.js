import React, { useEffect, useState } from 'react';
import Media from 'react-media';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../../components/banner/banner';
import Breadcrumb from '../../components/breadcrumb/breadcrumb';
import FilterMobile from '../../components/filter/filterMobile';
import ProductList from '../../components/product/list';
import { BREADCRUMB_LINKS } from '../utils';
import { updateProducts } from '../../reducer/product';
import './listPage.scss';
import FilterDesktop from '../../components/filter/filterDesktop';
import Dropdown from '../../components/dropdown/dropdown';
import { useLocation } from 'react-router-dom';
import { RECORDS_PER_PAGE } from '../../components/pagination/pagination';


const SORT_OPTION = [ 
    { id: "latest", value: 'Latest' }, 
    { id: "bestmatch", value: 'Best Match' },
    { id: "position", value: 'Position' },
    { id: "priceHighToLow", value: 'Price: High to Low' },
    { id: "priceLowToHigh", value: 'Price: Low to High' },
]

const useQuery = () => {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}


export default function ProductListPage() {
    const [products, setProducts] = useState([]);
    const resultCount = useSelector(store => store.products.listCount);
    const cacheProducts = useSelector(store => store.products.list);
    const dispatch = useDispatch();
    const query = useQuery();

    useEffect(() => {
        if (cacheProducts.length > 0) {
            setProducts(cacheProducts);
        } else {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then((data) => {
                    setProducts(data);
                    dispatch(updateProducts(data));
                });
        }
    }, [dispatch, cacheProducts])


    useEffect(() => {
        let productArray = [];
        const page = query.get("pageNumber");
        for(let i = (page-1) * RECORDS_PER_PAGE; i < (page * RECORDS_PER_PAGE) && i < cacheProducts.length; i++) {
            productArray.push(cacheProducts[i]);
        }
        setProducts(productArray);
    }, [cacheProducts, query])

    return (
        <article className='list-page'>
            <Banner label="Women's" />
            <Media query="(max-width: 1023px)">
                {matche => (
                    <>
                        {matche ?
                            <>
                                <div className='component-container'>
                                    <Breadcrumb links={BREADCRUMB_LINKS} />
                                    <FilterMobile />
                                    <ProductList products={products} />
                                </div>
                            </>
                            :
                            <div className='aem-Grid aem-Grid--12'>
                                <div className='aem-Grid aem-Grid--12 sort-section'>
                                    <div className='aem-GridColumn aem-GridColumn--default--3'>
                                        <Breadcrumb links={BREADCRUMB_LINKS} />
                                    </div>
                                    <div className='aem-Grid aem-Grid--12 aem-GridColumn aem-GridColumn--default--9'>
                                        <div className='aem-GridColumn aem-GridColumn--default--6'>
                                            <b>{resultCount} Results</b>                                            
                                        </div>
                                        <div className='aem-GridColumn aem-GridColumn--default--6 sorting-filter'>
                                            <Dropdown options={SORT_OPTION} />
                                        </div>
                                    </div>
                                </div>

                                <div className='aem-Grid aem-Grid--12'>
                                    <div className='aem-GridColumn aem-GridColumn--default--3'>
                                        <FilterDesktop />
                                    </div>
                                    <div className='aem-GridColumn aem-GridColumn--default--9'>
                                        <ProductList products={products} />
                                    </div>
                                </div>
                            </div>
                        }
                    </>
                )}
            </Media>
        </article>
    )
}