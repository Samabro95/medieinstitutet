
        
        // Skapa en variabel för varje button
        const hideButton1 = document.getElementById("hideButton1");
        const hideButton2 = document.getElementById("hideButton2");
        const hideButton3 = document.getElementById("hideButton3")
        
        
        const widthButton = document.getElementById("widthButton");
       
       // En funktion för att visa bilden
       function showHideImage(){
         const buttonId = this.id;
         const kitten = document.querySelector("#" + buttonId + " + button + img");
         console.log(kitten);
         
         //const kitten = document.getElementById("imageId");
         //Skapa en variabel som berättar om bilden syns eller ej
         const kittenIsVisible = kitten.style.display === "block";
         //Skapa en if-sats som gör motsatsen till syns eller dold.
         if(kittenIsVisible){
            kitten.style.display = "none";
         } else {
            kitten.style.display = "block";
         }
         //Visa bilden
         
       } 
       // En funktion för att dölja bilden
    
       // En funktion för att ändra bildens bredd
       function changeWidthImage(){
          const kitten = document.querySelector("img");
          kitten.width = 550;
       }

       // Koppla en eventListener till varje button
       hideButton1.addEventListener("click", showHideImage);
       hideButton2.addEventListener("click", showHideImage);
       hideButton3.addEventListener("click", showHideImage);

       widthButton.addEventListener("click" , changeWidthImage);
  