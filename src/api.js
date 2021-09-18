let BASE = 'https://api.b7web.com.br/devsfood/api';

export default {
    getCategories: async () => {
        const res = await fetch(BASE + '/categories');
        // Convertento a resposta pra um JSON
        const json = await res.json();
        return json;
    },

    getProducts: async (category, page, search) => {
        // GET /products ([search, page, category])

        // Criando um objeto que irá armazenar os valores recebidos;
        let fields = {};

        if (category !== 0) {
            fields.category = category;
        }
        if (page > 0) {
            fields.page = page;
        }
        if (search != '') {
            fields.search = search;
        }

        // Transformando o objeto fields dem queryString
        let queryString = new URLSearchParams(fields).toString();

        const res = await fetch(BASE + '/products?' + queryString);
        // Convertento a resposta pra um JSON
        const json = await res.json();
        return json;
    }
};