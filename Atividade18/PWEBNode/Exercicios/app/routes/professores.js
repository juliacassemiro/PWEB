module.exports = function (app) {
    app.get('/informacao/professores', function (req, res) {
        const sql = require('mssql/msnodesqlv8');
        const sqlConfig = {
            user: 'BD2211010',
            password: 'A12345678a',
            database: 'BD', //Na FATEC, utilizar o database BD ou LP8 
            server: '192.168.1.6',//Caso o nome tenha uma instância, colocar duas barras, ex: ‘DESKTOP\\SQLSERVER.Na FATEC, utilizar o ip: 192.168.1.6 no nome do servidor
        }

        async function getProfessores() {
            try {
                const pool = await sql.connect(sqlConfig);

                const results = await pool.request().query('SELECT * from PROFESSORES');

                res.send(results.recordsets);

            } catch (err) {
                console.log(err);
            }
            res.render('informacao/professores', { profs: results.recordset });
        }
        getProfessores();
    });
} 