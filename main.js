 // En click funktion som tar värdet i todo-input och skapa en <li> med värdet i.
 function  listAppend(){
    //hämta värdet från input fältet
    let inputValue = document.querySelector("#todo-input").value;//value för att hämta ut värdet från input
    // console.log(inputValue); ANVÄNDS FÖR ATT SE I CONSOLE PÅ WEBBLÄSAREN ATT DET FAKTISKT KOMMMER ett värde
    
    //Skapa en variable som vi stoppar <li>-element i.
    //Vi måste skapa <li>-elementet.    
    let listItem = document.createElement('li');

    let newTextNode = document.createTextNode(inputValue);
    listItem.appendChild(newTextNode);
    
    let list = document.querySelector("ul");
    // stoppa in listItem i list
    list.appendChild(listItem);

}