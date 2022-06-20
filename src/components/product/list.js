import React from "react";
import Loader from "../loader/loader";
import Pagination from "../pagination/pagination";
import ProductItem from "./listItem";

const ProductList = ({ products }) => (
    <section className="product-list">
        {products.length ?
            <div className="aem-Grid aem-Grid--12">
                {products.map((item) => <ProductItem {...item} />)}
            </div>
            : <Loader />
        }

        <Pagination />
    </section>
)


export default ProductList;