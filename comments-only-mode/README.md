# CKEditor 5 in the comments-only mode sample

This repository presents an integration of CKEditor 5 WYSIWYG editor with the
[comments](https://ckeditor.com/docs/ckeditor5/latest/features/collaboration/comments/comments.html) and [comments-only](https://ckeditor.com/docs/ckeditor5/latest/features/collaboration/comments/comments-only-mode.html) features.

## Quick start

1. Clone the repository:

   ```bash
   git clone git@github.com:ckeditor/ckeditor5-collaboration-samples.git
   cd ckeditor5-collaboration-samples/comments-only-mode
   ```

2. Open the `samples/comments-only-mode.html` page in the browser.

3. Fill the prompt with your license key. For the trial licence key [contact us](https://ckeditor.com/contact/).

## Overview

The sample consists of a simple application using CKEditor 5 [classic editor](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/overview.html#classic-editor) with additional [comments](https://ckeditor.com/docs/ckeditor5/latest/features/collaboration/comments/comments.html) and [comments-only](https://ckeditor.com/docs/ckeditor5/latest/features/collaboration/comments/comments-only-mode.html) plugins.

It is already compiled, so you can use it as it is. However, if you want to modify the build, for instance to add more plugins, refer to the [creating your own build](#creating-your-own-build) section below.

## Creating your own build

The CKEditor build created for the purpose of this example is based on [classic editor](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/overview.html#classic-editor), but you can use any other [CKEditor 5 build](https://github.com/ckeditor/ckeditor5#editors) as a base. Your build needs to contain the [comments-only](https://ckeditor.com/docs/ckeditor5/latest/features/collaboration/comments/comments-only-mode.html) plugin to make the editor work in the `comments-only` mode.

If you want to customize the build, edit the application (inside the `src` directory) and then build it with the following commands:

```bash
npm install
npm run build
```

Note: The application supports JavaScript, PostCSS and SVG imports.

See the [CKEditor 5 Installing plugins guide](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/installing-plugins.html) to learn more.

The build process uses the webpack configuration from `webpack.config.js`. If you are familiar with webpack, you can play with this file to achieve a custom build that would fit your needs. You can check the [CKEditor 5 Advanced setup guide](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/advanced-setup.html#webpack-configuration) for some ready-to-use advanced configurations.
