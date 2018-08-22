const homelist = function(req, res) {
    res.render('trees-list', {title: 'Home'});
}

const treeInfo = function(req, res) {
    res.render('index', {title: 'Tree Info'});
}

const addReview = function(req, res) {
    res.render('index', {title: 'Add Review'});
}

module.exports = {
    homelist,
    treeInfo,
    addReview
}
