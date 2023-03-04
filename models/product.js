const fs=require('fs')
const products=[]
const path=require('path')
const p=path.join(path.dirname(process.mainModule.filename),'Data','product.json')
const filereading=(ch)=>{
fs.readFile(p,'utf8',(err,data)=>{
    if(data===''){
        ch([])
    }else{
        ch(JSON.parse(data))
    }
})
}
module.exports=class Product{
    constructor(t) {
        this.title=t
    }

    save(){
       filereading(product=>{
        product.push(this)
        fs.writeFile(p,JSON.stringify(product),err=>{
            console.log(err)
        })
       })
       

      
    }
    fetchAll(cb){
        filereading(cb)
    }
   
    
}








// module.exports=class Product{
//     constructor(t) {
//         this.title=t
//     }

//     save(){
//         this.print()
        
//        fs.writeFile('prosuct.txt',`${this.title}:`,{flag:'a'},err=>{

//        }) 
//     }
//     fetchAll(){
//         const reading=fs.readFileSync('prosuct.txt','utf8').split(':')
//        reading.forEach(e=>this.print(e))
//        products.pop()
//         return products
//     }
//     print(){
//         products.push(this)
//     }
    
    
// }