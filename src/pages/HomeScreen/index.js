import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import ReactTooltip from 'react-tooltip';
import {
    Container,
    CategoryArea,
    CategoryList,
    ProductArea,
    ProductList,
    ProductPaginationArea,
    ProductPaginationItem,
} from './styled';

import api from '../../api';

import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';
import ProductItem from '../../components/ProductItem';
import Modal from '../../components/Modal';
import ModalProduct from '../../components/ModalProduct';

let searchTimer = null;

export default ({ data }) => {
    const history = useHistory();
    const [headerSearch, setHeaderSearch] = useState('');
    const [categories, setCatetories] = useState([]);
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    const [modalStatus, setModalStatus] = useState(false);
    const [modalData, setModalData] = useState({});

    // Monitora quem é a categoria que está ativa
    const [activeCategory, setActiveCategory] = useState(0);
    const [activePage, setActivePage] = useState(1);
    const [activeSearch, setActiveSearch] = useState('');

    const getProducts = async () => {
        const prods = await api.getProducts(activeCategory, activePage, activeSearch);
        if (prods.error === '') {
            setProducts(prods.result.data);
            setTotalPages(prods.result.pages);
            setActivePage(prods.result.page);
        }
    }

    // Esse useEffect para o timer que está rodando, e inicia outro para poder monitorar as letras qeu estão sendo digitadas na busca.
    useEffect(() => {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(() => {
            setActiveSearch(headerSearch)
        }, 2000);
    }, [headerSearch]);

    useEffect(() => {
        const getCategories = async () => {
            const cat = await api.getCategories();
            if (cat.error === '') {
                setCatetories(cat.result);
            }
            //Recarrega para mostrar os tooltips
            ReactTooltip.rebuild();
        };
        getCategories()
    }, []);


    // Esse UseEffect monitora, as categorias, paginas e buscas ativas.
    useEffect(() => {
        setProducts([])
        getProducts();
    }, [activeCategory, activePage, activeSearch]);

    const handleProductClick = (data) => {
        setModalData(data);
        setModalStatus(true);
    }

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />

            {categories.length > 0 &&
                <CategoryArea>
                    Seleciona uma categoria
                        <CategoryList>
                        <CategoryItem
                            data={{
                                id: 0,
                                name: 'Todas as categorias',
                                image: '/assets/food-and-restaurant.png'
                            }}
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                        />
                        {categories.map((item, index) => (
                            <CategoryItem
                                key={index}
                                data={item}
                                activeCategory={activeCategory}
                                setActiveCategory={setActiveCategory}
                            />
                        ))}
                    </CategoryList>
                </CategoryArea>
            }
            {products.length > 0 &&
                <ProductArea>
                    <ProductList>
                        {products.map((item, index) => (
                            <ProductItem
                                key={index}
                                data={item}
                                onClick={handleProductClick}
                            />
                        ))}
                    </ProductList>
                </ProductArea>
            }
            {totalPages > 0 &&
                <ProductPaginationArea>
                    {Array(totalPages).fill(0).map((item, index) => (
                        <ProductPaginationItem
                            key={index}
                            active={activePage}
                            current={index + 1}
                            onClick={() => setActivePage(index + 1)}
                        >
                            {index + 1}
                        </ProductPaginationItem>
                    ))}
                </ProductPaginationArea>
            }

            <Modal status={modalStatus} setStatus={setModalStatus}>
                <ModalProduct data={modalData}  setStatus={setModalStatus}/>
            </Modal>
        </Container>
    );
}