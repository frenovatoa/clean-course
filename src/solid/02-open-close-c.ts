//* Si se remueve la dependencia de axios, solo esta clase se verá afectada.

export class HttpClient {
    // async get(url: string) {
    //     const { data, status } = await axios.get(url);
    //     console.log(`GET ${url} - ${status}`);
    //     return { data, status };
    // }
    async get(url: string) {
    
        const resp = await fetch(url);
        const data = await resp.json();

        return { data, status: resp.status };
    }
}