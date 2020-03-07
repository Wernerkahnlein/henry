var N = require('./Heap.js');

var factores = function(n){
	var factores = [];
	var i = 2;
	while(n>1){
		if( n%i === 0 ){
			factores.push(i);
			n = n / i;
			i = 2;
		}else{
			i++;
		}
	}
	return factores;
}

var factores = function(n){
	var factores = [];
	return (function nextFactor(n,i){
		if(n==1) return factores;
		if(!i) var i = 2; 
		if( n%i ==0 ){
			factores.push(i);
			return nextFactor(n/i);
		}else{
			return nextFactor(n,++i);
		}
	})(n);
}

var bubbleSort = function(arr){
	var len = arr.length;
	var swap = true;
	while(swap){
		swap = false;
		for(var i = 0; i < len; i++){
			if(arr[i+1]<arr[i]){
				swap = true;
				var aux = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = aux
			}
		}	
		len--;
	}
	return arr;
}

var insertionSort = function(arr){
	var aux;
	for(var i = 0; i<arr.length-1; i++){
		var j = i+1;
		while(j>=0 && arr[j]<arr[j-1]){
			aux = arr[j];
			arr[j] = arr[j-1];
			arr[j-1] = aux;
			j--;
		}
	}
	return arr;
}

var selectionSort = function(arr){
	var aux;
	for(var i = 0; i <arr.length ; i++){
		var min = i;
		for(var j = i+1 ; j < arr.length ; j ++ ){
			if(arr[j]<arr[min]) min = j;
		}
		if(arr[min]<arr[i]){
			aux = arr[min];
			arr[min] = arr[i];
			arr[i] = aux;
		}
	}
	return arr;
}

var quickSort = function(arr){
	var left = [];
	var right = [];
	var equals = [];
	var pivot = Math.floor(Math.random()*arr.length);
	
	for(var i = 0; i<arr.length; i++){
		if(arr[i]<arr[pivot]){
			left.push(arr[i]);
		}else if(arr[i] == arr[pivot]){
			equals.push(arr[i]);
		}else{
			right.push(arr[i]);
		}
	}	
	if(arr.length > 2){
		return quickSort(left).concat(equals).concat(quickSort(right));
	}
	return left.concat(equals).concat(right);
}

var heapSort = function(arr){
	var r = [];
	if(arr.length == 0 ) return [];
	var heap = new N(arr[0]);
	for(var i = 1; i<arr.length; i++){
		heap.add(arr[i]);
	}
	while( !heap.isEmpty() ){
		r.push(heap.pop());
	}
	return r;
}


module.exports = {
	factores: factores,
	bubbleSort: bubbleSort,
	insertionSort: insertionSort,
	selectionSort: selectionSort,
	quickSort: quickSort,
	heapSort: heapSort
};