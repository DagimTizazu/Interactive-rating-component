# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot/screenshot.jpeg)

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/interactiveratingcomponent-using-jquery-16-YyoSc2X)
- Live Site URL: [Add live site URL here](https://dagimtizazu.github.io/Interactive-rating-component/)

## My process

### Built with

- Semantic HTML5 markups
- CSS custom properties
- Flexbox
- sass
- Mobile-first workflow
- jQuery

### What I learned

in jQuery, a selection is considered a “truthy” value. This is because all jQuery objects, including selections, are considered truthy1. However, it’s important to note that the “truthiness” of a jQuery object doesn’t necessarily mean that the selection was successful or that the selected elements exist in the DOM. For example, if you try to select an element that doesn’t exist, jQuery will return an empty object, which is still considered truthy. Therefore, when working with jQuery selections, it’s often a good practice to check the length property of the jQuery object to ensure that the selection was successful.

```jQuery
var selection = $("#nonexistent");
if (selection.length) {
    // The selection was successful
} else {
    // The selection was not successful
}
//In this code, selection.length will be 0 if the selection was not successful, and 0 is a “falsy” value in JavaScript.

//code from my script
  if ($('.selected').length) {
            $selectedNumber = $('.selected:last').text();
            $('.rating-number').text($selectedNumber);
            $('.rating-wrapper').css('display', 'none');
            $('.thankyou').css('display', 'block');
        }
```

## Author

- Frontend Mentor - [@DagimTizazu](https://www.frontendmentor.io/profile/DagimTizazu)
- Email address - dagimtizazu4444@gmail.com
- Telegram - @dag400
