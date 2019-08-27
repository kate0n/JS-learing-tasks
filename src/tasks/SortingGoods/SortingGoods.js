import React from 'react';

import SortingGoodsContainer from './SortingGoodsContainer';

export const SortingGoods = () => (
    <SortingGoodsContainer 
        title={'КОМПОНЕНТ СОРТИРОВКИ ТОВАРА'}
        baseClass={'sortButton '}
        activeClass={'active'}
        tabs={['по возрастанию', 'по рейтингу', 'по цене', 'по наличию']}
    />
);


export default SortingGoods;