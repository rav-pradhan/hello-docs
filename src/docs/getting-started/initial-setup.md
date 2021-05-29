---
title: "Initial Setup"
---

Once you have cloned or downloaded the files from the GitHub repository, you are now able to start working on your own content.

But wait! The files you currently have are littered with the dry and puerile witterings of the very documentation you're reading. You don't really want to keep that, do you? On that note, let's look at how you can purge the default content and setup your own base starter from this.

## Purging Existing Documentation

In order to create a clean, fresh starter for your documentation, you can run the following from within your terminal:

{% code_line 'npm run purge:docs' %}

{% warning 'It is worth bearing in mind that this command will purge everything from the docs directory. Files, folders, you name it.' %}

## Your base config: site.json

Located in the `src/_data` directory, your `site.json` file is where you configure a few base things about your website:

```json
{
    "name": "Hello Docs",
    "url": "https://hello-docs.netlify.app/",
    "summary": "A simple, minimalist documentation builder"
}
```

- **name**: this would be your project name
- **url**: this is the URL for the live site. Currently, Hello Docs is published on Netlify, but you could use other hosting providers such as GitHub Pages
- **summary**: a plain-text summary for your website. This is displayed on the top header of the website