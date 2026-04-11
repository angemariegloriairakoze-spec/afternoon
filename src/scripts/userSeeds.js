import {createUserTable} from "../database/migrations/users.js";
import { seedUsers } from "../database/seeds/user.js";


const runSeed = async() =>{
    try {
        await createUserTable();
        await seedUsers();
        console.log("seeds data inserted successfully");
        process.exit(0)
    }
    catch (erro){
        console.error("failed to seed users", error)
    }
};
runSeed();