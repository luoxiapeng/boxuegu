
exports.getTree = getTree;

function getTree(arr, pid, c) {

	var temp = [];

	(function () {
		for(var i=0; i<arr.length; i++) {

			if(arr[i]['cg_pid'] == pid) {

				// 添加子节点
				arr[i].childs = [];

				if(c) {
					c.push(arr[i]);
					continue;
				}

				temp.push(arr[i]);

				getTree(arr, arr[i]['cg_id'], arr[i].childs);
			}
		}
	})();

	return temp;
}




