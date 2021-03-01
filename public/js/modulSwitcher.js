let selected = "";

const changeSelected = (newSelection) => {
    setActiveModule(newSelection)
    fetchCosts().then(res => {
    })
}




const setActiveModule = async (module) => {
   switch (module) {
       case "resources" :
           break;
       case  "costs" :
           break;
       case "revenues" :
           break;
       case "orders" :
           break;
       default:
           alert("Hiba!")
   }
}



async function fetchCosts() {
    fetch('/api/costs/1')
        .then(response => response.json())
        .then(data => console.log(data));

}

