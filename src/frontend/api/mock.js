var express = require('express');
var router = express.Router();

/* Mock API */
router.get('/repos', function (req, res) {
	res.json([
		{
			"name": "test01",
			"head": "new-page"
		},
		{
			"name": "test02",
			"head": "issue-1453"
		}
	]);
});
router.get('/latest', function (req, res) {
	var data = [];
	for (var i = 0; i < 24; i++) {
		data.push([(i < 10 ? "0" + i : i) + ":00", Math.floor((50 - 40) * Math.random()) + 10 ])
	}

	data = [
		[1390845600000, 315.71],
		[1390845600000 - 3600000, 209.21],
		[1390845600000 - (3600000 * 2), 420.36],
		[1390845600000 - (3600000 * 3), 189.86],
		[1390845600000 - (3600000 * 4), 45.86],
		[1390845600000 - (3600000 * 5), 34.5]
	];
	//console.log(data);

	res.json({
		"label": "Commits per hour",
		"data": data
	});
});
router.get('/repos/*/commits', function (req, res) {
	res.json([
		{
			"hash": "285171018cdf7ae375fb6cbc974c7027cfb451b7",
			"short_hash": "2851710",
			"author_name": "Alberto Burgos",
			"author_email": "albertoburgosmh@gmail.com",
			"date": "1411940795",
			"message": "Issue 1453: Improve API URLs"
		},
		{
			"hash": "285171018cdf7ae375fb6cbc974c7027cfb451b7",
			"short_hash": "2851710",
			"author_name": "Alberto Burgos",
			"author_email": "albertoburgosmh@gmail.com",
			"date": "1411940795",
			"message": "Issue 1453: Improve API URLs"
		},
		{
			"hash": "285171018cdf7ae375fb6cbc974c7027cfb451b7",
			"short_hash": "2851710",
			"author_name": "Alberto Burgos",
			"author_email": "albertoburgosmh@gmail.com",
			"date": "1411940795",
			"message": "Issue 1453: Improve API URLs"
		},
		{
			"hash": "285171018cdf7ae375fb6cbc974c7027cfb451b7",
			"short_hash": "2851710",
			"author_name": "Alberto Burgos",
			"author_email": "albertoburgosmh@gmail.com",
			"date": "1411940795",
			"message": "Issue 1453: Improve API URLs"
		},
		{
			"hash": "285171018cdf7ae375fb6cbc974c7027cfb451b7",
			"short_hash": "2851710",
			"author_name": "Alberto Burgos",
			"author_email": "albertoburgosmh@gmail.com",
			"date": "1411940795",
			"message": "Issue 1453: Improve API URLs"
		},
		{
			"hash": "285171018cdf7ae375fb6cbc974c7027cfb451b7",
			"short_hash": "2851710",
			"author_name": "Alberto Burgos",
			"author_email": "albertoburgosmh@gmail.com",
			"date": "1411940795",
			"message": "Issue 1453: Improve API URLs"
		},
		{
			"hash": "285171018cdf7ae375fb6cbc974c7027cfb451b7",
			"short_hash": "2851710",
			"author_name": "Alberto Burgos",
			"author_email": "albertoburgosmh@gmail.com",
			"date": "1411940795",
			"message": "Issue 1453: Improve API URLs"
		}
	]);
});
router.get('/reload', function (req, res) {
	setTimeout(function () {
		res.status(200).end();
	}, 1000);
});

module.exports = router;