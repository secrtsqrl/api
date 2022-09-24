import express from 'express'
import cors from 'cors'
import mariadb from 'mariadb'

// customise for you
// e.g. yours will be host: 'localhost'
const DB = {
    host: 'mariadb',
    user: 'api',
    port: '3306',
    password: 'tiger',
    database: 'project',
}

const app = express()
const port = 8080

app.use(cors({origin: 'null'}))

const pool = mariadb.createPool({
    ...DB,
    connectionLimit: 5,
});

app.get('/people', async (req, res) => {
    console.log(req.headers)
    let conn
    try {
        conn = await pool.getConnection()
        const rows = await conn.query('select * from people')
        res.send(rows)
    }
    catch(e) {
        console.log(e)
        res.status(500).send('An error occured');
    }
    finally {
        conn.release()
    }
})

app.listen(port, () => console.log(`Listening on port ${port}`))
