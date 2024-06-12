## Sanity Types

For sanity types create first the schema in the Sanity Studio with:

```bash
npx sanity schema extract --enforce-required-fields
```

copy it into this project and then run the following command for creating the types including the groq queries:

```bash
npx sanity typegen generate
```
