 //1.  we will write -  document.write() just to show the text written in the tags

        // 2. now let's check how to access elements by ID:
        var a = document.getElementById("para").innerHTML;
        document.write(a);
        document.write("<br>") // for new line



        // 3. now let's check how to access elements by class:
        // we have to access class just alike array. giving its index number. 
        //  ex- if we want to access Farhin , then simply access it by its index no. [0],  similarly  for Farhan and Farhina we have to access respectively [1], [2].
        //  otherwise if we only want to access through innerHTML, then it will show "undefined" 
        var b = document.getElementsByClassName("far")[0].innerHTML
        document.write(b);
        document.write("<br>")// for new line




        //  3. now access elements by TagName :
        var c = document.getElementsByTagName("p").innerHTML;
        document.write(c) // showing "undefined", because it is accessing object.html... not a particular element
        document.write("<br>")// for new line



        // 4. now access elements by First elements :       
        var d = document.querySelector('p').innerHTML;
        document.write(d)


        //5. now access children of a body :
        var child = document.body.children;
        console.log(child); // we will see in console that it is accessing all the child present in the body of this document. they are all like -[p#para, p.far, p.far, p.far, ul, script etc...]



        // 6. now I will add an extra child(p) in the body with the  help of Javascript , not by HTML :
        var para = document.createElement("p"); // 1. type of child created
        var textNode = document.createTextNode("This is a new para"); // 2. created a node of text in the child(p)
        para.appendChild(textNode); //3. added that text in the node of the child
        document.body.appendChild(para); //4. finally add the child in the body of the document to show in the webpage




        // 7. Now i will access first child and last child :
        var list = document.querySelector("ul");
        console.log(list); // check in console that this child is accessed
        console.log(list.firstChild); // will show first unordered list text : "Hello"
        console.log(list.lastChild); // will show last unordered list text : "You"




        //8. now I will write those list child again in webpage
        var x = document.querySelector("ul").innerHTML;
        document.write(x);




        // 9. Now I will access all the siblings in para tag with (class= para) 

        var para = document.querySelector(".para")

        var firstsiblings = para.nextElementSibling //first sibling is accessed
        console.log(firstsiblings); // OP- Farhin

        var secondsiblings = para.nextElementSibling.nextElementSibling // second sibling is accessed
        console.log(secondsiblings); // OP- Farhan