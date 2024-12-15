// 1 generar constantes y variables

const tabs = document.querySelectorAll(".Tabs button");
const tabContents = document.querySelectorAll(".Tab-content");




// 2 funciones

function changeTab(targetTab){
    //quita primero todas las clases isActive tanto en los botones como en el content
    tabs.forEach((tab) => {tab.classList.remove("isActive")});
    tabContents.forEach((content)=> content.classList.remove("isActive"));

    //aqui le añadimos la clase isActive a los targetTab particular
    document.querySelector(`[data-tab=${targetTab}]`).classList.add("isActive");
    document.querySelector(`[data-content=${targetTab}]`).classList.add("isActive");
}



// 3 ejecutar

tabs.forEach((tab)=>{
    tab.addEventListener("click", (event) => {
        const targetTab = event.currentTarget.getAttribute("data-tab");
        changeTab(targetTab);
    });
});