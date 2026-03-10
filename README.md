# Save-a-dish

Save-a-dish is a mobile recipe manager built with React Native and Expo. The application allows users to browse recipes, view detailed cooking instructions, and save their favorite dishes for easy access later.

This project was developed as part of a mobile development course using the concepts covered in the LinkedIn Learning course **"Learning React Native" by Alex Banks**. The goal of the project was to apply core React Native concepts such as components, navigation, lists, styling with Flexbox, and touch interactions.

---

## Features

- Browse a list of available recipes
- View detailed recipe information including ingredients and cooking steps
- Save recipes to a favorites list
- Navigate between screens using a bottom tab navigation bar
- Scrollable recipe pages for easy reading while cooking
- Simple and clean mobile UI built with React Native components

---

## Application Screens

### Recipe List Screen
- Accessible from the bottom navigation bar
- Displays all available recipes from a local dataset
- Each recipe card includes:
  - Thumbnail image
  - Recipe title
  - Tags
  - Community rating
- Tapping a recipe navigates to the recipe details screen

### Recipe Details Screen
- Displays full information about the selected recipe
- Includes:
  - Recipe image
  - Ingredient list
  - Step-by-step cooking instructions
- Users can tap the **favorite button** to save the recipe

### Favorites Screen
- Accessible from the bottom navigation bar
- Displays all recipes the user has saved as favorites
- Selecting a recipe opens its detail page

---

## Technologies Used

- React Native
- Expo
- JavaScript (ES6)
- React Navigation
- AsyncStorage (for storing favorites)
- Flexbox for layout and styling
