# Store App

A simple e-commerce web application built with **React** and **Redux**.  
The project demonstrates state management, routing, and UI components for an online store.

## Features
- Browse products (shirts, sneakers, boots, etc.)
- Add products to cart
- Manage orders and users with Redux
- Responsive design
- Basic project structure ready for further development

## Tech Stack
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [MUI (Material-UI)](https://mui.com/)
- JavaScript (ES6+)
- CSS (custom styles)

## Project Structure
```
store-master/
├── public/          # Static files (HTML, manifest, icons)
├── src/
│   ├── Redux/       # Redux actions, reducers, and store
│   ├── assets/      # Product images
│   ├── App.js       # Main application component
│   ├── index.js     # Entry point
│   └── ...          # Other React components and utilities
└── package.json     # Dependencies and scripts
```

## Installation & Usage
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd store-master
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm start
   ```
4. Open in browser:
   ```
   http://localhost:3000
   ```

## Available Scripts
- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production