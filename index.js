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

    var results = {

        "results": [
            {
                "gender": "female",
                "name": {
                    "title": "mrs",
                    "first": "elise",
                    "last": "morin"
                },
                "location": {
                    "street": "7973 esplanade du 9 novembre 1989",
                    "city": "rueil-malmaison",
                    "state": "eure-et-loir",
                    "postcode": 49636
                },
                "email": "elise.morin@example.com",
                "login": {
                    "username": "smallleopard780",
                    "password": "asasas",
                    "salt": "pobR6CqJ",
                    "md5": "786d0a06e82ca2c7e584b6bd59a749a0",
                    "sha1": "85284aac4361e24acfcc7b8a99f55d5df00253e2",
                    "sha256": "c2d9e794d3d32c83f72ef18072715a938e48fb737fefde0bdbe57fedf465bab7"
                },
                "dob": "1979-05-17 00:50:54",
                "registered": "2009-05-11 09:09:01",
                "phone": "05-08-42-68-45",
                "cell": "06-75-99-53-17",
                "id": {
                    "name": "INSEE",
                    "value": "279494452022 11"
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/94.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/94.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/94.jpg"
                },
                "nat": "FR"
            },
            {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "پوریا",
                    "last": "کوتی"
                },
                "location": {
                    "street": "3589 شهید صابونچی",
                    "city": "ملارد",
                    "state": "قزوین",
                    "postcode": 17278
                },
                "email": "پوریا.کوتی@example.com",
                "login": {
                    "username": "tinylion838",
                    "password": "atlantis",
                    "salt": "xP8bMJF8",
                    "md5": "50f5d84ccd24b88ac329fbad57a719cb",
                    "sha1": "05f10a4072c1e03e415e07cd46469e6317baad07",
                    "sha256": "95734d615eac3d8c5dbb239af96c76227b712e8cafa8802c23244cb483b5d437"
                },
                "dob": "1988-07-02 10:24:04",
                "registered": "2008-11-09 11:08:22",
                "phone": "098-08443585",
                "cell": "0975-964-6444",
                "id": {
                    "name": "",
                    "value": null
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/20.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/20.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/20.jpg"
                },
                "nat": "IR"
            },
            {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "élsio",
                    "last": "duarte"
                },
                "location": {
                    "street": "1506 rua josé bonifácio ",
                    "city": "taboão da serra",
                    "state": "alagoas",
                    "postcode": 31924
                },
                "email": "élsio.duarte@example.com",
                "login": {
                    "username": "brownbutterfly890",
                    "password": "2222222",
                    "salt": "eyKoaRmx",
                    "md5": "8123c2a0ef49eb30d980238b35698bd5",
                    "sha1": "dcafe5a03debbc97d2fb9c35d459c8625c0ec4ec",
                    "sha256": "9e4d20634d1fa163a96883073c4e7893286dfe47fe03a1e31270e856513e291f"
                },
                "dob": "1962-10-19 14:05:43",
                "registered": "2004-10-01 13:17:50",
                "phone": "(55) 5617-3588",
                "cell": "(87) 6227-4539",
                "id": {
                    "name": "",
                    "value": null
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/65.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/65.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/65.jpg"
                },
                "nat": "BR"
            },
            {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "aiden",
                    "last": "ryan"
                },
                "location": {
                    "street": "2195 homestead rd",
                    "city": "bowral",
                    "state": "victoria",
                    "postcode": 8137
                },
                "email": "aiden.ryan@example.com",
                "login": {
                    "username": "bluebird657",
                    "password": "gary",
                    "salt": "RZ20A2fA",
                    "md5": "8a2792e28464815fc497167cf8986d97",
                    "sha1": "46b79beb6cabee5abeed495d9f2ceed9fcf10366",
                    "sha256": "95b8584ac2690ae5e4cc0d9029076c1909fdba1ac5e5a4f50176626008365856"
                },
                "dob": "1960-12-26 03:13:05",
                "registered": "2010-10-05 12:54:33",
                "phone": "01-7506-7172",
                "cell": "0407-062-227",
                "id": {
                    "name": "TFN",
                    "value": "627295835"
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/58.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/58.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/58.jpg"
                },
                "nat": "AU"
            },
            {
                "gender": "female",
                "name": {
                    "title": "ms",
                    "first": "eliza",
                    "last": "wagner"
                },
                "location": {
                    "street": "4970 victoria street",
                    "city": "salford",
                    "state": "cambridgeshire",
                    "postcode": "Y5A 8ST"
                },
                "email": "eliza.wagner@example.com",
                "login": {
                    "username": "lazypeacock138",
                    "password": "daniela",
                    "salt": "wwgjcMmg",
                    "md5": "eeb10ff91bbaa4e850b77ff1d04bdd32",
                    "sha1": "a7e14e38cbbbaed3fc5e930fb822d9f1dedc21ff",
                    "sha256": "3fd545275bb56c0dbabf3d30ee77db47a6ae338f91c527c856702e5d9d0daecd"
                },
                "dob": "1989-07-31 14:28:58",
                "registered": "2002-09-30 14:19:12",
                "phone": "015242 95896",
                "cell": "0721-088-900",
                "id": {
                    "name": "NINO",
                    "value": "JK 89 60 14 W"
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/95.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/95.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/95.jpg"
                },
                "nat": "GB"
            }
        ],
        "info": {
            "seed": "9abb35d49104a745",
            "results": 5,
            "page": 1,
            "version": "1.1"
        }

    };

    // var i = Math.floor((Math.random() * results.getJSONArray("results").length) + 1);
    //
    // results.getJSONArray("results").get(i);

    response.json(results);
});

app.get('*', function(request, response) {
    response.status(404);
    response.send('404 - Not found');
});

app.listen(port, function() {
    console.log('Server app is listening on port ' + port);
});
