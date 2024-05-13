TAD TIP: I took these. Not official or copied from Waites I just think this will help for the exam  

# TO STUDY

Databases (within and without AJAX)

JSON

Fetch

Interactive Forms

MUST KNOW : [HTTP request methods - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

# AJAX

AJAX - Asynchronous JavaScript and XML

Allows you to load new content without refreshing the page.

## short history

1990 - HTML

> second button was pressed, page would refresh for any change

1995 - Java Applet

> small app made with Java

> like a plugin, runs in browser

> started bad stuff, could be malicious

1999 - Microsoft

The XMLHTTP ActiveX Control (created with c++ and com)

Made IE5

2000 -

## what it means

Asynchronous - parallel execution

JavaScript- object based scripting language

XML - E*x*tensible *M*arkup *L*anguage

### XML

> from 1970, by IBM

> used to "mark up" technical documents

> was initially GML - Goldfarb, Mosher, and Lorie (devs who made it)

(also the internet is the connection of computers and the world wide web is the webpages you view fun and good to know fact)

(Here down I'm gonna write it down as Waites says it)(and will ***try*** to be organized)

XML us a Meta(may-tuh(joke))-language - a language used to create other languages

XML is a structural(structured) language - elements are nested -> **ROOT ELEMENT** (everything nested within)

```html
<!doctype HTML> <!--root of an html doc-->



<?xml version-"1.0" encoding="utf-8"?> <!-- root of a xml doc-->
```

# Other(aka everything from now I don't care about headers enough)

CRUD - atomic transaction. Should happen successfully, or not happen at all.

meant to prevent corruption of data-data that can't be trusted is bad data.

## XML

XMLHttpRequest - object to interact with servers. Lets you get data from a server

without having to do a full page refresh.

XMLHttpRequest -> XMLHttpRequestEventTarget -> EventTarget

child -> parent -> grandparent (dynamics of the above line)

look at the mdn docs to see all the properties and methods

## open()

overloaded method

does 4 things, depending on # of inputs

loads new or existing browser content.

## Unordered list stuff

1) We need to establish a TCP/IP connection between out script and an endpoint (***request***)

2) We need to download the payload (***response***)

3) Process the payload.

Parse from <XML> into <HTML>

## In documentation, pay close attention to the verb used

## open()

[XMLHttpRequest: open() method - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open)

syntax :

open(method, url) // what is required

open(method, url, async)

open(method, url, async, user)

open(method, url, async, user, password)

method - the HTTP request method to use, such as "GET", "POST", "PUT", "DELETE", etc. Ignored if URL is not HTTP(S). AKA:how it opens it.

url - string that includes the URL

async - either **true** or **false** - false be default, decides if it will do it async

user - optional username, **null** by default

password - optional password, **null** by default

### HTTP requests

> get - returns a url with ? in it. Only returns the data.

> post - returns an entity *to* what was requested.

> put - replaces all representation of the url with what you get

> delete - deletes it

## fun fact all functions are objects

## GOTTA know the readyState values

> Value: 0: UNSENT           : Client has been created, open() not called yet

> Value: 1: OPENED           : open() has been called

> Value: 2: HEADERS_RECEIVED : send() has been called, and headers and status are available

> Value: 3: LOADING          : Downloading; responseText holds partial data

> Value: 4: DONE             : The operation is complete

## DHTML

Dynamic HTML

Changing HTML on the fly with JavaScript

Dynamically updating the **content** (content is king. Make people want the content)

## Interactive Forms

1) HTML form - ELEMENT

2) JS Form - OBJECT

2 ways to refer to a Form Element

1) document.forms[0].elements[0].value (it is a property of the document that gives every form in order of appearence. the.elements[0].value gets the value of what is in it)
* by its index in the form.element property
2) document.myform.txtName.value
* by its value
