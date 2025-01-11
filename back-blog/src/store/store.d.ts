export type IStoreRecord<WithType extends object = {}> = WithType & {
    dateCreated: string
    content: string;
    title: string
}

export type IStore = Record<string, IStoreRecord[]>