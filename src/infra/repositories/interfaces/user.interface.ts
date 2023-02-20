export abstract class UserInterface {
    abstract findAll(): Promise<any>;
    abstract createUser(data: any): Promise<any>
}