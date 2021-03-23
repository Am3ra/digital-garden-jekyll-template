---
---

topic: [[short trek]]

this is an attempt at cataloguing my recent foray into web components. 
This is a note referencing [[about this site]]


Recently, I've begun to look into jekyll includes, and how to use them to, well, *include* new components such as popups into my jekyll pages.
Thinking of that, I finally stumbled onto [*This Site*](https://daverupert.com/2017/07/jekyll-includes-are-cool/), which opened a whole new world to me.
Looking at this, I want to experiment more with Polymer, a web components library built by google.
[This seems to be a workable tutorial.](https://blog.webjeda.com/integrate-polymer-jekyll/)

Lets import and use a component.

Extending Include Components in Jekyll - Bjorn Lu](https://bjornlu.com/blog/extending-include-components-in-jekyll

[Jekyll Includes are Cool - daverupert.comdaverupert.com](https://daverupert.com/2017/07/jekyll-includes-are-cool/)
<!-- <script async src="https://unpkg.com/es-module-shims@0.10.1/dist/es-module-shims.js"></script
<script type="module" src="https://cdn.jsdelivr.net/npm/lit-element@2.4.0/lit-element.min.js"></script>
<script type="module" src="./components/my-element.js"></script> -->
<my-element mood="awesome"></my-element>

Most of the issues I've had boil down to avoiding installing npm in this repo, as I don't want to increase the stack.
I'm Working on including CDNs to provide the `JS`. 

Having given up on creating my own component, I'll now try to simply use a library:


<!-- <script type="module">
      import './node_modules/@polymer/paper-fab/paper-fab.js';
    //   import './node_modules/@polymer/iron-icons/iron-icons.html';
    </script>
<paper-fab icon="favorite"></paper-fab>
<paper-fab label="😻"></paper-fab> -->

Big woof.

Modern components libraries are migrating to using package name imports, rather than path-to-package named imports. This is rather problematic, given that I've been getting a bunch of `Relative module specifiers must start with “./”, “../” or “/”.` while using `polymer`, a pretty interesting web components library.

Your can read more about this [here.](https://www.polymer-project.org/blog/2018-02-26-3.0-preview-paths-and-names)

Don't know what to do now, I don't want to double down and add yet *another* piece to my current software stack. Jekyll and `JGD` are more than enough for me right now. Don't want to add another build process to elements.

Let's try this again with hybridsJS:

```html
<script type="module">
  import { html, define } from 'https://unpkg.com/hybrids@^5';
  
  function increaseCount(host) {
    host.count += 1;
  }

  const SimpleCounter = {
    count: 0,
    render: ({ count }) => html`
      <button onclick="${increaseCount}">
        Count: ${count}
      </button>
    `,
  };

  define('simple-counter', SimpleCounter);
</script>

<simple-counter count="10"></simple-counter>
```

<script type="module">
  import { html, define } from 'https://unpkg.com/hybrids@^5';
  
  function increaseCount(host) {
    host.count += 1;
  }

  const SimpleCounter = {
    count: 0,
    render: ({ count }) => html`
      <button onclick="${increaseCount}">
        Count: ${count}
      </button>
    `,
  };

  define('simple-counter', SimpleCounter);
</script>

<simple-counter count="10"></simple-counter>

Success! A simple counter has been implemented and included! HybridsJS has been the simplest to include, though not installed via npm as the other attempts. Wonder if it would hold up.

Anyways, after a couple of days of pulling hair, this was by far the simplest solutions, so this is me signing off! Send me a message if you want to ask about anything!
