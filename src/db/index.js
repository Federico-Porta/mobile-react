/*import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('sessions.db')

export const init = () =>{
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx =>{
            tx.executeSql('CTREATE TABLE IF NOT EXIST sessions (localId TEXT PRIMARY KEY NOT NULL , email TEXT NOT NULL, token TEXT NOT NULL)'),
           
            () => resolve(),
            (_, error) => {
                reject(error)
            }),
            
        })
    })
*/