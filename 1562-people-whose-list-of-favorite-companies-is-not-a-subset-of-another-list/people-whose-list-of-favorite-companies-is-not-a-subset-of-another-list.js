var peopleIndexes = function(favoriteCompanies) {
    //function to check is set is a subset of another set
    Set.prototype.subSet = function(otherSet){  
        if(this.size > otherSet.size) 
            return false; 
        else{ 
            for(var elem of this) { 
                if(!otherSet.has(elem)) 
                    return false; 
            } 
            return true; 
        } 
    } 
    //create an array of sets from favoriteCompanies
    var arr = new Array(favoriteCompanies.length);
    for(var i=0;i<favoriteCompanies.length;i++){
        var s = new Set(favoriteCompanies[i]);
        arr[i] = s;
    }
    //push the index in the res array
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        //keep a flag to check subset at each index
        var isSub = false;
        for (var j = 0; j < arr.length; j++) {
            if (i == j) continue;
            if (arr[i].subSet(arr[j])) {
                 //mark flag as true if set(i) is a subset of set(j)
                isSub = true;
                break;
            }
        }
        //if the flag is false push the index in res array
        if (!isSub) {
            res.push(i);
        }
    }
    return res;
};