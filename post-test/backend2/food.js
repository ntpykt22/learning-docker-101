const Pool = require("pg").Pool;
const pool = new Pool({
    host: process.env.DB4_HOST,
    database: process.env.DB4_NAME,
    user: process.env.DB4_USER,
    password: process.env.DB4_PASSWORD,
    port: 5432,
});

const getFoods = async () => {
    try {
        return await new Promise(function (resolve, reject) {
            pool.query("SELECT * FROM foods", (error, results) => {
                if (error) {
                    reject(error);
                }
                if (results && results.rows) {
                    resolve(results.rows);
                } else {
                    reject(new Error("No results found"));
                }
            });
        });
    } catch (error_1) {
        console.error(error_1);
        throw new Error("Internal server error");
    }
};

module.exports = {
    getFoods
};