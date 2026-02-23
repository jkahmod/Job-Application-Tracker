01 -  What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ans : 1. getElementById() selects a single element using its ID. 
2.getElementsByClassName() selects multiple elements with the same class and returns an HTMLCollection.
3.querySelector() selects the first element that matches a CSS selector.
4.querySelectorAll() selects all elements that match a CSS selector and returns a NodeList.


02 - How do you create and insert a new element into the DOM?

Ans : First, create the element using createElement(). Then add content or attributes to it. Finally, insert it into the DOM using appendChild() or append().

03 - What is Event Bubbling? And how does it work?

Ans : Event Bubbling is a process where an event start from the target element and then propagates upward to its parents elements.

04 - What is Event Delegation in JavaScript? Why is it useful?

Ans : Event Delegation is a techniqu where a parent element handles events for its child elements.
It is useful because it reduces code, improves performance, and works for dynamically added elements.

05 - What is the difference between preventDefault() and stopPropagation() methods?

Ans : 
1, preventDefault() stops the browser’s default behavior.

2, stopPropagation() stops the event from propagating to parent elements.
