
    //variables de fetch

const url = "http://127.0.0.1:8000/price";
const options = {
    method: "GET",
    mode: "cors",
    headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}



    //funcionalidad de alert cuando el usuario vuelva a entrar
    const value_desired = document.querySelector("#value_desired");
    const button = document.querySelector("#button");
    const PRODUCT = document.querySelector("#producto"); 
    


    localStorage.setItem("alert_reload", false)

    if(localStorage.getItem("alert_reload")){
        window.addEventListener("load", () =>{
            let index_product = localStorage.getItem("index_product");
            let value = localStorage.getItem("value_desired");
            let myJson = localStorage.getItem("myJson");
            console.log("funcionando reload alter")
            if(index_product != undefined){
                 if(myJson[index_product].price *1000 >= value ){
                     console.log("entro")
                     alert("price")
                     value_desired.value = "";

                 }
                 else {
                     value_desired.value = value;
                 }
            }
         });

    }


    // llamada a la api

    var myJson
     await fetch(url,options)
        .then(res => res.json())
        .then(data =>{
             myJson = data;})
        .catch(error => console.error("Error al obtener los datos:", error));
        
     localStorage.setItem("myJson", JSON.stringify(myJson));        


    //funcionalidad de alert




    PRODUCT.addEventListener("click",function(e)  {
        localStorage.setItem("index_product", e.target.selectedIndex)
        console.log(localStorage.getItem("index_product"))
    });



        button.addEventListener("click",()=>{
            let index_product = localStorage.getItem("index_product");
            localStorage.setItem("value_desired", value_desired.value);
            console.log(value_desired.value)
            console.log(myJson[index_product].price)
            if(myJson[index_product].price *1000 >= value_desired.value ){
               
                alert("price")
                value_desired.value = "";
            }
            else{
                localStorage.setItem("alert_reload",true);
                console.log("entro")
            }
        });

//      Funcionalidad para mostrar los precios

            const nameCards = [...document.querySelectorAll('#name')];
                for (let index = 0; index < nameCards.length; index++) {
                    const element = nameCards[index];
                    element.innerHTML= myJson[index].name
                }

            const priceCards = [...document.querySelectorAll('#price')];
                for (let index = 0; index < priceCards.length; index++) {
                    const element = priceCards[index];
                    element.innerHTML= "$"+myJson[index].price*1000+" X Kilo"
                }

            const locationCards = [...document.querySelectorAll('#ciudad')];
                for (let index = 0; index < locationCards.length; index++) {
                    const element = locationCards[index];
                    element.innerHTML= myJson[index].location
                }

                


        

 