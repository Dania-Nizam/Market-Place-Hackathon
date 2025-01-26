import { Car } from "../../../types/car1";

export const addToCart=(car:Car)=>{
    const cart : Car[] =JSON.parse(localStorage.getItem('cart') || '[]')

    const exixtingCarIndex = cart.findIndex(item => item._id===car._id)
    if(exixtingCarIndex > -1) {
        cart[exixtingCarIndex].inventory += 1
    }
    else{
        cart.push(
            {
                ...car,inventory:1
            }
        )
    }
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const removeFromCart = (carId : string)=>{
    let cart :Car[] = JSON.parse(localStorage.getItem('cart')|| '[]')
    cart = cart.filter(item => item._id !== carId)
    localStorage.setItem('cart',JSON.stringify(cart))

}
export const updateCartQuantity = (carId :string,quantity:number) => {
    const cart :Car[] =JSON.parse(localStorage.getItem('cart') || '[]')
    const CarIndex =cart.findIndex(item => item._id===carId)

    if (CarIndex > -1) {
        cart[CarIndex].inventory=quantity
        localStorage.setItem('cart',JSON.stringify(cart))
    }
}
export const getCartItems =():Car[]=>{
return JSON.parse(localStorage.getItem('cart')|| '[]')
}