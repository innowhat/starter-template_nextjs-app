## View Components

This folder contains page-level or feature-level components ("views") that represent distinct screens or sections of the application, such as `HomePage`, `AboutPage`, etc.

Each view and its child components must be placed in their own folders for better encapsulation, organization, and scalability.

- **Composes UI and common components:** Uses reusable building blocks to create complete screens.
- **Handles layout and structure:** Defines the arrangement of content for a specific page or feature.
- **Connects to data/state:** Fetches or receives data as needed for the view.
- **Can contain multiple child components:** Child components that are only relevant to the parent view should be placed in their own subfolders within the view's folder.
- **Is self-contained:** Includes styles, types, and tests in its own subfolder if the view is complex.
- **Is documented:** Add usage notes or prop documentation if the view is intended for reuse.

### Example Structure

```
view/
 ┣ HomePage/
 ┃ ┣ HomePage/
 ┃ ┃ ┣ HomePage.tsx
 ┃ ┃ ┣ HomePage.module.css
 ┃ ┃ ┣ __tests__/
 ┃ ┃ ┃ ┗ HomePage.spec.tsx
 ┃ ┣ ChildWidget/
 ┃ ┃ ┣ ChildWidget.tsx
 ┃ ┃ ┣ ChildWidget.module.css
 ┃ ┃ ┣ __tests__/
 ┃ ┃ ┃ ┗ ChildWidget.spec.tsx
 ┗ AboutPage/
   ┣ AboutPage/
   ┃ ┣ AboutPage.tsx
   ┃ ┣ AboutPage.module.css
   ┃ ┣ __tests__/
   ┃ ┃ ┗ AboutPage.spec.tsx
   ┣ AboutChild/
   ┃ ┣ AboutChild.tsx
   ┃ ┣ AboutChild.module.css
   ┃ ┣ __tests__/
   ┃ ┃ ┗ AboutChild.spec.tsx
```

### Guidelines

- Keep views focused on layout and composition, not low-level UI details.
- Place every view and child component in its own folder, even if only used by a specific view.
- Avoid business logic; delegate to hooks or data modules.
- Document any props or data requirements.

---

> Add new view components here following the above conventions.
