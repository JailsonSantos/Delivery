import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    CartArea,
    CartHeader,
    CartBody,
    CartIcon,
    CartText,
    CartDown,
    ProductArea,
    ProductItem,
    ProductPhoto,
    ProductInfoArea,
    ProductName,
    ProductPrice,
    ProductQuantityArea,
    ProductQtIcon,
    ProductQtText,
    ProductAddress,
    ProductAddressTitle,
    ProductAddressComplement,
    ProductAddressPublicPlace,
    ProductAddressStateCity,
    ProductAddressIcon,
    ProductAreaAddress,
    ProductAreaCoupon,
    ProductTitleCoupon,
    ProductInputCoupon,

    ProductValuesArea,
    ProductAreaDiscount,
    Discount,
    ValuesDiscount,
    ProductButtomBuy
} from './styled';
export default () => {
    const products = useSelector(state => state.cart.products);
    const dispatch = useDispatch();
    const [show, setShow] = useState(true);
    const handleCartClick = () => {
        if (products.length > 0) {
            setShow(!show);
        }

    }
    
    const handleProductChange = (key, type) => {
        dispatch({
            type: 'CHANGE_PRODUCT',
            payload: { key, type }
        });
    }
    useEffect(() => {
        if (products.length == 0) {
            setShow(false);
        }
    }, [products.length])
    return (
        <CartArea>
            <CartHeader onClick={handleCartClick} >
                <CartIcon src="/assets/cart.png" />
                <CartText>
                    Meu Carrinho ({products.length})
 </CartText>
                {show &&
                    <CartDown src="/assets/down.png" />
                }
            </CartHeader>
            <CartBody show={show}>
                <ProductArea>
                    {products.map((item, index) => (
                        <ProductItem key={index}>
                            <ProductPhoto src={item.image} />
                            <ProductInfoArea>
                                <ProductName>{item.name}</ProductName>
                                <ProductPrice>R$ {((item.price) * item.qt).toFixed(2)}</ProductPrice>
                            </ProductInfoArea>
                            <ProductQuantityArea>
                                <ProductQtIcon
                                    src="/assets/minus.png"
                                    onClick={() => handleProductChange(index, '-')}
                                />
                                <ProductQtText>{item.qt}</ProductQtText>
                                <ProductQtIcon
                                    src="/assets/plus.png"
                                    onClick={() => handleProductChange(index, '+')}
                                />
                            </ProductQuantityArea>
                        </ProductItem>
                    ))}
                </ProductArea>

                <ProductAddressTitle>Entrega</ProductAddressTitle>
                <ProductAddress>
                    <ProductAreaAddress>
                        <ProductAddressComplement>Minha Casa</ProductAddressComplement>
                        <ProductAddressPublicPlace>Rua: Imperatriz, 255A</ProductAddressPublicPlace>
                        <ProductAddressStateCity>Olinda, PE</ProductAddressStateCity>
                    </ProductAreaAddress>
                    <ProductAddressIcon src="/assets/edit.png" />
                </ProductAddress>

                <ProductAreaCoupon>
                    <ProductTitleCoupon>Cupom de Desconto</ProductTitleCoupon>
                    <ProductInputCoupon />
                </ProductAreaCoupon>
                <ProductValuesArea>
                    <ProductAreaDiscount>
                        <Discount>Desconto</Discount>
                        <ValuesDiscount>R$ 0.00</ValuesDiscount>
                    </ProductAreaDiscount>
                    <ProductAreaDiscount>
                        <Discount>Taxa de Entrega</Discount>
                        <ValuesDiscount>R$ 0.00</ValuesDiscount>
                    </ProductAreaDiscount>
                    <ProductAreaDiscount>
                        <Discount>Total</Discount>
                        <ValuesDiscount>R$ 0.00</ValuesDiscount>
                    </ProductAreaDiscount>

                </ProductValuesArea>
                <ProductButtomBuy>FINALIZAR COMPRA</ProductButtomBuy>
            </CartBody>
        </CartArea>
    );
}