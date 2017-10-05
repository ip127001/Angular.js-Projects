(function() {
  var app = angular.module('Stores', []);

  app.controller('StoreController', function() {
    this.products = stores;
  });

  app.controller("TabController", function() {
    this.tab = 1;

    this.isSet = function(checkTab) {
      return this.tab === checkTab;
    };

    this.setTab = function(setTab) {
      this.tab = setTab;
    };
  });

  app.controller('GalleryController', function(){
    this.current = 0;

    this.setCurrent = function(imageNumber){
      this.current = imageNumber || 0;
    };
  });

  app.controller("ReviewController", function(){

    this.review = {};

    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  var stores = [{
      name: "Nokia-6",
      description: "Best nokia phone",
      specs: [{
        camera: "16MP",
        processor: "Qualcomm Snapdragon 430",
        ram: 3
      }],
      price: 110.50,
      images: [
        "nokia-3.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "I love this phone",
        author: "rk@example.com"
      }, {
        stars: 1,
        body: "This phone sucks.",
        author: "mk@example.com"
      }]
    }, {
      name: "Xiomi A1",
      description: "Android One",
      specs: [{
        camera: "12MP+12MP",
        processor: "Qualcomm Snapdragon 625, Adreno 506 GPU",
        ram: 3
      }],
      price: 120.90,
      images: [
        "wildcraft-1.jpg"
      ],
      reviews: [{
        stars: 4,
        body: "best camera",
        author: "sk@example.com"
      }, {
        stars: 4,
        body: "best in series",
        author: "gk@example.com"
      }]
    }, {
      name: "Motorola G5s plus",
      description: "Dual Camera",
      specs: [{
        camera: "13MP+13MP",
        processor: "Snapdragon 625",
        ram: 3
      }],
      price: 112.95,
      images: [
        "watch-1.jpg"
      ],
      reviews: [{
        stars: 4,
        body: "dual camera best",
        author: "ak@example.com"
      }, {
        stars: 1,
        body: "display problem",
        author: "lk98@example.com"
        }
      ]
    }];
})();


