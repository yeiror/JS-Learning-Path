const coupons=[{
    name:"Yair_10",
    discount: 15,
    },
    {
    name: "Cafe",
    discount: 30,
    },
    {
    name:"Aguila_roja",
    discount: 25
    },
]

function calcularPrecioConDescuento(precio,descuento){
    return (precio*(100-descuento))/100
}

function validarCupon(){
    const inputPrice = document.getElementById("InputPrice");
    const inputCoupon = document.getElementById("InputCoupon");
    const resultPrice = document.getElementById("ResultPrice");
    
    const isCouponValid = function(coupon){
        return coupon.name===inputCoupon.value;
    };
    
      if(coupons.find(isCouponValid))
    {   
        userCoupon =coupons.find(isCouponValid);
        resultPrice.innerText="El precio con descuento es de $"+calcularPrecioConDescuento(inputPrice.value,userCoupon.discount); 
    }
    else{
        resultPrice.innerText="Error en el cupon "+ inputCoupon.value;
    }
}
 