


export abstract class UserContracts{
    abstract findAll(): Promise<any>;
    abstract create(body: any): Promise<any>
}