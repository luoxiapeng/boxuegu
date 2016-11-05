
exports.tree = function (arr) {
	var tree = [];

	function getTree(arr, pid) {
		forEach(arr, function (key, val) {
			if(val['pid'] == pid) {
				tree.push(val);
			}
		});
	}
}
