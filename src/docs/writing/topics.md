---
title: "Topics"
---

At its core, a topic is folder within the the `src/docs` directory which contains Markdown files.

There is a little set up required to ensure that a topic and its corresponding pages are registered within the Hello Docs nav system. We'll look into that here.

## Creating a topic

The following is an example `docs` directory with two topics: systems thinking and design patterns.

```shell
├── systems-thinking
│   ├── index.md
│   ├── feedback-loops.md
└── design-patterns
    ├── index.md
    ├── singleton.md
```

### Index

The `index.md` file within each directory is key. You only need to include some frontmatter, but this is what is used by Hello Docs to build the topics navigation properly.

```md
---
title: "Systems Thinking"
position: 1
---
```

- **title** is used to to signpost the topic within the nav section
- **position** (optional) allows you to specify the position of the topic in the nav section. Topics are ordered from top to bottom in ascending order