# Glossary

---

## Packet 1 - Functions, Methods, and Events

- **[Argument](https://developer.mozilla.org/en-US/docs/Glossary/Argument)** - A value or expression containing data or code passed onto a function or procedure.
  
- **Calling Statement** - A statement that transfers program execution to a subroutine, procedure, or function. When the subroutine is complete, execution transfers back to the command following the call statement.
  
- **[Casting](https://developer.mozilla.org/en-US/docs/Glossary/Type_Conversion)** - A technique for variable control in which a variable's value is changed from one data type to another.
  
- **Floating-Point Calculation** - A calculation in which the decimal point can move as needed to account for significant digits.
  
- **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)** - A named block of code that can be called when needed. In JavaScript, a function can reutrnn a value.
  
- **[Global Variable](https://developer.mozilla.org/en-US/docs/Glossary/Global_variable)** - A variable declared outside of any function, whose value can be accessed from any function or script block on the page.
  
- **[Local Variable](https://developer.mozilla.org/en-US/docs/Glossary/Local_variable)** - A variable declared within a function, whose value cannot be accessed from any function other than the one in which it was declared.
  
- **Loosely Typed Language** - A scripting or programming language that does not require the developer to declare a variable's data type and allows a variable's data type to change. JavaScript is loosely typed.
  
- **Pass by Value** - A mode that describes when values are passed to a function, and the function's parameters receive a copy of its argument's value.
  
- **Pass by Reference** - A mode that describes when values are passed to a function, and the function's parameters receive its argument's actual value.
  
- **[Event Bubbling and Event Capturing](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling)** - These are how events are propagated in HTML DOM, which in turn defines the order in which the elements of the DOM receive the event.
  

## Packet 2 - Debugging and Troubleshooting

- **Bug** - A term that is used in computer programming for an error in the code.
  
- **Debugging** - A term that is used in computer programming for troubleshooting and repairing code that does not work properly.
  
- **Watchpoint** - A technique that is used to troubleshoot logic errors.
  

## Packet 3 - Security

- **[Coookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)** - They are small pieces of information collected by a Web browser to help maintain state and track user activities. Cookies can reside in memory or be placed on a hard drive in the form of a text file.
  
- [**Cross-site Scripting (XSS)**](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting) - It is a security vulnerability in which an attacker embeds malicious script into a link that appears to be from a trusted site. Upon clicking the link, the embedded script is submitted in the client's HTTP request and can execute on the user's computer, enabling the attacker to steal information.
  
- **Frame-to-frame URL Change** - It is a technique in which one frame in a frameset can direct the URL in another frame to display a different page. This ability introduces security concerns.
  
- **Helper Application** - It is an application launched separately from the browser that helps the browser render certain file types, such as .pdf, .mpeg, and .doc.
  
- [**HTML Entity**](https://developer.mozilla.org/en-US/docs/Glossary/Entity) - It contains symbol characters (such as < or &) that can be represented as themselves or, in HTML, as an alphanumeric code for purposes of programming or security. Also known as HTML escape characters.
  
- **Infinite Loop** - It is a JavaScript statement that has no attainable conditions for ending, and thus requires the user to close the browser in order to end the script.
  
- **Same Origin** - It is a policy that defines the relationships among various pages within a single Website. It requires that pages be "ancestors" in order to be allowed to navigate each other.
  
- **Signed-script** - It is a script validated by a certificate authority that can request extended privileges and abilities in the browser.
  
- **Zero-day Exploit** - It is an exploit that takes advantage of a security vulnerability on the same day the vulnerability becomes publicly or generally known. Zero-day exploits are usually posted by well-known hacker groups.
  

## Packet 4 - AJAX

- **Asynchronous JavaScript and XML (AJAX)** - A technology that combines functionality from JavaScript and XML to allow a web page to reload only a specified potion, rather than the entire page, in response to a request.
  
- **`XMLHttpRequest`** - A JavaScript object that is used to request either XML data or plaintext data from a Web server and is used in AJAX technology.
  
- **Relational Database** - A database that calls the specified function when the value of the readyState property changes.
  
- **`onreadystatechange`** - A property that calls the specified function when the value of the readyState property changes.
  
- **ActiveX** - A component program object that can be re-used by many application programs within a computer or among computers in a network.
  
- **JSON** - Text-only format, which is written with JavaScript notation and is used for sending and storing data.
  
- **Dynamic HTML (DHTML)** - A collection of technologies that is used together to create interactive and animated Websites by using a combination of HTML and CSS or JavaScript.
  
- **Standard Generalized Markup Language (SGML)** - A standard method that is used to specify descriptive markup language or tag set within a document.
  
- **Extensible Markup Language (XML)** - A meta-language that enables the developer to create unique tags for structuring Web documents based on context rather than appearance.
  

---

# Notes

---

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
> 
> - **`parseInt()`** - Converts a string to its integer equivalent
> - **`parseFloat()`** - Converts a string to its floating-point decimal equivalent.

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
> 
> - **Load-time Errors** - Commonly called compiler or interpreter errors, these are typically syntax errors. Load-time errors usually cause error alerts.
> - **Run-time Errors** - After the script has loaded and is running, an error occurs. These are typically caused by improper use of commands. Run-time errors usually cause error alerts as well.
> - **Logic Errors** - These are methematical errors, errors in proper command usage, or errors in the structure of the script, which result in the script running improperly. Logic errors do not cause error alerts. The script may return unexpected results or may fail to execute at all.

> WHen you are troubleshooting a logic error, you generally use watchpoints, which help you monitor certain places in the script. For JavaScript, a typical watchpoint is an `alert()` method. You can set these alerts to display the contents of variables and to determine whether your code is reaching that point in the program. After the script has been debugged and is ready for production, you remove the alert watchpoints.

> You should take the following steps to debug your code:
> 
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

> "Cookie crumbs" are cookies that leave a trail following the user's progress. If a site employs cookie crumbs, then a user can leave the site, and when he returns at a later time, he can resume where he left off, instead of having to re-navigate. Cookie crumbs can be useful for gaming sites on which a user might want to save his progress and resume where he left off when he returns. Some shopping sites also use cookies crumbs so that if a user places items in the shopping cart then exits the site before completing the transaction, she can return at a later time or day to find the items waiting for her in the cart, ready to be purchased.

> When on fram ein a framset redirects a URL, the browser still displays the URL of the frameset document - rather than the URL of the target page - in the address bar. This technique is sometimes called cloaking and can be used for legitimate purposes (such as displaying a more memorable URL to users). It can also be used maliciously (such as concealing a "phishing" site as part of a website spoofing scam).
> 
> There are now rules that limit the types of pages you can redirect to in a frame or iframe. In a frameset page, if you try to improperly change one frame's URl from another frame using JavaScript, many modern browsers will return an error that says, "Unsafe JavaScript attempt to access frame with URl." and the URl will not change. There are way sto get around this, but such procedures are not considered best practice and the code is quite complex.
> 
> Among the major browsers, the resctriction policies have varied and become stricter over the years. With HTML5, most browser vendors have reached agreement on a "same-origin" policy that allows a frame to navigate another frame only to "ancestor" pages, which include parent, sibling and chid pages, but not pages from other sites.

> Use the `<noscript` tag to provide alternative versions of your pages to users with older browsers, alternative browsers (such as accessible speech browsers for those with vision disabilities), or browsers whose users have turned off-script rendering.

> XSS is a type of code injection attack. It occurs when an attacker takes advantage of holes or vulnerabilities in your web application, which enables him to bypass the security normally imposed by browsers.

> Most software vendors also offer updates, fixes and patches that you can download from their websites. Always make sure that you have the latest stable version of the software and the latest updates to best protect your operating system, browsers and other applications.

> A user is the owner of their data. JavaScript programmers need to understand and consider their ethical responsibility to the user, the owner of the website and for what purposes they are collecting data. The protectiong of this collected information falls under common ethics. A user owns the data in their account. They have the right to modify and remove the dtata or account altogether.

> Do not use deprecated code. The W3C deprecates certain HTML tags when it updates the standards, often due to security issues. Many developers continue to use deprecated tags as workarounds for older browsers, but this practice hinders forward-compatibility and can leave your pages vulnerable to exploits. If you are responsible for a website, you should update the pages to compliant HTML5. Cleanly written, the current code is by far your best defence. And when your HTML is up-to-date, your JavaScript performs better.

> The laws that govern the use and storage of data may differ from country to country. The General Data Protection Regulation (GDPR) is implemented by the European Council. For example, Frane is located in Europe and falls under the GDPR policy. As a result, any website that collects Europeans private data must comply with the policy.

## Packet 4 - AJAX

> Classic web application models were based on syncrhonous architecture. In this architecture, the clien't operation is blocked by synchronous requests unril the server responds. The JavaScript engine of the browsers is also blocked. Users will complain about slow response time when making selections on the webpage.

> AJAX is an asyncrhonous technology that can be used to improve loading times. Returning server variables from the server to the client is a typical AJAX-based request. This type of request can be used ot update content, such as date and time.

> AJAX makes asynchronous calls and interacts dynamically with a web server using JavaScript. Asynchronous calls mean the browser does not have to wait for the entire page to load before the user can interact with it. The main purpose of AJAX was to increase the speed and performance of web applicatoins. AJAX is considered user-friendly becuase it makes webpages more dynamic and responsive.

> AJAX can handle several requests. A typical AJAX request includes sending an entire page of information in a native language, such as ASP.NET, will handle the data, but AJAX can negotiate the transfer and presentation on the webpage.

> JavaScript used with AJAX provides a limited set of database operations, such as retrieving information from a database and displaying it back to the originating page. AJAX cannot perform back-end database operations. Instead, AJAX serves as the middleman. AJAX is used in the display portion of the data informatino cycle. Typically, SQL will query a database and return the applicable rows.

> AJAX uses the `XMLHttpRequest` object to continue functionality from JavaScript and XML to change only a portion of a webpage response to an event. When a request is sent to the server, only the affected part of the page needs to be reloaded. This saves time because the server does not have to resend a new page, and the client does not have to reload the entire page, including all graphics and text; only a specified area of the page will change. This partial change to only the called-upon portion of the page is what is meant by the term "asynchronous."

> The `XMLHttpRequest` object requests either XML data or plain text data from a web server. AJAX uses the `XMLHttpRequest` object to combine functionality from JavaScript and XML to change only a portion of a webpage in response to an event. When a request is sent to the server, only the affected part of the page needs to be reloaded.

> The `XMLHttpRequest` object requests the transfer of XML data between a client and a server. It makes requests but does not perform the actual transfer. HTTP or HTTPS performs the transfer of data. The `XMLHttpRequest` object can support any text-based format but is used mainly with XML.

> Sometimes it might take a long time for a server to generate a full response. In this case, the server might send a partial response as it become available. These partial responses can be sent as bursts, whose size and timing are unpredictable. This lack of continuity can disrupt the effect intended for a webpage's dynamic content.
> 
> Another issue with long response time is tha tusers can input further data or actions during the time they are waiting for a response, not realizing that different content is on its way back. The timing between the response and the user's next action can confuse the patr of the user, who may think a response to the first action came from his second actiong. In some cases, the first response may delete user input that was not yet submitted or the first response may never be received at all.

> Callback functions are functions that are passed to another function as an argument.

> JavaScript used with AJAX provides a limited set of database operations, such as retrieving information from a database and displaying it back to the originating page. AJAX cannot perform back-end database operations such as modifying the database schema, changing database security permissions, or creating custom views or stored procedures. AJAX is the middleman; it massages the data for presentation in the browser.

> The `onreadystatechange` property stores a function. When this function is stored, the `readyState` property stores the server's response. Each time the server's state changes, the function used with `onreadystatechange` will run and update the status. When status 4 is reach, the data has been transmitted from the server to the client.
> 
> | readyState Value | State | Description |
> | --- | --- | --- |
> | 0   | Uninitialized | An `XMLHttpRequest` object has been created, but not initialized |
> | 1   | Ready | Code has called the `XMLHttpRequest open()` method, and the `XMLHttpRequest` object is ready to send a request to the server |
> | 2   | Sent | A request has been sent from the client to the server witht he `send()` method, but a response has not yet been received |
> | 3   | Receiving | The HTTP reponse headers have been received from the server, but the message body has not yet been completely received from the client |
> | 4   | Loaded | The response has been completely received by the client |

> XML is a meta-language, which means it can be used to create other languages. XML enables developers to create unique tags for structuring web documents based on context rather than appearance.
> 
> XML is a structural language; thus it uses a root element and nested elements inside the root element that can be given attributes. XML may look similar to HTML, but there is a major difference. Unlike HTML, which generally describes the appearance of content on a webpage, XML describes the context of the content on the page.

> JSON (JavaScript Object Notation) is a text written with JavaScript notation. It is easy to read and write for developers and parse and generate for machines. It is used for sending and storing data. The data that is exchanged with the browser can only be in text format. Through JSON, any JavaScript data can be converted into text and sent to the server.

> The `fetch` API provides an interface for getting resources on the network. It is more flexible and powerful than `XMLHttpRequest`. It provides the generic request and respond objects to handle requests and responses.
> 
> The `GLobalFetch.fetch()` method is used to make a request. It is also implemented in the Window interface. It takes a mandatory argument, the type of resource to fetch. This request returns a promise that is resolved into the Response object. The promise is returned whether the request is successful or not.
> 
> The `promise` object allows the use of asynchronous code in a synchronous manner. For example, while making an asynchronous call to a web server, a promise object is created. This object represents the data that will be returned by the web server, sometime in the future. For the time, the actual data is not received from the server, the promise object serves as proxy data. Also, once the data is available, callbacks can be attached to it. Promises let developers use asynchronous code with more ease.

---

# Missed Assessment Questions

---

## JSS Assessment 01 | 5/6/24 | 20/25 - 80%

> You want to provide a customized webpage for each user. The customized webpage will be displayed immediately after logon. What can you use to meet this goal?
> 
> > **My answer:**
> > 
> > You should use AJAX
> 
> > **Correct answer:**
> > 
> > You should use server-side JavaScript
> 
> > **Feedback:**
> > 
> > Server-Side JavaScript (SSJS) is a JavaScript's server-side scripting environment. It allows connection to databases and supports many of the rich features and functions of any server-side scripting language. For example, it enables you to connect webpages to databases, enables server-side image maps and saves client state so the computer will remember where the client is during a multi-page process.
> > 
> > Domain 4: JavaScript Technology Extensions
> > 4.1: Implement JavaScript libraries and frameworks

> You are editing an XHTML webpage. You referenced jQuery in the <script> section, located between the <head> section. You noticed the 
> page is not displaying correctly in Chrome even though it rendered 
> correctly prior to the jQuery reference. You have verified Chrome has been updated and there are no typos in the jQuery reference. How can you resolve this issue?
> 
> > **My answer:**
> > 
> > Find a different solution becuase jQuery is not compatible with Chrome
> 
> > **Correct answer:**
> > 
> > Update the webpage to the most current version of HTML
> 
> > **Feedback:**
> > 
> > Good practices when writing webpage code for jQuery include:
> > 
> > - Use the latest version of HTML
> >   
> > - Use W3C-standard coding practices
> >   
> > - Check code carefully for up-to-date elements and attributes, correct syntax, capitalization and properly closed tags
> >   
> > - Avoid using deprecated elements
> >   
> > - Reference each jQuery and primary library reference in a separate `<script>` tag pair, located in the `<head>` tag pair.
> >   
> > - Pay attention when using multiple $ variables as a shortcut reference. The HTML interpreter will consider the library reference in the first `<script>` tag as the library to consult.
> >   
> > 
> > Domain 4: JavaScript Technology Extensions
> > 
> > 4.1: Implement JavaScript libraries and frameworks

> You are using the computer in the spare office for the day. You test the app you have been working on and notice the output does not display the same as it did in your office. The code has not changed since you last tested it in your office. You verified the browser software is up to date. The computer has sufficient resources, such as RAM and CPU speed. What can be causing the problem?
> 
> > **My answer:**
> > 
> > script interpretation
> 
> > **Correct answer:**
> > 
> > monitor resolution
> 
> > **Feedback:**
> > 
> > Browsers can appear to behave differently for several reasons, including monitor resolution. Some users still have 17-inch VGA monitors. And on every monitor, color, and dots-per-inch (DPI) resolution can be different.
> > 
> > Domain 2: Intermediate JavaScript Programming Techniques
> > 
> > 2.1: Debug and troubleshoot JavaScript code

> You are currently using React and want users to select the background and font colors on a webpage. The changes should appear without rebuilding the page. What can you use to accomplish this task?
> 
> > **My answer:**
> > 
> > You can use jQuery that will query the page and render without rebuilding the webpage.
> 
> > **Correct answer:**
> > 
> > You can use virtual DOM that will render user’s color choices without rebuilding the webpage.
> 
> > **Feedback:**
> > 
> > Every time a DOM changes the layout, this requires a lot of work from the browser. It must re-read the CSS, change the layout, and rebuild the page. With the virtual DOM there is no longer a need to update each element when the layout of the DOM changes. Also, rendering the virtual DOM is a lot faster than rendering actual browser DOM. React, a popular JavaScript library, uses the virtual DOM, making pages created with React much more efficient than pages created without the virtual DOM.
> > 
> > Domain 2: Intermediate JavaScript Programming Techniques
> > 
> > 2.3: Use the JavaScript Document Object Model (DOM).

> You need to use asynchronous code in a synchronous manner. You need a proxy, instead of the actual data, to be returned by the web server. You plan on using a callback once the data is available. What will you use to accomplish this task?
> 
> > **My answer:**
> > 
> > You will use an XMLHttpRequest
> 
> > **Correct answer:**
> > 
> > You will use a promise object
> 
> > **Feedback:**
> > 
> > We know that the promise object is used to retrieve the response of the request, but why use it? The promise object allows the use of 
> > asynchronous code in a synchronous manner. For example, while making an asynchronous call to a web server, a promise object is created. This object represents the data that will be returned by the web server, sometime in the future. For the time, the actual data is not received from the server, the promise object serves as proxy data. Also, once the data is available, callbacks can be attached to it.
> > 
> > Domain 4: JavaScript Technology Extensions
> > 
> > 4.2: Use JavaScript and AJAX to create interactive Web applications.

## JSS Assessment 02 | 5/7/24 | 15/21 - 71%

> Consider the following code:
> 
> ```js
> var instructions;
> 
> if (trafficLight == "red") { 
>     instructions = "You must stop.";
> } 
> else { 
>     instructions = "Proceed with caution.";
> }
> document.write(instructions);
> ```
> 
> You are working on an app that helps new drivers learn the rules of the road. What will be displayed as output if the variable *trafficLight* is assigned a value of “Red”.
> 
> > **My answer:**
> > 
> > You must stop
> 
> > **Correct answer:**
> > 
> > Proceed with caution
> 
> > **Feedback:**
> > 
> > It is important to note that JavaScript is case-sensitive, so the 
> > variable name "Result" is not the same as the variable names "result" or "RESULT." Further explanation: red is not the same as Red.
> > 
> > Domain 2: Intermediate JavaScript Programming Techniques
> > 
> > 2.2: Use JavaScript statements to control program flow

> You are using React to create an interface. You do not want each element on a page to render when the layout is altered because the page will take too long to load. What does React use to render user selections faster than rebuilding a page each time the layout changes?
> 
> > **My answer:**
> > 
> > React uses jQuery
> 
> > **Correct answer:**
> > 
> > React uses Virtual DOM
> 
> > **Feedback:**
> > 
> > Every time a DOM changes the layout, this requires a lot of work from the browser. It must re-read the CSS, change the layout, and rebuild the page. With the virtual DOM there is no longer a need to update each element when the layout of the DOM changes. Also, rendering the virtual DOM is a lot faster than rendering actual browser DOM. React, a popular JavaScript library, uses the virtual DOM, making pages created with React much more efficient than pages created without the virtual DOM.
> > 
> > Domain 2: Intermediate JavaScript Programming Techniques
> > 
> > 2.3: Use the JavaScript Document Object Model (DOM).

> Consider the following:
> 
> ```js
> function* mySequence() { 
>     var i = 0; 
>     while (i < 8) { 
>         yield i; 
>         i++; 
>     }
> }
> ```
> 
> Which of the following is a true statement about the code?
> 
> > **My answer:**
> > 
> > The function exits when i < 8 is met.
> 
> > **Correct answer:**
> > 
> > The code block is a generator function
> 
> > **Feedback:**
> > 
> > Generators are special types of functions that return iterable objects. A function becomes a generator function when it is defined using the function keyword. Generator functions use the yield operator to pause the function or send the output and receive input.
> > 
> > Domain 2: Intermediate JavaScript Programming Techniques
> > 
> > 2.5: Create and use custom JavaScript objects.

> Consider the following code:
> 
> ```js
> var finalExams = "Final exams are scheduled for next week.";
> var searchFor = /schedule/;
> var found = finalExams.match(searchFor);
> document.write(found);
> ```
> 
> What results will be displayed when you run the code shown above?
> 
> > **My answer:**
> > 
> > scheduled
> 
> > **Correct answer:**
> > 
> > schedule
> 
> > **Feedback:**
> > 
> > The following examples demonstrate the creation of two simple regular expressions. These regular expressions characterize the same type of operation you could perform with the indexOf() method. The created pattern is merely a string of text you need to match. The first example uses literal text whereas the second example uses the RegExp object to create a pattern:
> > 
> > ```js
> > // First example  
> > var myRegExp = /Juan/;
> > 
> > // Second example  
> > var myRegExp = new RegExp("Juan");
> > ```
> > 
> > In the first example, the regular expression is delimited by two forward slashes. The first slash marks the beginning of the regular expression and the second slash marks the end of the regular expression. In the second example, a new RegExp constructor creates a RegExp object with the constructor's argument (the desired pattern) placed in quotation marks and within parentheses.
> > 
> > Domain 2: Intermediate JavaScript Programming Techniques
> > 
> > 2.4: Use JavaScript language objects and create expressions.

> The customer service department told you that when customers fill out a form, they are not entering the date of their birthday correctly. 
> You check the form's code. The birthday field on the form is a 
> text field. What can you do to fix the problem? (SELECT ALL THAY APPLY)
> 
> > **My answer:**
> > 
> > You can edit the birthday field so that is a dropdown
> > 
> > You can display proper format so customers can see how to enter the date
> 
> > **Correct answer:**
> > 
> > You can perform validation on the birthday field
> > 
> > You can edit the birthday field so that is a dropdown
> 
> > **Feedback:**
> > 
> > One of the most common and functional uses of client-side JavaScript is to validate form field submissions. As mentioned previously, it is not possible to completely validate all form submissions; however, some validation is better than none. Here are some benefits of client-side
> > 
> > validation:
> > 
> > - Increased validity of form submissions
> >   
> > - Increased end-user satisfaction
> >   
> > - Conservation of bandwidth
> >   
> > 
> > Domain 3: Applied JavaScript
> > 
> > 3.2: Use JavaScript to develop interactive forms

> Consider the following code:
> 
> ```js
> var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
> var letters = alphabet.substring(7,11);
> document.write(letters);
> ```
> 
> What will be the output of the code?
> 
> > **My answer:**
> > 
> > HIJKL
> 
> > **Correct answer:**
> > 
> > HIJK
> 
> > **Feedback:**
> > 
> > When you want to examine and extract a portion of a string, you can use the `substring()` method. The generic syntax for the `substring()` method is as follows:
> > 
> > `string.substring(startingIndexPosition, endingIndexPosition); `
> > 
> > The `startingIndexPosition` argument is the zero-based count from the beginning of the string, and the `endingIndexPosition` argument is one 
> > character past where you want the extracted string to end.
> > 
> > Consider the following example:
> > 
> > `"ABC1234XYZ".substring(3,7); `
> > 
> > This statement would return the following value:
> > 
> > `1234`
> > 
> > In this statement, 1 is the fourth character (in index position 3) and 4 is the last character before index position 7. So, 1234 is the sequence that fits from index position 3 up to but not including index position
> > 
> > Domain 2: Intermediate JavaScript Programming Techniques
> > 
> > 2.4: Use JavaScript language objects and create expressions
