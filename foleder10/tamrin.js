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