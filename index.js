const express = require("express");
const port = 8000;

const app = express();

const users = [
    {
        id: 1,
        name: "toto",
        role: "admin",
    },
    {
        id: 2,
        name: "titi",
        role: "moderateur",
    },
    {
        id: 3,
        name: "tutu",
        role: "user",
    },
    {
        id: 4,
        name: "tutu",
        role: "user",
    },
    {
        id: 5,
        name: "tata",
        role: "user",
    },
    {
        id: 6,
        name: "tete",
        role: "user",
    },
    {
        id: 7,
        name: "tutute",
        role: "moderateur",
    },
    {
        id: 8,
        name: "tatata",
        role: "user",
    },
    {
        id: 9,
        name: "titititi",
        role: "user",
    },
    {
        id: 10,
        name: "Samy",
        role: "moderateur",
    },
    {
        id: 11,
        name: "zzzzZZZ",
        role: "user",
    },
];

app.get("/", (req, resp) => {
    console.log("A new request on /");
    resp.send("réponse envoyée au client");
});

app.get("/users", (req, resp) => {
    const {limit, role} = req.query;
    console.log(req.query);
    let limitUsers = users.slice(0, 10);
    if (limit) {
        limitUsers = users.slice(0, limit);
    }
    if (role) {
        limitUsers = limitUsers.filter((user) => user.role === role);
    }
    resp.send(limitUsers);
});

app.get("/users/:id", (req, resp) => {
    console.log(req.params);
    const { id } = req.params;

    const user = users.find((user) => user.id === Number(id));
    if (user) {
        resp.send(user);
    } else {
        resp.sendStatus(404);
    }
});



app.listen(port, (err) => {
    console.log(`Express is runing on port ${port}`);
    if (err) {
        console.log(err);
    }
});
