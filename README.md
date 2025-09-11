# Parallel Public Website

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

## Adding New Pages

### Step 1: Create Your Page

Create a new file in `/src/pages/` using this template:

**`/src/pages/YourPage.tsx`**

```tsx
import React from "react";
import "./New.css";

const YourPage: React.FC = () => {
  return (
    <div className="new-page-container">
      <div className="new-header">
        <h1 className="new-title">Your Page Title</h1>
      </div>
      <div className="new-content">
        <section className="new-section">
          <h2 className="new-section-title">Section Title</h2>
          <div className="new-section-content">
            <p>Your content goes here.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default YourPage;
```

### Step 2: Add CSS (Optional)

Create `/src/pages/New.css` for custom styles:

```css
.new-div {
  background: var(--color-primary-light);
  padding: var(--spacing-md);
}
```

### Step 3: Add Route

In `/src/App.tsx`:

1. Add import: `import YourPage from './pages/YourPage';`
2. Add route: `<Route path="/your-page" element={<YourPage />} />`

### Step 4: Add to Sidebar

In `/src/components/Sidebar.tsx`, add to the links array:

```tsx
{ path: '/your-page', label: 'Your Page', section: null }
```

## File Structure

- **Pages**: `/src/pages/` (Home.tsx, Contact.tsx, etc.)
- **Components**: `/src/components/` (Sidebar.tsx, Footer.tsx, etc.)
- **Styles**: Use CSS variables from `App.css` for consistency

## CSS Variables

Use these for consistent styling:

```css
--color-primary: #1782FF
--color-text-primary: #111827
--spacing-md: 1rem
--spacing-lg: 1.5rem
--font-size-base: 1rem
```
