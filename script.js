const allTables = document.querySelectorAll("ul li");
console.log(allTables);
allTables.forEach((table) => {
    table.addEventListener("click", function(){     
        if (table.classList.contains("disable")){
            return
        }
        allTables.forEach((table)=>{
            if(table.classList.contains("selected")){
                table.classList.remove("selected")
            }
        })
        if(!table.classList.contains("selected")){
                table.classList.add("selected")
        } else {
                table.classList.remove("selected")
        }
    })
});