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

* **Pass by Value** - A mode that describes when values are passed to a function, and the function's parameters receive a copy of its argument's value.

* **Pass by Reference** - A mode that describes when values are passed to a function, and the function's parameters receive its argument's actual value.

* **[Event Bubbling and Event Capturing**](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling) - These are how events are propagated in HTML DOM, which in turn defines the order in which the elements of the DOM receive the event.

## Packet 2 - Debugging and Troubleshooting

* **Bug** - A term that is used in computer programming for an error in the code.

* **Debugging** - A term that is used in computer programming for troubleshooting and repairing code that does not work properly.

* **Watchpoint** - A technique that is used to troubleshoot logic errors.

## Packet 3 - Security

* **[Coookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)** - They are small pieces of information collected by a Web browser to help maintain state and track user activities. Cookies can reside in memory or be placed on a hard drive in the form of a text file.

* [**Cross-site Scripting (XSS)**](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting) - It is a security vulnerability in which an attacker embeds malicious script into a link that appears to be from a trusted site. Upon clicking the link, the embedded script is submitted in the client's HTTP request and can execute on the user's computer, enabling the attacker to steal information.

* **Frame-to-frame URL Change** - It is a technique in which one frame in a frameset can direct the URL in another frame to display a different page. This ability introduces security concerns.

* **Helper Application** - It is an application launched separately from the browser that helps the browser render certain file types, such as .pdf, .mpeg, and .doc.

* **[HTML Entity]**(https://developer.mozilla.org/en-US/docs/Glossary/Entity) - It contains symbol characters (such as < or &) that can be represented as themselves or, in HTML, as an alphanumeric code for purposes of programming or security. Also known as HTML escape characters.

* **Infinite Loop** - It is a JavaScript statement that has no attainable conditions for ending, and thus requires the user to close the browser in order to end the script.

* **Same Origin** - It is a policy that defines the relationships among various pages within a single Website. It requires that pages be "ancestors" in order to be allowed to navigate each other.

* **Signed-script** - It is a script validated by a certificate authority that can request extended privileges and abilities in the browser.

* **Zero-day Exploit** - It is an exploit that takes advantage of a security vulnerability on the same day the vulnerability becomes publicly or generally known. Zero-day exploits are usually posted by well-known hacker groups.

## Packet 4 - AJAX

* **Asynchronous JavaScript and XML (AJAX)** - A technology that combines functionality from JavaScript and XML to allow a web page to reload only a specified potion, rather than the entire page, in response to a request.

* **`XMLHttpRequest`** - A JavaScript object that is used to request either XML data or plaintext data from a Web server and is used in AJAX technology.

* **Relational Database** - A database that calls the specified function when the value of the readyState property changes.

* **`onreadystatechange`** - A property that calls the specified function when the value of the readyState property changes.

* **ActiveX** - A component program object that can be re-used by many application programs within a computer or among computers in a network.

* **JSON** - Text-only format, which is written with JavaScript notation and is used for sending and storing data.

* **Dynamic HTML (DHTML)** - A collection of technologies that is used together to create interactive and animated Websites by using a combination of HTML and CSS or JavaScript.

* **Standard Generalized Markup Language (SGML)** - A standard method that is used to specify descriptive markup language or tag set within a document.

* **Extensible Markup Language (XML)** - A meta-language that enables the developer to create unique tags for structuring Web documents based on context rather than appearance.

----

# Notes

## Packet 1 - Functions, Methods, and Events

> The `mouseover` event occurs went eh user moves the mouse pointer over a link or area object. This triggers the `onmouseover` event handler which calls a script.

> Casting refers to a way of changing a variable from one type to another. For example, a developer may need to convert a string value into a numeric value for calculations or vice-versa.

> If you declare a variable within a function definition, the only way you can access or change it is from within that function. Once you declare a variable within a function, the variable is known as a local variable, and you cannot access its value from any other function except the one in which it was declared.

> One of the most powerful features of a function is its ability to return a value to the calling statement. The `return` keyword is used to return values from a function. JavaScript functions can return values to the calling statement using the `return` statement. The value to be returned is placed after the `return` keyword. The value that is returned from a function can be assigned to a variable or it can be used in an expression.

> The generic syntax for a JavaScript user-defined function is as follows: 
> 
> ```js
> function functionName(argument1, argument2) {
>     // statements here
> }
> ```

> Two are handy in mathematical calculations: `parseInt()` and `parseFloat()`.
> * **`parseInt()`** - Converts a string to its integer equivalent
> * **`parseFloat()`** - Converts a string to its floating-point decimal equivalent.

> The `load` events occurs when a page is loaded into the browser. The `onload` event handler will execute a function if a `load` event occurs.

> JavaScript functions can return values to the calling statement using the `return` statement. The value to be returned is placed after the `return` keyword. THe value that is returned from a function can be assigned to a variable or it can be used in an expression.

> Calling a function can be performed from one function to another, from a user event, or a seperate `<script>` block.

> Occasionally, you will want ot declare a varible that can be accessed by more than on efunction or script block in your program. You will need to declare taht variable outside of any function definition, usually at the start of your script. This variable is known as a global variable. If you declare a global variable, you can then access its value from any function or script block on that page.

> Arguments are values passed into a function from outside the function. They are placed inside the () in the function name.

> The `call()` method is used to call a function with a user-defined owner object (the value of this instead of its default owner object).

> Arrow functions have a shorter syntax in comparison to conventional functions.

## Packet 2 - Debugging and Troubleshooting

> It is recommended that you do diligent research when choosing debugging tools. It is worth your time to find teh too(s) that best suit your system, your programs, and your need and preferences as a user. Remember that not all add-ons are safe or come from reliable sources. You should be very careful when choosing third-party additions to use in your browsers. Add-ons are capable of introducing security risks.

> An example of a common logic error is a script that concatenates when you want it to add. The browser thinks the coding is intentional and does not recognize casting errors because it simply sees a string.

> THe browsers in mobile devices perform differently because they are optimized for the limited display of a small screen and the different methods of user interaction. You must not only text your pages in mobile devices, but you may also need to develop customized pages for this audience.

> Various debugging tools are available to help you detect and locate errors in your code so you can begin the work of fixing them. It should be clear that debugging tools do not repair code for you. They simply locate and sometimes define errors in the code.

> In relation to computer programming, scripting, or markup language, a "bug" is an error in the code. There are several types of bugs:
> * **Load-time Errors** - Commonly called compiler or interpreter errors, these are typically syntax errors. Load-time errors usually cause error alerts.
> * **Run-time Errors** - After the script has loaded and is running, an error occurs. These are typically caused by improper use of commands. Run-time errors usually cause error alerts as well.
> * **Logic Errors** - These are methematical errors, errors in proper command usage, or errors in the structure of the script, which result in the script running improperly. Logic errors do not cause error alerts. The script may return unexpected results or may fail to execute at all.

> WHen you are troubleshooting a logic error, you generally use watchpoints, which help you monitor certain places in the script. For JavaScript, a typical watchpoint is an `alert()` method. You can set these alerts to display the contents of variables and to determine whether your code is reaching that point in the program. After the script has been debugged and is ready for production, you remove the alert watchpoints.

> You should take the following steps to debug your code:
> 1. Test the code
> 2. Identify the Problem
> 3. Locate the error
> 4. Review the code
> 5. Determine the error type
> 6. Determine how to fix the problem
> 7. Correct the code
> 8. Review the code again
> 9. Test your code again, and again
> 10. Repeat as needed.

> It is always wise to review your code manually, but manual reviews do not always catch errors, and with long programs, they can eb time-consuming. Fortunately various debugging tools are available to help you detect and locate errors in your code so you can begin the work of fixing them. Open a page and right-click inside the document window. Select *Inspect (Q)* from the options. This opens a window on the webpage with several tabs. Select *Console* from the menu. Any errors will appear in yellow.

> Maintenance debugging adn repairs are those performed after a website is launched into production.

## Packet 3 - Security

> Providing the user with a choice on whether to purchase products with or without an account gives the user the best experience and is ethically and legally correct.

> Accidental or malicious coding can generate infinite sequences that may cause browsers to malfunction or lock. If this happens, the user must force the browser to quit with CTR+SHIFT+ESC on Windows or CMD+OPT+ESC on Mac. For example, a `do...while` statement or a `for` statement can create and infinite loop that has no conditions for ending and will lock the browser, thus requiring the user to shut it down in order to stop the script.

> The browsers is one of a few applications that connect your operating system to the unprotected network that is the Internet. As such, the browsers can be considered a doorway for security problems that can affect your operating system. The operating system is typically secured using anti-virus software, which also protects the applications and data on the system.

> Use the JavaScript `navigator` object to detect the browser's type and version being used to view a webpage. This process of client-side detection allows you to tailor your webpages for optimum viewing in particular browsers, and then serve those tailored pages to the browsers for which they are meant.

> The `document.write()` method provides the simplest way to use JavaScript to write text onto a webpage. For this reason, many novice developers rely on it for much of their scripted functionality. However, it is not necessarily the best way. For example, a `document.write()` statement must be run before a page finishes loading, otherwise it will create a new page and overwrite your existing page content. More experienced developers learn that `document.write()` is actually quite limiting.

> A signed script is validated by a certificate to prove the identity of the author and integrity of the script. Because it carries this validation, the script is allowed to request expanded privileges and abilities, which may override the usual security. This allows the developer to exercise more control over activities than is usually allowed by JavaScript.

> "Cookie crumbs" are cookies that leave a trail following the user's progress. If a site employs cookie crumbs, then a user can leave the site, and when he returns at a later time, he can resume where he left off, instead of having to re-navigate. Cookie crumbs can be useful for gaming sites on which a user might want to save his progress and resume where he left off when he returns. 
