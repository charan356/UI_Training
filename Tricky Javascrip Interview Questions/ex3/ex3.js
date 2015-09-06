


//function mostFrequentItems(arr){
//    if(!arr){
//        return null;
//    }else{
//        var strMap={};
//        var elm = arr[0];
//        var maxCount =1;
//        for(var i=0;i <arr.length; i++){
//            var el = arr[i];
//            if(strMap[el] == null){
//                strMap[el] = 1
//            }else{
//                strMap[el]++;
//            }
//            if(strMap[el] > maxCount){
//                maxCount =strMap[el];
//                elm = el;
//            }
//        }
//        console.log(maxCount);
//        return elm;
//    }
//}
//


function findFirstDuplicate(arr){
    if(!arr){
        return null;
    }else{
        var strMap ={};
        var el;
        for(var i =0;i<arr.length;i++){
            el=arr[i];
            if(strMap[el] == null){
                strMap[el]=1;
            }else{
                return el;
            }
        }
        return null;
    }
}


function removeDuplicates(arr){
    if(!arr){
        return null;
    }else{
        var strMap={};
        var newArr=[];
        var el;
        for(var i =0; i< arr.length; i++){
            el =arr[i];
            if(strMap[el] == null){
                strMap[el] =1;
                newArr.push(el);
            }

        }
        return newArr;
    }
}

//var arr1=[1,2,3];
var arr1=[3, 'a1', 'a2', 'a', 2, 2,2,2,2,2,2,2,2,3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(removeDuplicates(arr1));