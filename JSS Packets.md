# Glossary

-----

## Packet 1 - Functions, Methods, and Events

* **[Argument](https://developer.mozilla.org/en-US/docs/Glossary/Argument)** - A value or expression containing data or code passed onto a function or procedure.

* **Calling Statement** - A statement that transfers program execution to a subroutine, procedure, or function. When the subroutine is complete, execution transfers back to the command following the call statement.

* **[Casting](https://developer.mozilla.org/en-US/docs/Glossary/Type_Conversion)** - A technique for variable control in which a variable's value is changed from one data type to another.

* **Floating-Point Calculation** - A calculation in which the decimal point can move as needed to account for significant digits.

* **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)** - A named block of code that can be called when needed. In JavaScript, a function can reutrnn a value.

* **[Global Variable](https://developer.mozilla.org/en-US/docs/Glossary/Global_variable)** - A variable declared outside of any function, whose value can be accessed from any function or script block on the page.

* **[Local Variable](https://developer.mozilla.org/en-US/docs/Glossary/Local_variable)** - A variable declared within a function, whose value cannot be accessed from any function other than the one in which it was declared.

* **Loosely Typed Language** - A scripting or programming language that does not require the developer to declare a variable's data type and allows a variable's data type to change. JavaScript is loosely typed.

* **Pass by Value** - A mode that describes when values are passed to a function, and the function's parameters recieve a copy of its argument's value.

* **Pass by Reference** - A mode that described when values are passed to a function, and the function's parameters recieve its argument's actual value.

* **[Event Bubbling and Event Capturing**](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling) - These are how events are propagated in HTML DOM, which in turn defines the order in which the elements of the DOM recieve the event.

## Packet 2 - Debugging and Troubleshooting

* **Bug** - A term that is used in computer programming for an error in the code.

* **Debugging** - A term that is used in computer programming for troubleshooting and repairing code that does not work properly.

* **Watchpoint** - A technique that is used to troubleshoot logic errors.

## Packet 3 - Security

* **[Coookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)** - They are small pieces of information collected by a Web browser to help maintain state and track user activities. Cookies can reside in memory or be placed on a hard drive in the form a of a text file.

* [**Cross-site Scripting (XSS)**](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting) - It is a security vulnerablility in which an attacker embeds malicious script into a link that appears to be from a trusted site. Upon clicking the link, the embedded script is submitted in the client's HTTP request and can execute on the user's computer, enabling the attacker to steal information.

* **Frame-to-frame URL Change** - It is a technique in which one frame ina frameset can direct the URL in another frame to display a different page. This ability introduces security concerns.

* **Helper Application** - It is an application launched seperately from thebrowser that helps the browser render certain file types, such as .pdf, .mpeg and .doc.

* **[HTML Entity]**(https://developer.mozilla.org/en-US/docs/Glossary/Entity) - It contains symbol characters (such as < or &) that can be represented as themselves or, in HTML, as an alphanumeric code for purposes of programming or security. Also known as HTML escape characters.

* **Infinite Loop** - It is a JavaScript statement that has no attainable conditions for ending, and thus requires the user to close the browser in order to end the script.

* **Same Origin** - It is a policy tha tdefines the relationships among various pages within a single Website. It requires that pages be "ancestors" in order ot be allowed to navigate each other.

* **Signed-script** - It is a script validated by a certificate authority that can request extended privilages and abilities in the browser.

* **Zero-day Exploit** - It is an exploit that takes advantage of a security vulnerability on the same day the vulnerability becomes publicly or generally known. Zero-day exploits are usually posted by well-known hacker groups.

## Packet 4 - AJAX

* **Asynchronous JavaScript and XML (AJAX)** - A technology that combines functionality from JavaScript and XML to allow a web page to reload only a specified potion, rather than the entire page, in response to a request.

* **`XMLHttpRequest`** - A JavaScript object that is used to request either XML data or plaintext data from a Web server and is used in AJAX technology.

* **Relational Database** - A database that calls the specified function when the value of the readyState property changes.

* **`onreadystatechange`** - A property that calls the specified function when the value of the readyState property changes.

* **ActiveX** - A component program object that can be re-used by many application programs within a computer or among computers in a network.

* **JSON** - Text-only format, which is writtenw ith JavaScript notation and is used for sending and storing data.

* **Dynamic HTML (DHTML)** - A collection of technologies that is used together to create interactive and animated Websites by using a combination of HTML and CSS or JavaScript.

* **Standard Generalized Markup Language (SGML)** - A standard method that is used to specify descriptive markup language or tag set within a document.

* **Extensible Markup Language (XML)** - A meta-language that enables the developer to create unique tags for structuring Web documents based on context rather than appearance.

----

# Notes

## Packet 1 - Functions, Methods, and Events

> The `mouseover` event occurs whent eh user moves the mouse pointer over a link or area object. This triggers the `onmouseover` event handler which calls a script.

> Casting refers to a way of changing a variable from one type to another. For example, a developer may need to convert a string value into a numeric value for calculations or vice-versa.

> If you declare a varible within a function definition, the only way you can access or change it is from within that function. Once you declare a variable within a function, the variable is known as a local variable, and you cannot access its value from any other function except the one in which it was delcared.

> One of the most powerful features of a function is its ability to return a value to the callimg statement. The `return` keyword is used to return values from a function. JavaScript functions can return values to the calling statement using the `return` statement. The value to be returned is placed after the `return` keyword. The value that is returned from a function can be assigned to a variable or it can be used in an expression.

> The generic syntax for a JavaScript user-defined function is as follows: 
> 
> ```js
> function functionName(argument1, argument2) {
>     // statements here
> }
> ```

> 
