---
title: "Initial Setup"
---

Once you have cloned or downloaded the files from the GitHub repository, you are now able to start working on your documentation.

Of course, the files you would currently have are littered with these pages, which isn't really what you want. To that end, let's look at how you can purge the default content and setup your own base starter from this.

## Purging Existing Documentation

In order to create a clean, fresh starter for your documentation, you can run the following command from your terminal:

{% code_line 'npm run purge:docs' %}

{% warning 'This command will purge everything from the docs directory. Files, folders, you name it. You should only use this if you want to start with a completely clean project directory' %}
