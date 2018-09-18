/* GET home page */

const about = function(req, res) {
	res.render('generic-text', {
            title: 'About',
            text: "TreeHugger shows you trees."
        });
};

module.exports = {
	about
};
