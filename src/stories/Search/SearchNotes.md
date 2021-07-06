# Search Bar Component

Simple search input bar with button that emits the input field's value on submit.

## Example Usage

Example Search Bar Markup

```html
<app-search (search)="search($event)"></app-search>
```

## Outputs (Emitters)

```typescript
search: string; // Emits when submit action occurs.
```