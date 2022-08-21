const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello from node .........hi hi')
});

const users = [

    { id: 0, name: 'Shebe', email: 'shma@gmail.com', phone: '01326558' },
    { id: 1, name: 'Akram', email: 'akram@gmail.com', phone: '004445' },
    { id: 2, name: 'Rahim', email: 'rahim@gmail.com', phone: '01552525' },
    { id: 3, name: 'karim', email: 'karim@gmail.com', phone: '01326588' },
    { id: 4, name: 'kaiser', email: 'kaiser@gmail.com', phone: '01326545' },
];
app.get('/users', (req, res) => {

    const search = req.query.search
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }

});
// app.method
app.post('/users', (req, res) => {
    const newUser = req.body;

    newUser.id = users.length;
    users.push(newUser);
    console.log('Hitting the post', req.body);
    res.send(JSON.stringify(newUser));
    // res.json(newUser);
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('this is yummmummyyy')
})
app.listen(port, (req) => {
    console.log('listening to port', port);
});