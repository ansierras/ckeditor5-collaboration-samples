# CKEditor 5 comments integration

This repository presents an integration of CKEditor 5 WYSIWYG editor with the
[comments](https://ckeditor.com/docs/ckeditor5/latest/features/collaboration/comments/comments.html) feature.

## Quick start

1. Clone the repository:

   ```bash
   git clone git@github.com:ckeditor/ckeditor5-collaboration-samples.git
   cd ckeditor5-collaboration-samples/comments-integration
   ```

2. Open one of the samples (`samples/comments-adapter.html` or `samples/load-save-integration.html`) in the browser.

3. Fill the prompt with your license key. For the trial licence key [contact us](https://ckeditor.com/contact/).

## Overview

The CKEditor 5 build is the [classic editor](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/overview.html#classic-editor) with the additional `comments` plugin.

Samples in this package include a built version of the editor in `build/classic-editor-with-comments.js`. They are ready to run and do not require the building step.

However, if you want to modify the build, for instance to add more plugins, refer to the [creating your own build](#creating-your-own-build) section below.

To change the license key, use the `Reset license key` button at the bottom of the page.

### CKEditor 5 load and save comments integration

The "Load and save" comments integration is the simplest way to integrate the CKEditor 5 comments plugin with your application. In this solution, users and comments data are loaded during the editor initialization and the comments data is saved after you finish working with the editor (for example when the form with the editor is submitted).

This sample complements [A simple "load and save" integration guide](https://ckeditor.com/docs/ckeditor5/latest/features/collaboration/comments/integrate-comments-with-application.html#a-simple-load-and-save-integration) from the CKEditor 5 documentation.

Treat this sample as a starting point for your own integration and see the source code to learn how it is implemented.

Open the `load-save-integration.html` sample in the browser, click the `Get editor data` button at the bottom of the sample and see the console to understand the data format returned by the editor.

### CKEditor 5 comments adapter

The comments adapter integration uses the provided adapter object to immediately save changes in comments in your data store. This is the recommended way of integrating comments with your application because it lets you handle the client-server communication in a more secure way.

This sample complements the [Comments adapter guide](https://ckeditor.com/docs/ckeditor5/latest/features/collaboration/comments/integrate-comments-with-application.html#adapter-integration) from the CKEditor 5 documentation.

Treat this sample as a starting point for your own integration and see the source code to learn how it is implemented.

Open the `comments-adapter.html` sample in the browser, then open the developer console to observe actions performed by the editor when adding, editing and removing comments.

## Creating your own build

The CKEditor build created for the purpose of this example is based on [classic editor](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/overview.html#classic-editor), but you can use any other [available CKEditor 5 build](https://github.com/ckeditor/ckeditor5#editors) as a base.

If you want to customize the build, edit the `src/classic-editor-with-comments.js` file and then build the application with the following commands:

```bash
npm install
npm run build
```

Note: The application supports JavaScript, PostCSS and SVG imports.

See the [CKEditor 5 Installing plugins guide](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/installing-plugins.html) to learn more.

The build process uses the webpack configuration from `webpack.config.js`. If you are familiar with webpack, you can play with this file to achieve a custom build that would fit your needs. You can check the [CKEditor 5 Advanced setup guide](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/advanced-setup.html#webpack-configuration) for some ready-to-use advanced configurations.
