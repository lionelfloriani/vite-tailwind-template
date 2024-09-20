# vite-tailwind-template

## Introduction

This project template is built using [Vite](https://vitejs.dev/), [Tailwind CSS](https://tailwindcss.com/), [ESLint](https://eslint.org/), and [Prettier](https://prettier.io/). It offers a fast development environment that streamlines your workflow, helping you build applications efficiently while ensuring code quality.

## Getting Started

To initialize the project, run:

```bash
npm install
```

This will install all necessary dependencies.

Make sure you have the **Prettier** extension installed in your editor, and that it is set up to format files automatically on save (`CMD + S` / `CTRL + S`).

---

## Available Commands

-   **Start Development Server**\
    Launches a local development server with hot-reloading.

    ```bash
    npm run dev
    ```

-   **Build the Project**\
    Compiles and bundles the project for production.

    ⚠️ Before building, ESLint will run to ensure code quality.

    ```bash
    npm run build
    ```

-   **Preview the Production Build**\
    Serves the production build locally for inspection.

    ```bash
    npm run preview
    ```

-   **Deploy to GitHub Pages**\
    Deploys the project to GitHub Pages.

    ```bash
    npm run deploy
    ```

---

## Adding Images with JavaScript

To load an image dynamically in JavaScript using Vite, follow these steps:

1. Import the image file:

    ```js
    import examplePicture from './examplePicture.png';
    ```

2. Create an image element and append it to the DOM:

    ```js
    const image = document.createElement('img');
    image.src = examplePicture;
    document.body.appendChild(image);
    ```

⚠️ **Note:** Setting image URLs directly in JS may cause errors because Vite won’t be able to bundle them correctly.

---

## Tailwind Customization

This template utilizes a combination of CSS variables and Tailwind custom classes to ensure a cohesive and consistent design.

#### CSS Variables

In `./src/styles/custom.css`, define the following CSS variables:

-   `--dark-color`
-   `--light-color`
-   `--primary-color`
-   `--secondary-color`

You can then use these variables as classes. For example, simply use `.dark-color` as a class. The variables are also linked for use with `bg-dark-color`, `bg-light-color`, and so on.

#### Type Scale and Spacing Scale

A type scale and spacing scale have been defined:

-   **To modify the type scale**, edit the relevant sections in `./src/styles/custom.css`.
-   **To modify the spacing scale**, adjust the settings in `./config/tailwind.config.js`.

### Further Configuration Required

The following classes require additional configuration depending on your project's design:

-   `.primary-button`
-   `.secondary-button`
-   `.primary-link`
-   `.secondary-link`

While the correct colors have been assigned, no specific styles have been applied. Once you style your button, for example, you can simply use the class on your `<button>` element, and voilà!
