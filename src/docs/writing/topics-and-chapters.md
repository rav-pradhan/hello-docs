---
title: "Topics & Chapters"
position: 1
---

Hello Docs works on the idea of your content being split into **topics** and **chapters**.

## Topics

At its core, a topic is folder within the the `src/docs` directory which contains Markdown files.

There is a little set up required to ensure that a topic and its corresponding pages are registered within the Hello Docs nav system. We'll look into that here.

### Creating a topic

The following is an example `docs` directory with two topics:

```shell
├── systems-thinking
│   ├── index.md
│   ├── stocks.md
│   └── feedback-loops.md
└── design-patterns
    ├── index.md
    └── singleton.md
```

### Index

The `index.md` file within each directory is key. You only need to include some frontmatter, but this is what is used by Hello Docs to build the topics nav properly.

```md
<!-- src/docs/design-patterns/index.md -->
---
title: "Design Patterns"
position: 2
---

<!-- src/docs/systems-thinking/index.md -->
---
title: "Systems Thinking"
position: 1
---

```

- **title** is used to to signpost the topic within the nav section
- **position** (optional) allows you to specify the position of the topic in the nav section. Topics are ordered from top to bottom in ascending order.

In this instance, we have specified that we'd like the Systems Thinking topic to be ordered first. If we had no `position` value specified, then the nav would've been set up in alphabetical order instead.

## Chapters

A chapter is essentially a page contained within a topic. With our example directory above, our chapters would be the `singleton.md`, `stocks.md` and `feedback-loops.md` pages.

Similar to topics, a chapter requires frontmatter to determine their listing on the nav component.

```md
<!-- src/docs/systems-thinking/feedback-loops.md -->
---
title: "Feedback Loops"
position: 2
---

<!-- src/docs/systems-thinking/stocks.md -->
---
title: "Stocks"
position: 1
---

<!-- src/docs/design-patterns/singleton.md -->
---
title: "Singleton Pattern"
position: 1
---
```

Just like our topics' `index.md`, the `title` is what's displayed in the nav, and it doesn't have to be the same as the file name. We can also use the `position` value to determine where the page is ordered.

{% warning 'The title is what gets printed as an h1 at the top of the page. This means that your chapters should contain h2s and below, in order to be accessible.' %}

All of this together means the nav will essentially render out an unordered list in the following fashion:

```md
* Systems Thinking
    * Stocks
    * Feedback Loops
* Design Patterns
    * Singleton Pattern
```
