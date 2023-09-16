const express = require('express');
const app = express();
const port = 3000;

const { menu } = require('./menu.js');

app.use(express.json());

// Home page: Display every item by title and each unique category dynamically
app.get('/', (req, res) => {
  // Extract unique categories from the menu data
  const categories = [...new Set(menu.map((item) => item.category))];

  // Create an array of menu items with only 'id' and 'title'
  const menuItems = menu.map((item) => ({ id: item.id, title: item.title }));

  // Send a JSON response containing categories and menu items
  res.json({ categories, menuItems });
});

// Look up a menu item by id using params
app.get('/menu/:id', (req, res) => {
  // Extract the 'id' parameter from the URL and convert it to an integer
  const itemId = parseInt(req.params.id);

  // Find the menu item with the matching ID
  const menuItem = menu.find((item) => item.id === itemId);

  if (!menuItem) {
    res.status(404).json({ error: 'Menu item not found' });
  } else {
    res.json(menuItem);
  }
});

// Query the menu based on category
app.get('/menu/category/:category', (req, res) => {
  // Extract the 'category' parameter from the URL and convert it to lowercase
  const category = req.params.category.toLowerCase();

  // Filter the menu items by the specified category
  const filteredMenu = menu.filter((item) => item.category === category);

  if (filteredMenu.length === 0) {
    res.status(404).json({ error: 'No menu items found for this category' });
  } else {
    res.json(filteredMenu);
  }
});

// Sort the menu based on price (ascending or descending)
app.get('/menu/sort/:order', (req, res) => {
  // Extract the 'order' parameter from the URL and convert it to lowercase
  const order = req.params.order.toLowerCase();

  // Create a copy of the menu array to avoid modifying the original data
  let sortedMenu = [...menu];

  if (order === 'asc') {
    sortedMenu.sort((a, b) => a.price - b.price);
  } else if (order === 'desc') {
    sortedMenu.sort((a, b) => b.price - a.price);
  } else {
    res.status(400).json({ error: 'Invalid sort order. Use "asc" or "desc".' });
    return;
  }

  res.json(sortedMenu);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
