const { db } = require('../src/bd/index');

db.push("/user/1", {
    id:1,
    login: "admin1",
    password: "admin1234"
})