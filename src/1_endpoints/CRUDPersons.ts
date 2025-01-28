import { IPerson } from "../3_models/IPerson";

class CRUDPersons {
    private static persons: Map<number, IPerson> = new Map<number, IPerson>();

    private static size:number = -1;

    public static async insert(request:any, response:any) {
        try {
            const person:IPerson = request.body as IPerson;

            console.log(request.body);

            let no: number = this.size++;

            this.persons.set(no,person);

            console.log("Added : " + person.fullname)
            console.log("As NO : " + no)
            console.log("Size of map : " + this.persons.size)

            return response.status(201).json(person);

        } catch (e) {
            console.error(e);
        }
    }
}
export { CRUDPersons };