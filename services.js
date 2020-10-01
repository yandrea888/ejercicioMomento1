const manicure = 350000, pedicure = 280000, cortes = 175000, tintura = 200000 
let valtotal, promventa

let servicios = () => {
    let servicio = 0, price = 0
    let countpro = -1    
    let acuPri = 0
    let totalPro = 0, promedio = 0, totalPri
    
   do {
       servicio = parseInt(prompt('Ingrese servicio, de uno a 4, terminar pulsa 0'))

       switch(servicio){
        case 1:
          price = manicure  
          alert('Agregaste manicure')
          alert(price)
          acuPri = acuPri + price;                    
          break;
          case 2:
          price = pedicure    
          alert('Agregaste pedicure')
          alert(price)         
          acuPri = acuPri + price;
          break;
          case 3:
          price = cortes   
          alert('Agregaste corte')     
          alert(price)
          acuPri = acuPri + price;
          break;
          case 4:
          price = tintura    
          alert('Agregaste tintura')
          alert(price)          
          acuPri = acuPri + price;
          break;
          default:
            alert('Invalid product')
          break;
       }
    totalPro = totalPro + servicio         
    countpro++

    totalPri = acuPri
    //countpri++

   } while (servicio != 0);

   promedio = totalPri / countpro
   

    alert(`Total: ${countpro}`)
    alert (`Promedio: ${promedio}`)
    alert (`Precio total: ${totalPri}`)
}
servicios()