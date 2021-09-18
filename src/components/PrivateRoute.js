import React from 'react';
import { Route, useHistory } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';

// Rota privada
export default ({ children, ...rest }) => {
    const history = useHistory();
    const token = useSelector(state => state.user.token);

    // Verifica se tem um token, se não tiver direciona pra tela d elogin
    if (!token || token === '') {
        history.push('/login');
        return null;
    } else {

    }
    // Essa rota privada, é uma rota filho que herda tudo da rota normal.
    return <Route {...rest}>{children}</Route>;
}