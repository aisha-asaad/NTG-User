import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  products:any[] = []
  categories:any[] = []
  cartProducts: any=[]
  loading: boolean =false
  constructor(private service:ProductsService) {}
  ngOnInit(): void {
    this.getProducts()
    this.getCategories()  }
  
    
    getProducts() {
  this.service.getAllProducts().subscribe((res:any) => {
   this.products = res
    console.log(res)
  })
  
    }
  
    getCategories() {
      this.service.getAllCategories().subscribe((res:any) => {
       this.categories = res 
       console.log(res)   
      })
      
        }
  filterCategory(event:any) {
    let value = event.target.value;
(value == "all") ? this.getProducts(): this.getProductsCategory(value)
  
      
console.log(value)
  }
  getProductsCategory(keyword:string){
    this.service.getProductsByCategory(keyword).subscribe((res:any) =>{
      this.products=res
      console.log(res)
    })
  }
 
  addToCart(event:any) {
    if("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
        let exist = this.cartProducts.find((item:any) => item.item.id == event.item.id)
        if (exist) {
        alert("Product is already in your cart")
        }else{
    this.cartProducts.push(event)
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
    }
    }else{
      this.cartProducts.push(event)
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
    }
  }
  }

