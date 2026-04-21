function fazerRequisicao(url: string, method: 'GET' | 'POST') {
    // ...
}

type RequestDetails = {
    url: string,
    method: 'GET' | 'POST'
};

let req: RequestDetails = {
    url: 'https://www.google.com',
    method: 'GET'
};

fazerRequisicao(req.url, req.method);