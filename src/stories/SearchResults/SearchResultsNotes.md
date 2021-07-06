# Search Results Component

Table that takes a searchResults input of an array of CharacterResults and displays them in rows.

## Example Usage

Example Search Results Markup

```html
<app-search-results [searchResults]="searchResults" (clicked)="clickHandler($event)"></app-search-results>
```

## Inputs 
```typescript
searchResults: CharacterResults[];
```

## Outputs (Emitters)

```typescript
clicked: number; // Emits character id on name/image click.
```