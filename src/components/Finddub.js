// array (name1, name2, name3, name2, name2);
let arr = ['name1', 'name2', 'name3','name2', 'name3'];
//name3 name2
let str
let duplicatearr = []
for(let i =0; i<arr.length()-1; i++){
    str = arr[i]
    for(j= i+1; j<arr.length(); j++)
    {
        if(str == arr[j]){
            duplicatearr.push(str);
        }
    }
}
console.log(duplicatearr);
