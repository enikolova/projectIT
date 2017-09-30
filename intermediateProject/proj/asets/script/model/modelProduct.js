function Product(type,name,url,companyName,price,color,description,isNew){
   this.type=type;
    this.name=name;
    this.url=url;
    this.companyName=companyName;
    this.price=price;
    this.color=color;
    this.description=description;
    this.isNew=isNew;
}
function ProductList(){
    this._productList=[];
}
var productsList=new ProductList();



