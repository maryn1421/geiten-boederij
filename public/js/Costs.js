const fetchCost = async (userId) => {
    try {
        return await fetch("/api/costs/" + userId)
    } catch (e) {
        alert("valami hiba tortent")
    }
}


function Costs(userId) {
    this.userId = userId;

    this.build = () => {
        fetchCost(userId).then(response =>
            response.json()).then(data => {
            buildCost(data)
        });
    }
}

const buildCost = (costs) => {
    let totalPrice = 0;
    const container = document.getElementById("main-container");
    const oldChild = document.getElementById("main-child")

    const newChild = document.createElement('div');
    const newCostInput = document.createElement('div');


    newCostInput.classList.add("costs__inputContainer")

    const nameInput = document.createElement('input')
    nameInput.placeholder = "kiadás neve";
    const priceInput = document.createElement('input')
    priceInput.placeholder = "10000"
    priceInput.type = "number";
    priceInput.min = 0;

    const typeSelect = buildSelectMenu();


    const submitButton = document.createElement("button")
    submitButton.textContent = "Hozzáadás";

    newCostInput.appendChild(nameInput)
    newCostInput.appendChild(document.createElement("br"))
    newCostInput.appendChild(priceInput)
    newCostInput.appendChild(document.createElement("br"))
    newCostInput.appendChild(typeSelect)
    newCostInput.appendChild(document.createElement("br"))
    newCostInput.appendChild(submitButton)


    newChild.appendChild(newCostInput);

    newChild.appendChild(buildCostTable(costs))

    container.replaceChild(newChild, oldChild);

}

const buildSelectMenu = () => {
    const select = document.createElement("select");

    const foodOption = document.createElement("option")
    foodOption.text = "Takarmány";
    foodOption.id = "food";
    foodOption.name = "food";

    select.options.add(foodOption)

    const animalOption = document.createElement("option")
    animalOption.text = "Állat";
    animalOption.id = "animal";
    animalOption.name = "animal";
    //szena szalma orvosi koltsegek egyéb
    select.options.add(animalOption)
    return select;


}


const buildCostTable = (data) => {
    console.log(data)
    const table = document.createElement("table")
    const tableHead = table.createTHead("")
    const heads = tableHead.insertRow();
    const th = document.createElement("th");
    const th2 = document.createElement("th");
    const th3 = document.createElement("th");
    const th4 = document.createElement("th");
    th.textContent = "Dátum"
    heads.appendChild(th)
    th2.textContent = "Név"
    heads.appendChild(th2)
    th3.textContent = "Ár"
    heads.appendChild(th3)
    th4.textContent = "Típus"
    heads.appendChild(th4)

    table.insertRow()
    const tbody = document.createElement('tbody');

    data.forEach(cost => {
        const row = table.insertRow();
        const date = document.createElement("td")
        date.textContent = new Date(Date.parse(cost?.created_at));
        row.appendChild(date);
        const name = document.createElement("td")
        name.textContent = cost?.name
        row.appendChild(name);

        const price = document.createElement("td")
        price.textContent = cost?.price
        row.appendChild(price);





    })


    return table
}

