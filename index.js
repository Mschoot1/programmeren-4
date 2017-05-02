/**
 * Created by marni on 21-4-2017.
 */
var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(request, response) {
    response.send('Hello Avans!');
});

app.get('/about', function(request, response) {
    response.send('Written by Marnix');
});

app.post('/', function(request, response) {
    response.send('Hello Avans, POST request received!');
});

app.put('/', function(request, response) {
    response.send('Hello Avans, PUT request received!');
});

app.get('/json', function(request, response) {
    response.json({
        'some_name': 'Value',
        'an_array_of_objects': [
            {
                'another_name': 'Another value',
                'a_further_name': "A further value"
            },
            {'yet_another_name': 'Yet another value'}
        ],
        'some_boolean': true,
        'some_integer': 42,
        'array_of_ints': [
            2, 3, 5, 7, 11, 13
        ],
        'array_of_strings': [
            "twee", "drie", "vijf", "zeven"
        ]
    })
});

app.get('/api', function(request, response) {

    var persons = [{

        "gender": "female",
        "name": {
            "title": "mrs",
            "first": "katrine",
            "last": "christensen"
        },
        "location": {
            "street": "3656 kildemarken",
            "city": "lemvig",
            "state": "midtjylland",
            "postcode": 80244
        },
        "email": "katrine.christensen@example.com",
        "login": {
            "username": "beautifulmeercat305",
            "password": "321321",
            "salt": "uuDTyt9Q",
            "md5": "4bb33b8bd2be42ae894bd96fe57ac736",
            "sha1": "3b7b32f6daf480d2358601146737425b9123a8b9",
            "sha256": "77767d8b79b410005d7c0d452bf7fd046886e11d7fefd7095eb3dec442b8e82d"
        },
        "dob": "1946-10-20 10:17:02",
        "registered": "2014-09-06 02:23:50",
        "phone": "67194934",
        "cell": "30746632",
        "id": {
            "name": "CPR",
            "value": "390384-8426"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/50.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/50.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/50.jpg"
        },
        "nat": "DK"

        },
        {

            "gender": "male",
            "name": {
                "title": "mr",
                "first": "eugene",
                "last": "taylor"
            },
            "location": {
                "street": "3513 northaven rd",
                "city": "sunshine coast",
                "state": "victoria",
                "postcode": 7616
            },
            "email": "eugene.taylor@example.com",
            "login": {
                "username": "smallrabbit589",
                "password": "kitty",
                "salt": "97uWhxLG",
                "md5": "680d6a86a29c23eaf258cc983ee3126d",
                "sha1": "16a56f6a84ad75e2598eff8c2df03f893b5f81e4",
                "sha256": "b26e04ca2f539d11309732ae3fd236f391bcc15871819da8049f11dea83b60a0"
            },
            "dob": "1972-03-01 06:15:48",
            "registered": "2003-02-19 07:15:45",
            "phone": "09-5645-9572",
            "cell": "0492-091-446",
            "id": {
                "name": "TFN",
                "value": "680832077"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/73.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/73.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/73.jpg"
            },
            "nat": "AU"

        },
        {

            "gender": "female",
            "name": {
                "title": "mademoiselle",
                "first": "elisa",
                "last": "picard"
            },
            "location": {
                "street": "3307 rue des jardins",
                "city": "vullierens",
                "state": "appenzell ausserrhoden",
                "postcode": 4242
            },
            "email": "elisa.picard@example.com",
            "login": {
                "username": "orangebird873",
                "password": "tabatha",
                "salt": "cn6hvB2i",
                "md5": "25a135ba85403185f6fd4e46f8920d35",
                "sha1": "79c1fc8db5d2e7ad6b53ce1aa1353b333d711f8e",
                "sha256": "274351f08177846327a825e0c336a77b2e253adff2dc435c377dd080223bad6d"
            },
            "dob": "1963-12-06 21:29:34",
            "registered": "2014-01-01 08:43:05",
            "phone": "(815)-902-0136",
            "cell": "(911)-669-8404",
            "id": {
                "name": "AVS",
                "value": "756.LUDZ.SEKF.39"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/69.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/69.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/69.jpg"
            },
            "nat": "CH"

        },
        {

            "gender": "female",
            "name": {
                "title": "ms",
                "first": "johanna",
                "last": "pohl"
            },
            "location": {
                "street": "5362 neue straße",
                "city": "lörrach",
                "state": "sachsen-anhalt",
                "postcode": 58809
            },
            "email": "johanna.pohl@example.com",
            "login": {
                "username": "smallsnake732",
                "password": "nympho",
                "salt": "ot0dXPiG",
                "md5": "de8d9143ebbdfbcb6bdbee7231993e56",
                "sha1": "c6f78face77060e26a0e6bccbad591ebac5af282",
                "sha256": "a0f850289827863c1def9217c942fb5ba0ce6e2fe635ddbb8eda8d429153d8ed"
            },
            "dob": "1983-12-28 08:35:40",
            "registered": "2008-04-23 21:41:20",
            "phone": "0307-8558768",
            "cell": "0175-9653730",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/42.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/42.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/42.jpg"
            },
            "nat": "DE"

        },
        {

            "gender": "female",
            "name": {
                "title": "mrs",
                "first": "درسا",
                "last": "قاسمی"
            },
            "location": {
                "street": "1531 آیت الله طالقانی",
                "city": "ساری",
                "state": "مازندران",
                "postcode": 60153
            },
            "email": "درسا.قاسمی@example.com",
            "login": {
                "username": "lazyladybug198",
                "password": "ashley1",
                "salt": "I85omvZo",
                "md5": "c0b691fd5165663a43914c82dbc7913f",
                "sha1": "7d84c051298b0a8fcf702cae36866b0d51f74169",
                "sha256": "2258736f1cedc629ba6e88206f9e424f26ae587e536a3e9b67a68fff15237873"
            },
            "dob": "1964-02-14 14:31:22",
            "registered": "2016-01-24 22:14:45",
            "phone": "068-79034658",
            "cell": "0999-086-6084",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/90.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/90.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/90.jpg"
            },
            "nat": "IR"
    }];

    var i = Math.floor((Math.random() * persons.length) + 1);

    var person = persons[i];

    response.json(person);
});

app.get('*', function(request, response) {
    response.status(404);
    response.send('404 - Not found');
});

app.listen(port, function() {
    console.log('Server app is listening on port ' + port);
});
