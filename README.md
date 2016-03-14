# Responsive Resizing - The React Way
Responsivly resizing fixed-width content (like d3 visualizations) is pretty messy. It's doubly so in React - components understanding their own DOM attribute makes them too smart and stateful for their own good. Fortunately, React presents a neat way to encapsulate this messiness through Higher-Order Components.

[Check out the demo](https://johnbartos.github.io/react-d3-demo/) and [view the source code](https://github.com/johnBartos/react-d3-demo/blob/master/src/dimensionable.js)
