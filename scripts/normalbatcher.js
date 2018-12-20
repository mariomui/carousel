/* eslint-disable no-loop-func */
// const puppeteer = require('puppeteer');

// let scrape = async () => {
//   // Actual Scraping goes Here...
//   // Return a value
// };

// scrape().then((value) => {
//     console.log(value); // Success!
// });

const faker = require("faker");
const mongoose = require("mongoose");
// const Promise = require('bluebird');

mongoose
  .connect(
    "mongodb://localhost:27017/carousel",
    { useNewUrlParser: true },
    () => {
      mongoose.connection.dropCollection("pictures", () => {
        console.log("pictures dropped");
      });
    }
  )
  .then(() => {
    // const Schema = mongoose.Schema;

    var roomPicturesSchema = new mongoose.Schema(
      {
        name: {
          type: String
        },
        abstract: {
          type: String
        },
        image_url: {
          type: [String]
        },
        room_id: {
          type: Number
        }
      },
      { timestamps: true }
    );

    const pictureMaker = mongoose.model("picture", roomPicturesSchema);
    var collections = [];
    for (let i = 0; i < 100; i++) {
      var temp = [];
      for (let j = 0; j < 5; j++) {
        var tempo = faker.image.imageUrl();
        temp.push(tempo);
      }
      var obj = {
        name: faker.name.findName(),
        abstract: faker.image.abstract(),
        image_url: temp,
        room_id: i
      };
      collections.push(obj);
    }
    console.log(collections);
    pictureMaker.create(collections).then(function() {
      mongoose.connection.close();
    });
  });
// mongoose.connection.close();
// pictureMaker.create(obj);
// mongoose.connection.close();
// image
// avatar
// imageUrl
// abstract
// animals
// business
// cats
// city
// food
// nightlife
// fashion
// people
// nature
// sports
// technics
// transport
