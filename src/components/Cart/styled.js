import styled from 'styled-components';

export const CartArea = styled.div`
    background-color: #005693;
    border: 1px solid;
    border-color: #fff;
    border-top-left-radius: 10px; // Coloca uma bordar curvada nas ponto superior da esquerda
    border-top-right-radius: 10px; // Coloca uma bordar curvada nas ponto superior da esquerda
    position: fixed; // Deixa a posição dele fixa em uma area
    bottom: 0px; // Tira todo espaço que estiver abaixo do componente.
    right: 30px; // Deixa um espaço de 30px do lado direito
`;
export const CartHeader = styled.div`
    width: 290px; // Colocando uma largura
    height: 50px; // Colocando uma altura
    display: flex; // Permite que os itens fiquem um ao lado do outro.
    align-items: center; // deixa um alinhamento no centro da altura
    cursor: pointer; // coloca um cursor diferente para apresentar um clique
`;
export const CartIcon = styled.img`
    width: 23px;
    height: auto;
    margin-left: 10px;
    margin-right: 10px;
`;
export const CartText = styled.text`
    flex: 1;
    color: #FFF;
    font-size: 17px;
`;
export const CartBody = styled.div`
    display: ${props => props.show ? 'block' : 'none'};
    color: #FFF;
`;
export const CartDown = styled.img`
    width: 23px;
    height: auto;
    margin-right: 10px;
`;
export const ProductArea = styled.div``;
export const ProductItem = styled.div`
    display: flex;
    margin: 10px;
`;
export const ProductPhoto = styled.img`
    width: 64px;
    height: auto;
    border-radius: 10px;
`;
export const ProductInfoArea = styled.div`
    flex: 1;
    margin-left: 10px;
`;
export const ProductName = styled.div`
    font-size: 15px;
    font-weight: bold;
`;
export const ProductPrice = styled.div`
    font-size: 13px;
`;
export const ProductQuantityArea = styled.div`
    display: flex;
    align-items: center;
`;
export const ProductQtIcon = styled.img`
    width: 13px;
    height: auto;
    cursor: pointer; 
`;
export const ProductQtText = styled.div`
    font-size: 13px;
    font-weight: bold;
    margin: 0 5px;
`;
export const ProductAddress = styled.div`
    margin-left: 10px;
    margin-right: 5px;
    display: flex;
    justify-content:center;
    align-items: center;
`;
export const ProductAddressTitle = styled.div`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
    margin-left: 10px;
`;
export const ProductAddressDescription = styled.div``;
export const ProductAddressComplement = styled.div`
    width: 170;
`;
export const ProductAddressPublicPlace = styled.div``;
export const ProductAddressStateCity = styled.div``;
export const ProductAddressIcon = styled.img`
    width: 20px;
    cursor: pointer;
    margin-left: 50px; 
    margin-right: 10px;
`;
export const ProductAreaAddress = styled.div`
    width: 207px;
    word-wrap: break-word;
    margin-bottom: 20px;
`;
export const ProductAreaCoupon = styled.div`
    margin-left: 10px;
    margin-bottom: 20px;
`;
export const ProductTitleCoupon = styled.div`
    font-weight: bold;
`;
export const ProductInputCoupon = styled.input`
    margin-top: 10px;
    border-radius: 10px;
    width: 267px;
    height: 20px;
`;
export const ProductValuesArea = styled.div`
    margin-left: 10px;
`;
export const ProductAreaDiscount = styled.div`
    display: flex;
    margin-bottom: 10px;
    font-weight: bold;
`;
export const Discount = styled.div`
    width: 215px;
`;
export const ValuesDiscount = styled.div`
 
`;
export const ProductButtomBuy = styled.button`
    border: 0;
    background-color: #fff;
    color: #005693;
    font-size: 15px;;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 50px;
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: 40px;
    padding-left: 30px;
    padding-right: 30px;
    cursor: pointer;
`;