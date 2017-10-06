function search(text,array){
    var textyt=text.toLowerCase();
    var arr=[]
    var result=array.filter(function(x){
        if(x.name.toLowerCase().search(textyt)!=-1){
            arr.push(x);
            return arr
        }//return console.log("ahhaha")                                
        })
return result
};
