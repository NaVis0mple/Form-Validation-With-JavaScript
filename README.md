# Form-Validation-With-JavaScript
## [odin](https://www.theodinproject.com/lessons/node-path-javascript-form-validation-with-javascript)
### 
1. turn off the default form submit alert
```html
<form id="myform" novalidate>
```
2. use customer rule ,so it cant use```:invalid```
   so manually add css list 
```css
  function setInvalidCss (input) {
    input.classList.add('invalid')
  }
```
```css
  function unSetInvalidCss (input) {
     input.classList.remove('invalid')
  }
```
