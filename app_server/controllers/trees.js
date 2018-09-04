const homelist = function(req, res) {
    res.render('trees-list', {title: 'Home'});
}

const treeInfo = function(req, res) {
    res.render('tree-info', {title: 'Tree Info'});
}

const addReview = function(req, res) {
    res.render('tree-review-form', {title: 'Add Review'});
}

module.exports = {
    homelist,
    treeInfo,
    addReview
}
