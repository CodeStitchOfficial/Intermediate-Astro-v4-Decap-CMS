  <h3 align="center">Intermediate Astro v4 - Decap CMS</h3>

  <p align="center">
    This beginner kit includes a pre-configured Astro setup, along with five pages filled with CodeStitch components. Everything is ready to go right from the start, offering a fantastic introduction to the advantages of a Static Site Generator, complete with LESS preprocessing and a blog powered by Decap CMS. This kit also leverages the power of a few Astro tools such as, but not limited to, View Transitions, Astro components, scoped styling and scripting etc.
    <br/>
    <br/>
    <a href="https://beginner-astro-kit.netlify.app/" target="_blank">View Live Result</a>
  </p>

## Table of Contents

- [Overview](#overview)
- [Acknowledgments](#acknowledgments)
- [Prerequisites](#prerequisites)
- [Features](#features)
- [File Structure](#fileStructure)
  - [Root Files and Folders](#rootFilesAndFolders)
  - [Source Files and Folders](#sourceFilesAndFolders)
- [Getting Started](#gettingStarted)
- [Expanding the Project](#expandingTheProject)
  - [Reusing Code](#reusingCode)
  - [Adding More Pages](#addingMorePages)
  - [Navigation via Front Matter](#navigationViaFrontMatter)
  - [Built-in Astro components](#builtinastrocomponents)
- [Deployment](#deployment)
- [Conclusion](#conclusion)

<a name="overview"></a>

## Overview

This beginner kit includes a pre-configured <a href="https://www.astro.build">Astro</a> environment, which
allows for repeated components, centralized data and greater room to scale as your clients grow. The kit runs the latest major Astro version, v4. On top of this, a blog has been provided through [Decap CMS](https://decapcms.org/) to allow your clients to manage their content on their own. This can easily be adapted to anything which requires changing content, such as menus, job listing boards, portfolios and much more.

An example website has also been provided, with easy substitution of website sections possible through the use of <a href="https://codestitch.app/">CodeStitch's
vanilla component library</a>. This kit aims to get any project off the ground in as little time as possible, with deployment being possible in as little as two
minutes.

<a name="acknowledgments"></a>

## Acknowledgments

The author would like to acknowledge:
* [Cedar Studios](https://github.com/cedar-studios) - Their [Intermediate-Astro-Kit-LESS](https://github.com/cedar-studios/Intermediate-Astro-Kit-LESS/tree/master) is the base of this template, which aims to improve on a few issues such as a breaking update to Astro v.4 due to outdated `astro-netlify-cms` integration.
* [CodeStitch](https://codestitch.app/) - Some of their free stitches were used in this template.

<a name="prerequisites"></a>

## Prerequisites

Only the vanilla web technologies are _required_ before using this kit, with some familiarity with Astro and React-style Components and props also recommended, but not essential. A lot of the leg-work for the non-vanilla technologies has been done for you. If you would like to read up on some of these things, we recommend the following resources:

1. [Astro's Documentation](https://docs.astro.build/en/getting-started/)
2. [Astro Crash Course in 20 Minutes!](https://www.youtube.com/watch?v=zrPVTf761OI)
3. [Decap CMS' docs](https://decapcms.org/docs/intro/) can also be found should you wish to extend the CMS beyond what's in this kit



<a name="features"></a>

## Features

* Runs on Astro v4
* Astro's <ViewTransitions /> integration
* Leveraging components, props and scoped styles, as demonstrated in `/src/components/Landing.astro` for example
* Leveraging Astro's built-in components such as `<Picture />`, as demonstrated in `/src/components/Landing.astro` for example

This kit ships the following packages:
* [Astro Icon](https://www.astroicon.dev/) - Astro Icon is a straightforward icon system for the Astro framework.
* [Autoprefixer](https://www.npmjs.com/package/autoprefixer) - PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use. It is recommended by Google and used in Twitter and Alibaba.
* [LESS](https://www.npmjs.com/package/less) - Less makes a few convenient additions to the CSS language, but you can also simply write standard CSS if you wish.
* [decap-cms-app](https://decapcms.org) - Open source content management for your Git workflow. Use Decap CMS with any static site generator for a faster and more flexible web project
<a name="fileStructure"></a>

## File Structure

```
.
├── public/
|   |—— assets/
|   |   |—— favicons/
|   |   |—— fonts/
|   |   |—— images/
|   |   └── svgs/
|   |—— _redirects
|   |—— robots.txt
|   └── sitemap.html
├── src/
|   ├── assets/
|   |   └── images/
|   ├── components/
|   ├── content/
|   |   └── blog/
│   ├── _data/
│   │   ├── client.json
│   │   └── navData.json
│   ├── layouts/
│   │   └── BaseLayout.astro
|   ├── libs/
|   |   └── utils.js
│   ├── pages/
|   |   └── blog/
|   └── styles/
├── .astro.config.mjs
├── .postcss.config.cjs
└── tsconfig.json
```

<a name="rootFilesAndFolders"></a>

### Root Files and Folders

- public/ - All assets you don't want optimized by Astro. Include fonts and favicons in here. The \_redirects, robots.txt, and sitemap.xml also live here.
- src/ - Raw, source code. The folder you work in.
- .astro.config.mjs - Astro config file, already set up for you.

<a name="sourceFilesAndFolders"></a>

### Source Files and Folders

- data/ - Global data accessible across the project. Fill out client.json before you begin. Just import this data at the top of a file you want to include it.
- assets/ - Non-HTML files. Images, scripts and styles. It is important to note that any assets you want optimized by Astro (such as assets use din <Picture /> components for example) must be placed in `src/...`
- \_redirects - To configure redirects. Read more on <a href="https://docs.netlify.com/routing/redirects/">Netlify</a>
- content/ - Data to render pages from, such as the blog.
- index.astro - Home page
- robots.txt - Instructions for site crawlers. Learn more, and generate your own, <a href="https://en.ryte.com/free-tools/robots-txt-generator/">here</a>
- sitemap.xml - A map of the pages on the domain. Create your own after deployment <a href="https://www.xml-sitemaps.com/">here</a>
- tsconfig.json - A utility file used here to declare shortcuts for easier imports.

<a name="gettingStarted"></a>

## Getting Started

1. At the top right of the GitHub Repository, click the green _Use this template_ button,
   then click _Create a new repository_.
2. Follow the instructions to create a new repository, using this repo as a template.
3. When created, clone the repository to your local machine.
4. Run `npm install` to install all dependencies.
5. Run `npm run dev` to start the project and spin up a development server on `localhost:4321`.

Running `npm run dev` will start a development server and begin LESS preprocessing.

Next, it is recommended to update `data/client.json` with some new information about this project. Through the power of templating, the
project's `<head>` and contact information will automatically be filled out, providing a first peek into some of the benefits of SSGs.

You can find all of CodeStitches `:root` variables, as well as .cs-topper, .cs-title and .cs-text, within the `root` stylesheet. Feel free to adjust these, or use our Content Flair micro-stitches, to update site-wide styles quickly.

In the `components` folder live all your custom components in `.astro` format. They take advantage of Astro's style-scoping. Any styles you write in `Header.astro` will not escape that file.

<a name="expandingTheProject"></a>

## Expanding the Project

Aimed towards freelancers, this kit was made with scalability and flexibility in mind, suiting a range of websites and client needs. As such, it is your choice
whether you'd rather make small tweaks to the existing site, or clear all the page content and build a site all over again. Outlined below are some best
practices for when it comes to building on top of this kit:

<a name="reusingCode"></a>

### Reusing Code

The main advantage to using an SSG is it brings components, popularized by JavaScript-heavy frameworks like React or Vue, to vanilla HTML. As Astro is being
used, componentization can be achieved through JSX-like syntax within .astro files.

For example, there is a call to action at the bottom of most pages. As the text content or styles don't need to change, `<CTA />` was
used. If this wasn't the case, and we wanted the CTA text to change, we'd start to think about passing props to `<CTA />`.

An example of passing props to components is `Landing />`.

In `about.astro`:

```JS
---
// import the component
import Landing from "@components/Landing.astro";
---

<BaseLayout
  title="About"
  description="Meta description for the page"
  preloadImg="/assets/images/cabinets2.jpg"
>
  // Use the <Landing /> component
  <Landing 
    title="About Us" // pass a `title` prop to the component
  />
```

In `Landing.astro`
```JS
---
const { title } = Astro.props // Destructure the incoming props. Note the `Astrop.props` syntax
---

<h1 id="home-h">{title}</h1> // Consumme the title prop in the JSX markup

```

<a name="addingMorePages"></a>

### Adding More Pages

Thanks to Astro Navigation, adding new pages is as simple as adding a file to src/pages/ and including it in the `data/navData.json` file:

```
---
// optional JavaScript frontmatter
---

<BaseLayout
  title="Page title for <title> and OG tags"
  description="Description for <meta> and OG tags"
>
    <!-- Page HTML goes here, without a <main> wrapper -->
</BaseLayout>
```

Starting from the top, you can see some data enclosed in --- tags. This is known as the page's front matter, which provides additional data to when it comes to
rendering your pages.

<a name="navigationViaFrontMatter"></a>

### Navigation via navData.json

The header navigation in the project is powered by the `navData.json` file. Each page in the navigation should be included as an item with a `key` property (page title to be displayed) and a `url` property (include a trailing slash). 

To add subpages, include a `children` property. The `children` property should be an array that contains more page objects (i.e., object containing a `key` and `url` property.) If a page has a `children` array property is specified, a dropdown will be created, providing
a Navigation + Dropdown Stitch is being used (see below). Navigations will render in order.

> If you wish to use an alternative Navigation stitch, you are welcome to swap out the `.cs-ul-wrapper` div in the Stitch for the one used in this starter kit. This
> will allow you to continue to reap the benefits of navigation vi navData.json. If you want to include dropdown menus in your navigation, you can use the `.cs-ul-wrapper` div below

```
<div class="cs-ul-wrapper">
  <ul id="cs-expanded" class="cs-ul" aria-expanded="false">
    {
      navData.map((entry) => (
        <li
          class:list={[
            "cs-li",
            { "cs-dropdown": entry.children?.length > 0 },
          ]}
          tabindex={entry.children?.length > 0 ? "0" : ""}
        >
          <a
            href={entry.url}
            class:list={[
              "cs-li-link",
              { "cs-active": Astro.url.pathname === entry.url },
            ]}
          >
            {entry.key}
          </a>
          {entry.children?.length > 0 && (
            <ul class="cs-drop-ul">
              {entry.children.map((child) => (
                <li class="cs-drop-li">
                  <a href={child.url} class="cs-li-link cs-drop-link">
                    {child.key}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))
    }
  </ul>
</div>
```

> Should you wish to use your own method of rendering the navigation, you can still take advantage of applying the "active" class styles by using a smaller amount of code within the class attribute of the link:

```
<li class="cs-li">
  <a href="/about" class:list={["cs-li-link, {"cs-active": "/about/" === Astro.url.pathname }]}>About</a>
</li>
```

> In this case, if the page slug is "about", the .cs-active class will be applied. You're welcome to adjust the page slug value to whatever you require ("blog", "/", "services", etc)
> For dropdowns, you can use a similar philosophy on the parent dropdown's class attribute, checking to see if any of the child pages are active before applying the styles. An example of this is shown below:

```
<li class="nav-link cs-li cs-dropdown">
  <span class:list={["cs-li-link nav-link",
    { 'cs-active': '/annapolis-custom-closets/' === Astro.url.pathname },
    { 'cs-active': '/bowie-custom-closets/' === Astro.url.pathname },
    { 'cs-active': '/severna-park-custom-closets/' === Astro.url.pathname },
    { 'cs-active': '/odenton-custom-closets/' === Astro.url.pathname },
  ]}>
    Areas Served
    <img class="cs-drop-icon" src="/assets/images/down.svg" alt="dropdown icon" width="15" height="15" decoding="async" aria-hidden="true">
  </span>
  <ul class="cs-drop-ul">
    <li class="cs-drop-li">
      <a href="/annapolis-custom-closets" class="cs-drop-link">Annapolis</a>
    </li>
    <li class="cs-drop-li">
      <a href="/bowie-custom-closets" class="cs-drop-link">Bowie</a>
    </li>
    <li class="cs-drop-li">
      <a href="/severna-park-custom-closets" class="cs-drop-link">Severna Park</a>
    </li>
    <li class="cs-drop-li">
      <a href="/odenton-custom-closets" class="cs-drop-link">Odenton</a>
    </li>
  </ul>
</li>
```

> In the above example, we're checking to see if the active page slug matches any of the four that are listed (annapolis, bowie, severna or odenton) and applying the .cs-active style to the parent if it does.

Below the front matter is the page content. Any code that should be sent to a layout should be enclosed in the layout's component:

```
<BaseLayout>
  <!-- Your html/jsx code here -->
</BaseLayout>
```

This code will be inserted into the `<slot />` component in BaseLayout.astro.

<a name="builtinastrocomponents"></a>

### Built-in Astro components: `<Image />` and `<Picture />`
This kit demonstrates the use of the built-in `<Picture />` component, [for which you can read the documentation here](https://docs.astro.build/en/guides/images/#picture-). However, not all native HTML `<picture>` elements from CodeStitch blocks have been replaced with Astro's `<Picture />` components. CodeStich users will have to decide which one they want to use:
 * CodeStich blocks already have fully-functionning `<picture>` elements that perform very well. However, the developper will have to do a time-consumming job with resizing and reformatting assets.
 * Astro's `<Picture />` components must be manually written to replace stitches. On the other hand, they automatically process and optimize assets, which allows the developper to skip the resizing and reformatting preparation work.

Not demonstrated in this kit, `<Image />` and `<Icon />` components may be used to further optimize your assets.

<a name="deployment"></a>

## Deployment

1. Ensure the sitemap, robots.txt and \_redirects have been filled out. Instructions and tools for how to do so can be found in the File Structure section
2. Navigate to your Netlify Admin Panel, click _Add new site | Import an existing project_
3. Follow the instructions to connect your GitHub repository to Netlify.

<a name="Conclusion"></a>

## Conclusion
I hope that this kit will prove useful to you. If you have any questions or would like to connect, feel free to reach out on [Twitter](https://twitter.com/BuckyBuck135) or at `buckybuck` on Discord.

Happy coding!
***Geoffrey***