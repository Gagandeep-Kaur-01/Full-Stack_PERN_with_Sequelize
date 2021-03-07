import http from "../http-common";

class CollectionDataService {
    getAll() {
        return http.get("/collections");
    }

    get(id) {
        return http.get(`/collections/${id}`);
    }

    create(data) {
        return http.post("/collections", data);
    }

    update(id, data) {
        return http.put(`/collections/${id}`, data);
    }

    delete(id) {
        return http.delete(`/collections/${id}`);
    }

    deleteAll() {
        return http.delete(`/collections`);
    }

    findByTitle(title) {
        return http.get(`/collections?title=${title}`)
    }
}

export default new CollectionDataService();

// create a service that uses axios object above to send HTTP requests.