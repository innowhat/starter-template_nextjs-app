## Common Components

This folder contains shared layout and structural components used throughout the application, such as headers, footers, navigation, and main layouts.

Each common component should be:

- **Reusable:** Designed to be used across multiple pages or features.
- **Consistent:** Follow the app’s design system and conventions for layout and style.
- **Self-contained:** Include all logic, styles, types, and tests in its own subfolder (e.g., `Header/`, `Footer/`, `MainLayout/`).
- **Tested:** Colocate unit and snapshot tests in a `__tests__` subfolder within each component directory.
- **Typed:** Use TypeScript for props and internal logic to ensure type safety.
- **Styled:** Use CSS modules or another scoped styling solution to avoid global style conflicts.
- **Modular:** Export each component from its own `index.ts` for easy imports.

### Example Structure

```
common/
 ┣ Header/
 ┃ ┣ Header.tsx
 ┃ ┣ Header.types.ts
 ┃ ┣ Header.module.css
 ┃ ┣ __tests__/
 ┃ ┃ ┗ Header.spec.tsx
 ┃ ┗ index.ts
 ┣ Footer/
 ┃ ┣ Footer.tsx
 ┃ ┣ Footer.types.ts
 ┃ ┣ Footer.module.css
 ┃ ┣ __tests__/
 ┃ ┃ ┗ Footer.spec.tsx
 ┃ ┗ index.ts
 ┗ ...
```

### Guidelines

- Keep common components focused on layout, structure, and navigation.
- Avoid feature-specific logic; keep these components generic and adaptable.
- Document any props or usage patterns that are important for consistency.

---

> Add new common components here following the above conventions.
