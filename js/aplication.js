
const url = "http://127.0.0.1:8000/price";
const options = {
    method: "GET",
    mode: "cors",
    headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}

var cebolla


    await fetch(url,options)
        .then(res => res.json())
        .then(data =>{
            cebolla = data[0];})
        .catch(error => console.error("Error al obtener los datos:", error));
        
     console.log(cebolla.price)  
    const value_desired = document.querySelector("#value_desired");
    const button = document.querySelector("#button");
    console.log(value_desired)
    var value 
    button.addEventListener("click",() =>{
        value = value_desired.value;
        console.log(value)
        if(value >= cebolla.price){
            alert("PRECIO SATISFACTORIO")
        }
        
    });

 