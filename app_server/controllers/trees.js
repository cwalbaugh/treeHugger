const homelist = function(req, res) {
    res.render('trees-list', {
        title: 'TreeHugger, a place to find great trees near you!',
        pageHeader: {
            title: 'TreeHugger',
            strapline: 'Find great trees near you'
        },
        sidebar: "Tree Hugger helps you find and rate beautiful trees while learning about your area.",
        trees: [{
            name: 'Clay Hill Trees',
            address: '1498 Boolmington Street, Iowa City, 52245',
            rating: '3',
            specieses: ['Burr Oak','Honey Locusts'],
            distance: '200',
        },
        {
            name: 'Gulliver Tree',
            address: '1422 Bloomington Street, Iowa City, 52245',
            rating: '4',
            specieses: [ 'White Pine' ],
            distance: '400',
        },
        {
            name: 'Trail-marker',
            address: '1409 Davenport Street, Iowa City, 52245',
            rating: '4',
            specieses: [ 'Black Oak' ],
            distance: '300',
        }]
    });
}

const treeInfo = function(req, res) {
    res.render('tree-info', {
        title: 'Clay Hill Trees',
        pageHeader: {title: 'Clay Hill Trees'},
        sidebar: {
            context: 'is on TreeHugger because it is a location or a tree of note because of either its beauty, historical significance or general noteworthyness.',
            cta: 'If you\'ve been, please leave a review or a photo.'
        },
        tree: {
            name: 'Clay Hill Trees',
            address: '1498 Bloomington Street, Iowa City IA 52245',
            notes: 'The Hill rolling down from the parking lot is so named because it used to be where the clay was dug for bricks which were fired where the park shelter stands now.',
            rating: 4,
            specieses: ['Burr Oak', 'Honey Locust'],
            coords: {lati: 41.665713, lng: -91.513495},
            reviews: [{
                author: 'Christian Albaugh',
                rating: 5,
                timestamp: '11 September 2018',
                reviewText: 'Beautiful entrance to uiet Hickory Hill Park.'
            },{
                author: 'MaggieTheCat',
                timestamp: '11 September 2018',
                rating: 2,
                reviewText: 'Watch out for the thorns on thoe Honey Locust, don\'t climbthese ones.'
            }]
        }
    });
}

const addReview = function(req, res) {
    res.render('tree-review-form', {
        title: 'Review Clay Hill Trees'
    });
}

module.exports = {
    homelist,
    treeInfo,
    addReview
}
