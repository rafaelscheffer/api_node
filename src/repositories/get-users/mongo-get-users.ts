import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
    async getUsers(): Promise<User[]> {
        return [
            {
                firstName: 'Rafael',
                lastName: 'Scheffer',
                email: 'rafamscheffer@gmail.com',
                password: '123'
            }
        ]
    }
}