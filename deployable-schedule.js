// index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Universal Studios Trip Planner</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.5/babel.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lucide/0.294.0/umd/lucide.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.js"></script>
</head>
<body>
    <div id="root"></div>
    <script type="text/babel" src="app.js"></script>
</body>
</html>

// app.js
const { useState } = React;
const { ChevronDown, ChevronUp, Coffee, Sun, Sunset, Moon } = lucide;

const Schedule = () => {
    // [Previous React component code goes here - exact same as before]
};

ReactDOM.render(<Schedule />, document.getElementById('root'));

// README.md
# Universal Studios Trip Planner

A simple interactive schedule for planning your Universal Studios trip. View the live site at [your-username.github.io/universal-planner](https://your-username.github.io/universal-planner)

## How to Deploy

1. Create a GitHub account if you don't have one
2. Create a new repository named "universal-planner"
3. Upload these files to your repository
4. Go to Settings > Pages
5. Under "Source", select "main" branch
6. Wait a few minutes and your site will be live at your-username.github.io/universal-planner
