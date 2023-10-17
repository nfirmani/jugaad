
import http from "./http-common";
import IFruit from "./fruit.type";

class FruitDataService {
  getAll() {
    return http.get<Array<IFruit>>("/fruits");
  }

  get(id: string) {
    return http.get<IFruit>("/fruits/${id}");
  }

  create(data: IFruit) {
    return http.post<IFruit>("/fruits", data);
  }

  update(data: IFruit, id: any) {
    return http.put<any>("/fruits/${id}", data);
  }

  delete(id: any) {
    return http.delete<any>("/fruits/${id}");
  }

  deleteAll() {
    return http.delete<any>("/fruits");
  }

  findByTitle(title: string) {
    return http.get<Array<IFruit>>("/fruits?title=${title}");
  }
}

export default new FruitDataService();