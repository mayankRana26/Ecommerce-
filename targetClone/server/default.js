
import { products } from "./database/constans/data.js"
import Product from "./model/product-schema.js"

const DefaultData=async()=>{
try {
    
await Product.insertMany(products)
console.log("data imported")

} catch (error) {
    console.log(`error by inserting defaul data ${error.message}`)
}

}
export default DefaultData;

