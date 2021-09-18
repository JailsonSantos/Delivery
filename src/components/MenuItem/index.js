import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { LinkArea, LinkIcon } from './styled';

export default ({ title, icon, link }) => {
    const history = useHistory();
    const locate = useLocation();

    // Verifica qual o link está ativo
    let isActive = locate.pathname === link;

    // Direciona para um link, sem recarregar a página toda.
    const handleLinkClick = (e) => {
        e.preventDefault();
        history.push(link);
    }

    return (
        <LinkArea data-tip={title} data-for="tip-right" active={isActive} href={link} onClick={handleLinkClick}>
            <LinkIcon src={icon} />
        </LinkArea>
    );
}