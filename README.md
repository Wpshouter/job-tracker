
## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

	getElementById - Does what it says get element matching it's id. Returns single element
	getElementsByClassName - Does what it says get element matching it's class. Returns mutiple element as array
	querySelector - It return element matchins css selectors. Returns single element
	querySelectorAll - It return element matchins css selectors. Returns mutiple element as array

### 2. How do you create and insert a new element into the DOM?
	we can create element using document.createElement method. We can insert that element by using appendChild method.

### 3. What is Event Bubbling? And how does it work?
	When we click an element on html web page that event propagates to all it's parent element upword. So first it fires on the element then it mvoes to upword elments.
### 4. What is Event Delegation in JavaScript? Why is it useful?
	It is technique to attach event on parent element then desice by code which child element is clicked.
### 5. What is the difference between preventDefault() and stopPropagation() methods?
	preventDefault we use this to stop default behaviour of an elment. It is to disable browser default action event for that element. 
	stopPropagation is used to stop Event Bubbling.


