import { DataSource, DataSourceOptions } from "typeorm";
import { Utente } from "./Utente";



const options: DataSourceOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "nelson1970",
    database: "dbtest",
    synchronize: true,
    logging: true,
    entities: [Utente],
    subscribers: [],
    migrations: [],
}

export const AppDataSource = new DataSource(options)