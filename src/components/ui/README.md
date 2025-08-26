## UI Components

This folder contains reusable user interface components for your application. Each component should be:

- **Self-contained:** All logic, styles, types, and tests for a component should live in its own subfolder (e.g., `Button/`, `Card/`).
- **Documented:** Include a brief description and usage example in the component or its README if needed.
- **Tested:** Colocate unit and snapshot tests in a `__tests__` subfolder within each component directory.
- **Typed:** Use TypeScript for props and internal logic to ensure type safety.
- **Styled:** Use CSS modules or another scoped styling solution to avoid global style conflicts.
- **Modular:** Export each component from its own `index.ts` for easy imports.

### Example Structure

```
ui/
 ┣ Button/
 ┃ ┣ Button.tsx
 ┃ ┣ Button.types.ts
 ┃ ┣ Button.module.css
 ┃ ┣ Button.utils.ts
 ┃ ┣ __tests__/
 ┃ ┃ ┗ Button.spec.tsx
 ┃ ┗ index.ts
 ┣ Card/
 ┃ ┣ Card.tsx
 ┃ ┣ Card.types.ts
 ┃ ┣ Card.module.css
 ┃ ┣ Card.utils.ts
 ┃ ┣ __tests__/
 ┃ ┃ ┗ Card.spec.tsx
 ┃ ┗ index.ts
 ┗ ...
```

### Guidelines

- Keep components focused and generic so they can be reused across the app.
- Avoid business logic in UI components; keep them presentational.
- Use Storybook or similar tools for visual documentation if desired.

---

> Add new UI components here following the above conventions.
