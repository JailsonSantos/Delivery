import React, { useState } from 'react';
import { Container, Logo, SearchInput } from './styled';

export default ({ search, onSearch }) => {

    // Verifica se o campo de busca esta vazio ou preenchido
    const [inputActive, setInputActive] = useState(search === '' ? false : true);

    // Ativa quando o campo de busta estiver focado
    const handleInputFocus = () => {
        setInputActive(true);
    }

    // Desativa quando o campo de busca não estiver focado
    const handleInputBlur = () => {
        if (search === '') {
            setInputActive(false);
        }
    }

    // Controla as mudanças do campo de busca
    const handleChange = (e) => {
        onSearch(e.target.value);
    }
    return (
        <Container>
            <Logo src="assets/logo.png" />
            <SearchInput
                type="text"
                placeholder="Digite um produto..."
                value={search}
                onChange={handleChange}
                active={inputActive}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />
        </Container>
    );
}

