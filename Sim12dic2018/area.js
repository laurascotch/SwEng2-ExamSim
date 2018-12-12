function getArea(a) {
    
    if(Array.isArray(a)){
        if(a.length==2){
            if(Number.isInteger(a[0]) && Number.isInteger(a[1])){
                if(a[0]>=0 && a[1]>=0){
                    var area = a[0]*a[1];
                    return area;
                }
            }
        }
    }

    return(-1);

}

module.exports = { getArea: getArea}