# Currency Converter

## Description

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Welcome to one of my first React application! This project is a simple Currency Converter, designed to help you quickly and effectively convert amounts from PLN to a selected currency.

### 🚀 Key Feature: Dynamic Live Rates

The application uses a custom React Hook (`useRates`) to fetch the most up-to-date exchange rates from an external API, ensuring all conversions are based on current market data.

The application enables you to:

- Enter any amount in Polish Zloty (PLN).
- Select the target currency from a list of currently available market rates.
- Obtain an immediate conversion result, formatted according to financial standards.

**It is an ideal tool for quickly verifying current currency values!**

## Demo

[Link to the Demo website](https://maja-glowania.github.io/currency-converter-react/)

![currency-converter](./public/assets/currency_converter.gif)

## Technologies

- **React** (JavaScript Library)
- **Styled-Components** (CSS-in-JS library, used for all component styling and global styles)
- **External API Integration** (Live exchange rates fetching)
- **Custom Hooks** (Logic for the API fetching is extracted into the `useRates` hook)
- **Modern JavaScript syntax (ES6+)**

## Architectural and Refactoring Changes

The application underwent significant refactoring to increase modularity, code cleanliness, and functionality:

1.  **Dynamic Data Source:** The converter logic was rebuilt. Static rate files were removed and replaced with dynamic data fetching from an API.
2.  **API Hook:** A custom hook **`useRates`** was introduced to encapsulate data fetching logic, loading states, and error handling.
3.  **Styling (CSS-in-JS):** Styling is now entirely defined using Styled-Components.
4.  **Global Styles:** Global CSS reset and `body` styles were moved to the `<GlobalStyle />` component.
5.  **Environment Variables:** The API key is securely handled using environment variables (`.env.local`).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
