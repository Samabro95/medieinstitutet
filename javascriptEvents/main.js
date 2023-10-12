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
               },
               headlineText: "Gullig apfamilj",
               descriptionText:"en familj av apor"
             },
             {
               src:"img2.jpg",
               alt:"",
               getSrc: function(){
                 return this.src;
              },
              headlineText: "Två lurviga jävlar",
              descriptionText:"två gosiga lemurer kanske?"
            },
            {
               src:"img3.jpg",
               alt:"",
               getSrc: function(){
                 return this.src;
              },
              headlineText: "Lejonface",
              descriptionText:"ett lejonansikte"
            },
            
           ];
          
          const getRandomInt = function(max) {

            return Math.floor(Math.random() * max);
          } 

          const choosenImage = allImages[getRandomInt(allImages.length)];
          kitten.src = choosenImage.getSrc();
          kitten.alt = choosenImage.alt; 
          
          // Skapa en variable för H1 och p

          const headline = document.getElementById("headline");
          const description = document.getElementById("description");

          // Sätta texten till den valda objectets headline och description

          headline.innerText = choosenImage.headlineText;
          description.innerText = choosenImage.descriptionText;
         
       }
       
       // Koppla en eventListener till varje button
       hideButton1.addEventListener("click", showHideImage);
       widthButton.addEventListener("click" , changeWidthImage);
       changeImageButton.addEventListener("click", changeImageFunction)
  