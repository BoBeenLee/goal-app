import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'
import { appSchema, Database, tableSchema } from '@nozbe/watermelondb';

import Project from "./Project";
import { generate } from './generate';

export const mySchema = appSchema({
    version: 1,
    tables: [
        tableSchema({
            name: 'project',
            columns: [
                { name: 'project_name', type: 'string' },
                { name: 'templates_json', type: 'string', isOptional: true },
                { name: 'motivate_text', type: 'string', isOptional: true },
                { name: 'created_at', type: 'number' },
                { name: 'updated_at', type: 'number' }
            ]
        }),
        tableSchema({
            name: 'project_day',
            columns: [
                { name: 'project_id', type: 'string', isIndexed: true },
                { name: 'day', type: 'string' },
                { name: 'templates_json', type: 'string', isOptional: true },
                { name: 'created_at', type: 'number' }
            ]
        })
    ]
});

const adapter = new SQLiteAdapter({
    dbName: 'GoalDB',
    schema: mySchema,
});

const database = new Database({
    adapter,
    modelClasses: [Project],
});

generate(database);

export default database;
