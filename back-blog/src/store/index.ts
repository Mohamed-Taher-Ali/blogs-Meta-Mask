import { IStore, IStoreRecord } from "./store";

class Store {
    private store: IStore

    constructor() {
        this.store = {}
    }

    addNewBlog = (address: string, record: IStoreRecord): void => {
        if(!this.store[address]) this.store[address] = [record]
        this.store[address].unshift(record)
    }

    getUserBlogs = (address: string): IStoreRecord[] => {
        return this.store[address] || []
    }
    
}

export const store = new Store()