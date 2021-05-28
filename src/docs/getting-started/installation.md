---
title: "Installation"
---

## Setting up Node and NPM

If you haven't done so already, you need to install Node and Node Package Manager (NPM) in order to use Hello Docs.

{% warning 'While it is is recommended that you install the latest LTS version, Hello Docs can run on any version of Node from 12.10.0+' %}

Documentation for installing Node and NPM can be found [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

## Fetch the files from GitHub

In order to get hold of the files, you will need to download them from GitHub, where Hello Docs is hosted. [Here's the link to the repository](https://github.com/rav-pradhan/hello-docs).

### Git and the command line

If you are comfortable using Git and the command line, you can fork the repository and then clone it down with `git clone`.

### Downloading the files directly

If you're not so familiar with these tools, then you can use GitHub's web interface to download the repository as a zip file.

When you go to the Hello Docs repository linked above, click on the "Code" button. This will open up a dialogue box; click on "Download ZIP" in order to get the repository.

Once you have the files on your system, navigate to the root of the directory, open up your terminal, and run the following:

{% code_line 'npm install' %}

Assuming all goes well and no errors pop up in the terminal, you should now have the starter Hello Docs project set up. You can test this by running the following command from your terminal:

{% code_line 'npm run serve:docs' %}

If that too succeeds in compiling, you should now have a local server running. Your terminal will include an output similar to this:

```shell
[Browsersync] Access URLs:
 --------------------------------------
       Local: http://localhost:8080
    External: {Your external IP address}
 --------------------------------------
          UI: http://localhost:3001
 UI External: http://localhost:3001
 --------------------------------------
[Browsersync] Serving files from: dist
```

You can now navigate to `localhost:8080` in your web browser to see these very docs.

Of course, this isn't really what you want! Once you're happy with everything here, move on to [Initial Setup](/docs/getting-started/initial-setup) to see how you can purge the documentation and setup the defaults for your website.
