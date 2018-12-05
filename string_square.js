function string_square(s) {
    
    if(typeof s == 'string'){
        if(s.length>=0){
            return((s.length)*(s.length));
        }
    }

    return(-1);

}

module.exports = { string_square: string_square}