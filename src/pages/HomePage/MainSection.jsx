import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductsContainer from './ProductsContainer';
import ProductFilters from './ProductFilters';

const MainSection = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    return (
        <>
            <ProductFilters setSearchParams={setSearchParams} />
            <ProductsContainer searchParams={searchParams} />
        </>
    );
};

export default MainSection;
