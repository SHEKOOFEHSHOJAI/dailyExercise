document.body.innerHTML="woo , i am all up in your webpage";
//control+shift+i  for key mianbor for console.log()



////Now that you've stored the headings in variables, use a for loop to iterate over them and change the text to something else, like 'Hello, world' or 'Allo'.
        var h1EL=document.getElementsByTagName("h1")
        for(var i=0 ;i< h1EL.length;i++){
             h1EL[i].innerHTML= 'Allo';
        }

        /////This webpage displays a table of avatars, with a list of characteristics and images for each one. In this challenge, you'll change attributes of the images in JS. Using the variable that we've already created, use a for loop to iterate through the images and change the height attribute of each image. If you've done it right, you should see the images change size.


        var avatarEls = document.getElementsByTagName("img");
        for (var i = 0; i < avatarEls.length; i++) {
          avatarEls[i].style.height = "20px";
        }



i9o
     //////Now, use JS to add 'tooltips' to each image. A tooltip is a little bit of text that shows up when you hover over an element. You can use the title attribute to set basic tooltips on HTML tags.

    ///In your for loop, set the title attribute of each image to the value of that image's alt attribute. You can test that it worked by hovering over the images after.


        var avatarEls = document.getElementsByTagName("img");
        for (var i = 0; i < avatarEls.length; i++) {
          avatarEls[i].style.height = "20px";
          avatarEls[i].title = avatarEls[i].alt;
        }

       ////step1
        //This webpage is all about trendy styles, and you'll use JS to fill in the trends and style them with CSS properties. In this first step, use JS to set the innerHTML of colorEl to your favorite color, and then use JS to set a matching color property.
            var colorEl = document.getElementById("trendy-color");
            colorEl.innerHTML = "clo";
            colorEl.style.color = "red";
            var handEl = document.getElementById("trendy-handwriting");
            var frameEl = document.getElementById("trendy-frame");
        


            ///////step2 
            ///Now use JS to set the text of handEl to your favorite celebrity's name and set a matching CSS font family property.




              var colorEl = document.getElementById("trendy-color");
              colorEl.innerHTML = "clo";
              colorEl.style.color = "red";
              var handEl = document.getElementById("trendy-handwriting");
              handEl.innerHTML = "hesami";
              handEl.style.fontFamily = "sans-serif";
              var frameEl = document.getElementById("trendy-frame");
             ////Finally, use JS to set the border of frameEl to some style that you think looks good.

               frameEl.style.border = "10px solid think ";
              

///This is an inside story about the true feelings of Oh Noes and Winston, and in this challenge, you'll fill in the crucial lines. For this first step, use innerHTML to set what Oh Noes says, and include a strong or em tag somewhere in it.
            var ohnoesSays = document.getElementById("ohnoes-says");
            ohnoesSays.innerHTML = "<strong><em>Oh Noes</strong>";
            var winstonSays = document.getElementById("winston-says");
            winstonSays.textContent = "Winston says";



            ////


            let imgEl=document.createElement("img");
            imgEl.src =
              "https://www.kasandbox.org/programming-images/animals/cat.png";

              imgEl.alt="this is img cat";
              document.body.appendChild(imgEl)
              /////<strong>cat</strong>
              var strong=document.createElement("strong")
              var stronNode=document.createTextNode("cat")
              strong.appendChild(stronNode);

              imgEl.style.backgroundColor

              /////Create a planet
            //This webpage is just a blank universe, and you'll fill it with planets and moons in this challenge. In this first step, use JavaScript to create a div using createElement, assign it the 'planet' class, set a nice background color for it, and finally append it to the body.
              var div = document.createElement("div");

              console.log(div);
              div.className = "planet";
              div.style.backgroundColor = "red";
              document.body.appendChild(div);


              //Create a moon
             ///In this step, create another div using createElement, assign it the 'moon' class, and append it to the planet that you just created. When you're done, feel free to add many more planets and moons!
               var div = document.createElement("div");

               div.className = "planet";
               div.style.backgroundColor = "red";
               document.body.appendChild(div);

               var moonEl = document.createElement("div");
               moonEl.className = "moon";
               div.appendChild(moonEl);


               /////remove atterbute in dom
               //element.removeAttribute(attrName);
               imgEl.removeAttribute("disabled");


               // add or remove multiple classes
                    div.classList.add("foo", "bar", "baz");
                    div.classList.remove("foo", "bar", "baz");
            /////event
            //  mouse events (MouseEvent(Opens in a new window)): mousedown, mouseup, click, dblclick, mousemove, mouseover, mousewheel, mouseout, contextmenu
            //touch events (TouchEvent): touchstart, touchmove, touchend, touchcancel
             //keyboard events (KeyboardEvent(Opens in a new window)): keydown, keypress, keyup
            // form events: focus, blur, change, submit
            //window events: scroll, resize, hashchange, load, unload