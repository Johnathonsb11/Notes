# Lesson 1 Glossary:

## 1.1
- **Graphical user interface (GUI)** - It is a program that provides graphical navigation with menus and screen icons.

- **Integrated Development Environment (IDE)** - It’s a software application that provides a platform where developers can develop software.

- **JavaScript** - It is a scripting language for adding dynamic interactivity to web pages. Generally, used on the client-side but can also be used on the server-side.

- **jQuery** - It is a free and open-source cross-platform JavaScript library that simplifies client-side scripting and overcomes cross-platform inconsistencies.

- **Method** - It is an action that can be performed by an object.

- **Object** - It is a programming function that models the characteristics of abstract or real “objects” using classes.

- **Perl** - It is a script programming language that is commonly used for Web server tasks and CGI programs.

- **Hypertext Preprocessor (PHP)** - It is a server-side HTML-embedded scripting language for developing dynamic Websites.

- **Property** - It is a descriptive characteristic of an object (such as color, width, or height) that the developer stipulates in the creation of the object.

- **React** - It is an open-source JavaScript library developed by Jordan Walke at Facebook in 2011 for building user interfaces.

- **User Agent** - It is a W3C term for any application, such as a web browser or help engine, that renders HTML for display to users.

- *Value* - It is a specific quality (such as a specified color, width, or height) that belongs to the property of an object.

- **Virtual Reality (VR)** - It is a technology that simulates a user’s physical presence in a virtual environment by generating realistic images and other real-world sensations.

- **Statement** - It is a single line of code to be executed in a script or program.

- **Semantically** - A way that relates to the different meanings of words or other signs or symbols.

- **Java Applets** - A small, dynamic Java program that can be transferred via the Internet and run by a Java-compatible Web browser.

- **Syntax** - The set of rules that defines the combinations of symbols, which are considered to be correctly structured statements or expressions in that language.


# Lesson Plan 1.2:

**1.2.1** - Use attributes and methods to communicate with users, including the `type` attribute.

**1.2.2** - Define *variables*, *data types*, and *scope*.

**1.2.3** - List key keywords and reserved words.

**1.2.4** - Store user input in variables, and evaluate for appropriate responses using the console and built-in methods such as `alert()` and `prompt()`.

**1.2.5** - Distinguish between concatenation and addition.

**1.2.6** - Apply operators, including string concatenation (`+=`), strict comparison(`===`, `!===`), mathematical expressions precedence and bitwise operators.

**1.2.7** - Demonstrate how to use expressions.

**1.2.8** - Implement simple event handlers, including keyboard, mouse, and mobile (gestures or touch) events.

---

 For any language, we need *variables*, *data types*, *expressions*, and *operators*.

```js
let n1 = 100; // A semicolon represents a statement of code.
let n2 = 200;
let n3 = n1 + n2; // Has 2 expressions

// First expression is n1 + n2.
// Second expression is n3 = results of the First expression.

console.log(n3 + (n1 * n2)); // Has 3 expressions

// First expression is n1 * n2.
// Second expression is n3 + results of the first expression.
// Third expression is the log method called on the console.

let n4 = 300; console.log(n4); // 2 statements in one line of code.
```

Satements consists of one or more expressions and/or one or more operators.


## Object interaction

### Methods of the window Object:
- `alert(message)`
- `prompt(messsage, defaultValue)`
- `confirm(message)`

### Methods of the document Object:
- `write(markup - the text to be written)`

## Working with data in JavaScript

**Variables** - A named space of memory.

**Data Type** - A definition of the type of information that a variable holds.

### JavaScript Data Types

#### Primitive

* **`String`** - Any sequence of *alphanumeric characters* written in quotes (either single or double).

    ```js
    let s1 = "hello, world";
    ```

* **`Number`** - Simple *numeric value* written with our without decimals.

    ```js
    let n1 = 100;
    let n2 = 3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211;
    let n3 = 15e2;
    ```

* **`Boolean`** - Store one of two values: `true` or `false`.

    ```js
    let b1 = true;
    ```

* **`Null`** - Defines a *value* that *does not exist*.

    ```js
    let null1 = null;
    ```

* **`Undefined`** - The value of a *variable* that's created but has *no value*.

    ```js
    let und1 = undefined;
    ```

#### Non-Primitive

* **`Array`** - Special objects that can store *more than one value* at a time.

    ```js
    let nums = [1, 2, 3, 4, 5, 6]; // old school array syntax

    nums = new Array(100, 200, 300, 400, 500); // modern array syntax

    let grid = [
        [0, 1, 2], // < [0]
        [3, 4, 5], // < [1]
        [6, 7, 8]  // < [2]
    //   ^  ^  ^
    //  [0][1][2]
    ]; // 2-dimensional array

    /* An array in memory
        Addr  | Value
        0x100 | 1
        0x200 | 2
        0x300 | 3
        0x400 | 4
        0x500 | 5
        0x600 | 6
    */
    ```

* **`Object`** - Data structures that have their *own methods and properties* (values are stored as *name/key value pairs*).

    ```js
    let truck = {
        make: "Chevrolet",
        model: "Silverado 2500HD",
        year: 2006,
        transmission: "automatic",
        color: "white",
        is4WD: true,
    }
    ```

## Variables

### Declaring a variable
- **`var`** - declares a variable that *can* change but is subject to hoisting.
- **`let`** - declares a variable that *can* change.
- **`const`** - declares a variable that *can not* change.

```js
var name = "Johnny";
let name = "Johnny";

const NAME = "Johnny";

// we can change var/let variables like

name = "Tad";

// we cannot change const variables

NAME = "Tad"; // error
```

**Hoisting** - hoisting allows a variable to be used *before* it is declared.

**Hoisting variables is bad!!!**

```js
Color = "red";
var favColor;
```

## Naming variables

Should have *meaningful* and *descriptive* names.

```js
// bad example

let x;
x = document.getElementById("output");

// a good example

let outputElement;
outputElement = document.getElementById("output");
```

JavaScript is *case-sensitive*.

```js
let name; // are seperate variables
let Name;
let NAME;
```

Camel Casing is a good coding principle/practice.
- **lower camelCase** - the first letter is lowercase.
- **upper CamelCase** - the first letter is uppercase.

Variables must start with a *letter*, *dollar sign*, or *underscore*.

```js
// usable names
let outputElement;
let $outputElement;
let _outputElement;
```

**Variable scope** - The scope of a variable is a region in the code from which the variable can be accessed.

```js
// any variables declared outside a function are accessible by all code

let name = "Johnny"; // a global variable - any code can access it

function printName() {
    console.log(name); // this works since name is a global variable
}

// any variables declared inside a function are accessible only inside the function

function sayHi() {
    let msg = "Hello, World!";
    console.log(msg);
}

console.log(msg); // error! msg is local to the sayHi() function
```

does this work