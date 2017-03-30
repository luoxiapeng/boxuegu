
exports.getTree = getTree;

function getTree(arr, pid) {

	var temp = [];

	var args = arguments;

	(function () {
		for(var i=0; i<arr.length; i++) {

			if(arr[i]['cg_pid'] == pid) {

				// 添加子节点
				arr[i].childs = [];

				if(args[2]) {
					args[2].push(arr[i]);
				} else {
					temp.push(arr[i]);
				}

				getTree(arr, arr[i]['cg_id'], arr[i].childs);
			}
		}
	})();
	
	return temp;
}




