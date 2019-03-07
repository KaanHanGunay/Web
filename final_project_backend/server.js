const express = require('express');
const bodyParser = require('body-parser'); // gelen verinin içini görmek için
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex'); //veri tabanı bağlantısı için

const db = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user: 'postgres',
        password: '9632',
        database: 'smartbrain'
    }
});
/*
db.select('*').from('users').then(data => {
    console.log(data);
});*/

const app = express();
app.use(bodyParser.json());
app.use(cors());

const database = {
    users: [
        {
            id: '123',
            name: 'a',
            password: 'a',
            email: 'a',
            entries: 0,
            joined: new Date()
        },
        {
            id: '124',
            name: 'Yeşim',
            password: '1',
            email: 'yesim@abc.com',
            entries: 0,
            joined: new Date()
        }
    ],
    login: [
        {
            id: '987',
            hash: '',
            email: 'kaan@abc.com'
        }
    ]
}

app.get('/', (req, res) => {
    res.send(database.users);
});

app.post('/signin', (req, res) => {
    if(req.body.email === database.users[0].email && req.body.password === database.users[0].password){
        res.json(database.users[0]);
    } else {
        res.status(400).json('error logging in');
    }
});

app.post('/register', (req, res) => {
    const { email, name } = req.body;
    db('users')
        .returning('*') // veri tabanına bastığını geri al
        .insert({
            email: email,
            name: name,
            joined: new Date()
        }).then(user => {
            res.json(user[0]);
        })
        .catch(err => res.status(400).json('Unable to register'));
})

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    db.select('*').from('users').where({ id: id })
        .then(user => {
            if(user.lenght > 0){
                res.json(user[0]);
            } else {
                res.status(404).json('Kullanıcı bulunamadı');
            }
        })
        .catch(err => {
            res.status(400).json('Connection error');
        });
})

app.put('/image', (req, res) => {
    const { id } = req.body;
    db('users')
        .where('id', '=', id)
        .increment('entries', 1)
        .returning('entries')
        .then(entries => {
            res.json(entries[0]);
        })
        .catch(err => {
            res.status(400).json('Hata oluştu!');
        });
})

app.listen(3000, () => {
    console.log('app is running on 3000 port');
});


// bcrypt.hash("bacon", null, null, function(err, hash) {
//     // Store hash in your password DB.
// });

// // Load hash from your password DB.
// bcrypt.compare("bacon", hash, function(err, res) {
//     // res == true
// });
// bcrypt.compare("veggies", hash, function(err, res) {
//     // res = false
// });