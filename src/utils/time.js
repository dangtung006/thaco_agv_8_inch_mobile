export const delay = function(s){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            return resolve(null);
        }, s * 1000)
    })
}