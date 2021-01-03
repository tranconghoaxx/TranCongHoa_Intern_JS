//Bài 1
let arrayDefault = [
  ['A1','A2','A3'],
  ['B1','B2','B3'],
  ['C1','C2','C3'],
  ['D1','D2','D3'],
  ['F1','F2','F3']
];
// xuat ra browser
arrayDefault.forEach(el => {
  textAreaArrayDefault.innerHTML += '[' +  el + ']' + `<br>` ;
});
// Tong hop cac mang
var stack = [];
var tongKQ = [];
var index = 0;
var dequy = function(index) {
	var to_loop = arrayDefault[index++];
	for (var entry of to_loop) {
    stack.push(entry);
		if (index == arrayDefault.length) {
      // In kết quả
      let kq = stack.map(el => el);
      tongKQ.push(kq);
		} else {
			dequy(index);
		}
		stack.pop(entry);
	}
}
// Chạy hàm đệ quy -> in ra kết quả
dequy(0);
console.log(tongKQ);
tongKQ.forEach(el => {
  result.innerHTML += '[' +  el + ']' + `<br>` ;
});
