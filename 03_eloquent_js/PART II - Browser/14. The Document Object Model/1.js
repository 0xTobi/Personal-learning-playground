//  THE STANDARD---------------------------------

//  The Document Object Model(DOM) is the data structure the browser uses to represent the document 

//  We call a data structure a tree when it has a branching structure, has no cycles , and has a well defined root.
//  In the case of DOM, document.documentElement serves as the root.

//  In the DOM. Nodes for elements, whcih represents HTML tags, determine the structure of the document. These can have child nodes.
//  An example is the document.body. Some of these children can be leaf nodes, such as pieces of text or comment nodes.

//  Each DOM node object has a nodeType property, which contains a code (number) that identifies the type of node.
//  Element nodes have code 1   -   Node.ELEMENT_NODE
//  Text nodes have code 3      -   Node.TEXT_NODE
//  Comment nodes have code 8   -   Node.COMMENT_NODE

//  Element nodes in the DOM have a childNodes property. This property holds an array-like object with a length property and properties 
//  labeled by numbers to access the child nodes. But it is an instance of the NodeList type, not a real array, so it does not have 
//  methods such as slice and map.




//  MOVING THROUGH THE TREE----------------------

//  Every node has a parentNode property that points to the node it is part of, if any.
//  Likewise every element node (node type 1. Tags) has a childNodes property that points to an array-like object holding its children.

//  There’s also the children property, which is like childNodes but contains only element (type 1) children, 
//  not other types of child nodes. This can be useful when you aren’t interested in text nodes.



//  --------------------------------------------------------------------------------------------------------------------------------
//  <html>
//  <body>
//  <h1>Hello World!</h1>   -   "h1" is the element node, while the text in-between is the text node. 
//  --------------------------------------------------------------------------------------------------------------------------------

{/* <body> 
    <h1>My home page</h1> 
    <p>Hello, I am Marijn and this is my home page.</p> 
    <p>I also wrote a book! Read it <a href="http://eloquentjavascript.net">here</a>.</p>
</body> */}

function talksAbout(node, string) { 
    if (node.nodeType == Node.ELEMENT_NODE) { 
        for (let i = 0; i < node.childNodes.length; i++) {  
            if (talksAbout(node.childNodes[i], string)) {   // checks if the child of the element node is also an element node.
                return true;                                // If it is it returns true and moves to the next child in that element node.
            } 
        } 
        return false;
    } else if (node.nodeType == Node.TEXT_NODE) {           // If the nodeType is a text node.
        return node.nodeValue.indexOf(string) > -1;         // Since indexOf returns the position where it finds a match starting from "0", which is greater than -1. If a match is found it'll surely have an index greater than -1, therefore it'll return "true". Else it'll return false.
    } 
}
console.log(talksAbout(document.body, "book"));

//  Because childNodes is not a real array, we cannot loop over it with for/of.
//  The nodeValue property of a text node holds the string of text that it represents.




//  FINDING ELEMENTS-------------------------------
//  Text nodes are created even for the whitespace between nodes.
//  The example document’s <body> tag does not have just three children (<h1> and two <p> elements) but actually has seven: 
//  those three, plus the spaces before, after, and between them.
//  To get the href attribute of the link , we don't want to say something like, “Get the second child of the sixth child of the document body.”

    let link = document.body.childNodes[5].childNodes[1]
    console.log(link.href)

//  We can instead say “Get the first link in the document.”

    let link = document.body.getElementsByTagName("a")[0]
    console.log(link.href)

//  All element nodes have a getElementByTagName method, which collects all elements with the given tag name that are descendants 
//  (direct or indirect children) of that node and returns them as an array-like object.

//  You can use document.getElementById to find a specific single node.

{/* <p>My ostrich Gertrude:</p>  */}
{/* <p><img id="gertrude" src="img/ostrich.png"></p> */}
<script> 
    let ostrich = document.getElementById("gertrude"); 
    console.log(ostrich.src);
</script>

//  document.getElementByClassName is like doc.getElementByTagName, in that it searches through the content of an element node and 
//  retrieves all elements that have the given string in their class attribute.




//  CHANGING THE DOCUMENT----------------------------
//  Almost everything about the DOM data structure can be changed.
//  The shape of the document tree can be modified by changing parent-child relationships. 
//  Nodes have a "remove" method to remove them from their current parent node.
//  To add a child node to an element node, we can use "appendChild", which puts it at the end of the list of children
//  "InsertBefore", inserts the node given as the first argument before the node given as the second argument.
//  The replaceChild method is used to replace a child node with another one.   (new node, old node)

//  All operations that insert a node somewhere will, as a side effect, cause it to be removed from its current position.





//  CREATING NODES-------------------------------------

//  Given a string, "createTextNode" gives us a text node that we can insert into the document to make it show up on the screen.

//  To create element nodes, you can use the document.createElement method. 
//  Takes a tag name and returns a new empty node of the given type





//   ATTRIBUTES----------------------------------------
//   HTML allows you to set any attribute you want on nodes.
//   This can be useful because it allows you to store extra information in a document.
//   Made up attribute names will not present as property on the element's node. You have to use getAttribute and setAttribute
//   to work with them.




//   LAYOUT---------------------------------------------
//   For any given document, browsers are able to compute a layout, which gives each element a size and position based on its 
//   type and content.
//   The size and position of an element can be accessed from JavaScript. 
//   The "offsetWidth" and "offsetHeight" properties give you the space the element takes up in pixels.
//   Similarly, "clientWidth" and "clientHeight" give you the size of the space inside the element, ignoring border width.




//   STYLING--------------------------------------------

//   CASCADING STYLES-----------------------------------




//   QUERY SELECTORS------------------------------------
//   The querySelectorAll method, defined on both the document object and element nodes, takes a selector string and returns a Nodelist
//   containing all the element that it matches.




//   POSITIONING AND ANIMATING
//   Position property has a default value of "static"










//   SUMMARY---------------------------------------------
//   - JavaScript programs may inspect and interfere with the document that the browser is displaying through a data structure called the 
//     DOM.

//   - This data structure represents the browser’s model of the document, and a JavaScript program can modify it to change the 
//     visible document.

//   - The DOM is organized like a tree, in which elements are arranged hierarchically according to the structure of the document. 

//   - The objects representing elements have properties such as parentNode and childNodes, which can be used to navigate through 
//     this tree.

//   - 