import { Observable } from "rxjs";

export interface DatabaseProvider {
    bulkinsert(data: Observable<any>);
    query();

}
