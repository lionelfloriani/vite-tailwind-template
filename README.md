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

To customize Tailwind CSS:

1. **Extend the Default Theme**  
   Modify `tailwind.config.js` to add custom values:

    ```javascript
    module.exports = {
        theme: {
            extend: {
                colors: {
                    primary: {
                        500: 'value',
                    },
                },
            },
        },
    };
    ```

2. **Create Custom Utility Classes**
   Check out the `./src/styles/custom.css` for instructions.
