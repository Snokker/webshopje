var Product = require('../models/product');

//moet in deze file met mongoose/monodb connecten omdat deze file niet altijd draait in de app
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true });

var products = [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png',
        title: 'Gothic Video Game',
        description: 'I DONT KNOW THIS GAME',
        price: 10
    }),
    new Product({
        imagePath: 'https://vignette.wikia.nocookie.net/legomessageboards/images/8/82/Minecraft_cover.jpg/revision/latest?cb=20130429170609',
        title: 'Minecwaft',
        description: 'love it',
        price: 20
    }),
    new Product({
        imagePath: 'http://www.mobygames.com/images/covers/l/12338-drakan-order-of-the-flame-windows-front-cover.jpg',
        title: 'Drakan order of the flame',
        description: 'My favouritest game',
        price: 200
    }),
    new Product({
        imagePath: 'https://static.raru.co.za/cover/2014/06/29/1784728-l.jpg?v=1404044687',
        title: 'Witcher 3',
        description: 'get them bitches',
        price: 60
    }),
    new Product({
        imagePath: 'https://images.g2a.com/newlayout/323x433/1x1x0/73734d4694f1/591211a0ae653a05e711d0bf',
        title: 'Dont starve together',
        description: 'eat your vegetables',
        price: 40
    }),
    new Product({
        imagePath: 'http://images.pushsquare.com/games/ps4/armello/cover_large.jpg',
        title: 'Armello',
        description: 'furry the game',
        price: 41000
    }), 
];

//mysql heeft tabel en entries deze man heeft collections en documents
var done = 0;
for(var i = 0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        if (done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}

//niet hier.de kans is zeer groot dat een disconnect plaats vind voordat alle items zijn gesafet
// mongoose.disconnect();