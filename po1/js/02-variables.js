var oldStyle = 'var';
 
if (true) {
    var insideVar = 'видна снаружи блока';
    let insideLet = 'видна только в блоке';
}
console.log(insideVar);
console.log(typeof insideLet);
