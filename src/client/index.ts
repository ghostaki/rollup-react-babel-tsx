export module Dtos {

    ///************* Enums *****************

    export enum OwnerSortField {
        FirstName = 1,
        LastName = 2,
        DisplayName = 3
    }

    ///************* Dtos *****************
    export interface OwnerDetailQuery {
        id: number;
        name: string;
        date: Date;
    }

}

export module Apis {

    ///************* Apis *****************
    export class DataApi {
        public get(): number {
            console.log("hey");
            return 4;
        }
    }

}


