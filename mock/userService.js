const database = require("./db")

const userService = {
    getUSerData : async (id) => {
        const user = await database.fetchData(id)
        return user
    },
    complexOperation : (a, b, callback) => {
        callback(a);
        callback(b);
        return a + b;
    }
}

module.exports = userService