import axios from 'axios';


// tengo mi instancia de axios para hacer las peticiones a la api de github
// es la base de mis peticiones
export const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization:'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'
    }
});
