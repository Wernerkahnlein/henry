describe('Split Array function', function() {
  it('es capaz de dividir el arreglo en dos partes', function() {
    expect(split([1,2,3,4])).toEqual([[1,2],[3,4]]);
  });
});


describe('Merge', function() {
  it('es capaz de mergear dos arreglos ordenados a un solo arreglo ordenado', function(){
    expect(merge([1,3], [2,4])).toEqual([1,2,3,4]);
  });
});


describe('mergeSort', function() {
  it('ordena un arreglo', function () {
    expect(mergeSort([4,2,5,1,6,3])).toEqual([1,2,3,4,5,6]);
  });
});
