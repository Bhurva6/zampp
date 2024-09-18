

```markdown
# Zampp Catalog

Zampp is a product catalog website built from scratch using Next.js. It helps users filter products based on various criteria such as gender, brand, price, and more. Users can also view products in two different layouts: a grid view and a list view. This project was developed to fulfill an assignment inspired by the Myntra Catalog Page, with a focus on filtering, sorting, and pagination functionalities.

## Features

- **Filter Products by:**
  - Gender
  - Category
  - Brand
  - Price Range
  - Color
  - Discount Rate
- **Sort Products by:**
  - Popularity
  - Trending
  - Recommended
- **Paginated Views:** Navigate through pages of products easily.
- **Multiple View Options:** Switch between grid view and list view for product display.
- **Mock API Integration:** Simulated network request responses for fetching products.

## Assignment Requirements

The project fulfills the following assignment requirements:

- Create a Myntra-like Catalog Page.
- Implement filters based on Gender, Category, Brand, Price, Color, and Discount Rate.
- Allow sorting by Popularity, Trending, and Recommended.
- Include pagination for product results.
- Provide grid and list views for products.
- Use the Myntra design guidelines as inspiration:
  [Myntra Fashion Store](https://www.myntra.com/myntra-fashion-store?f=Categories%3AClothing%20Set%2CCo-Ords%3A%3AGender%3Amen%20women%2Cwomen)

## Tech Stack

- **Next.js:** For building the application and server-side rendering.
- **React:** For creating reusable UI components.
- **Tailwind CSS:** For styling the components and ensuring responsive design.
- **Axios:** For handling HTTP requests to the mock API.
- **React Icons:** For incorporating icons in the user interface.
- **Mock API:** Simulated product data for demonstration purposes.

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/zampp-catalog.git
   cd zampp-catalog
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## Folder Structure

```bash
.
├── components
│   ├── FilterBar.js
│   ├── SortBar.js
│   ├── ProductGrid.js
│   ├── Pagination.js
│   └── CustomRangeSlider.js
├── pages
│   ├── index.js # Main Catalog Page
├── public
├── styles
│   ├── globals.css
├── README.md
├── package.json
└── next.config.js
```

## Instructions

- Use the filter bar to narrow down product listings based on the specified categories.
- Use the sort bar to organize products based on popularity, trending, or recommendations.
- Switch between grid and list views using the view toggle buttons.
- Navigate between pages using the pagination controls.

