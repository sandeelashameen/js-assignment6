// i. Get element of id "main-content" and assign them in a variable.
var mainContent = document.getElementById("main-content");

// ii. Display all child elements of "main-content" element.
var childElements = mainContent.children;
document.write(childElements + "<br>");

// iii. Get all elements of class "render" and show their innerHTML in the browser.
var renderElements = document.getElementsByClassName("render");
for (var i = 0; i < renderElements.length; i++) {
document.write(renderElements[i].innerHTML + "<br>");
}

// iv. Fill input value whose element id is "first-name" using JavaScript.
var firstNameInput = document.getElementById("first-name");
firstNameInput.value = "John";


// v. Fill input value whose element id is "last-name" using JavaScript.
var lastNameInput = document.getElementById("last-name");
lastNameInput.value = "Doe";

// vi. Fill input value whose element id is "email" using JavaScript.
var emailInput = document.getElementById("email");
emailInput.value = "johndoe@example.com";

//question 02
// i. What is the node type of the element with id "form-content"?
var formContent = document.getElementById("form-content");
var formContentType = formContent.nodeType;
document.write("<p>Node type of element with id 'form-content': " + formContentType + "</p>");

// ii. Show the node type of the element with id "lastName" and its child node.
var lastName = document.getElementById("lastName");
var lastNameType = lastName.nodeType;
var lastNameChildType = lastName.firstChild.nodeType;
document.write("<p>Node type of element with id 'lastName': " + lastNameType + "</p>");
document.write("<p>Node type of its child node: " + lastNameChildType + "</p>");

// iii. Update the child node of the element with id "lastName".
lastName.firstChild.nodeValue = "Last Name: Updated";

// iv. Get the first and last child of the element with id "main-content".
var mainContent = document.getElementById("main-content");
var firstChild = mainContent.firstChild;
var lastChild = mainContent.lastChild;
document.write("<p>First child of 'main-content': " + firstChild.textContent + "</p>");
document.write("<p>Last child of 'main-content': " + lastChild.textContent + "</p>");

// v. Get the next and previous siblings of the element with id "lastName".
var nextSibling = lastName.nextSibling;
var previousSibling = lastName.previousSibling;
document.write("<p>Next sibling of 'lastName': " + nextSibling.textContent + "</p>");
document.write("<p>Previous sibling of 'lastName': " + previousSibling.textContent + "</p>");

// vi. Get the parent node and node type of the element with id "email".
var email = document.getElementById("email");
var parentNode = email.parentNode;
var emailNodeType = email.nodeType;
document.write("<p>Parent node of 'email': " + parentNode.nodeName + "</p>");
document.write("<p>Node type of 'email': " + emailNodeType + "</p>");