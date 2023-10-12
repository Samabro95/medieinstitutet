/*Ändra bild slumpmässigt
  - Lägg till en array med bildfiler i Javascript
*/


        
        // Skapa en variabel för varje button
      const hideButton1 = document.getElementById("hideButton1");
        
        
        
      const widthButton = document.getElementById("widthButton1");
       // skapa en variable för byta bild
       const changeImageButton = document.getElementById("changeImage");

       const kitten = document.getElementById("image1");


       // En funktion för att visa bilden
       function showHideImage(){
        
         
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
          const kitten = document.getElementById("image1");
          kitten.width = 500;
       }
       // En funktion som byter ut bilden
       function changeImageFunction(){
          const allImages = [
             {
                src:"img1.jpg",
                alt:"",
                getSrc: function(){
                  return this.src;
               }
             },
             {
               src:"img2.jpg",
               alt:"",
               getSrc: function(){
                 return this.src;
              }
            },
            {
               src:"img3.jpg",
               alt:"",
               getSrc: function(){
                 return this.src;
              }
            }
            
           ];
          
          const getRandomInt = function(max) {

            return Math.floor(Math.random() * max);
          } 

          const choosenImage = allImages[getRandomInt(allImages.length)];
          kitten.src = choosenImage.getSrc();
          kitten.alt = choosenImage.alt; 
          
         
       }
       
       // Koppla en eventListener till varje button
       hideButton1.addEventListener("click", showHideImage);
       widthButton.addEventListener("click" , changeWidthImage);
       changeImageButton.addEventListener("click", changeImageFunction)
  