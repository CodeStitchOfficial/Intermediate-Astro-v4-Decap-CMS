# Changelog

## 2.0.0

### Major changes
- Astro has been upgraded to v5.0

#### What should I do on my fork?
1. **Upgrade Astro and its dependencies** 
    1. Run `npx @astrojs/upgrade` in your terminal
    2. At the yellow warning, choose “Yes” to continue 
<br>

2. **Breaking change: Renamed: <ViewTransitions /> component**
<br> 📢 Reference: https://docs.astro.build/en/guides/upgrade-to/v5/#renamed-viewtransitions--component
    1. In `BaseLayout.astro`, replace all occurrences of the `ViewTransitions` import and component with `ClientRouter` 
        
        ```tsx
        // BaseLayout.astro
        - import { ViewTransitions } from 'astro:transitions';
        + import { ClientRouter } from 'astro:transitions';
        
        <html>
          <head>
            ...
           - <ViewTransitions />
           + <ClientRouter />
          </head>
        </html>
        ```
 <br>       

3. **Breaking Change: Content Collections**
<br> 📢 Reference: https://docs.astro.build/en/guides/upgrade-to/v5/#updating-existing-collections
    1. **Move the content config file**. This file no longer lives within the `src/content/` folder. This file should now exist at `src/content.config.ts`.
    
    2. **Edit the collection definition**. Your updated collection requires a `loader` which indicates both a folder for the location of your collection (`base`) and a `pattern` defining the collection entry filenames and extensions to match.
    
        
        ```tsx
        // src/content.config.ts
        
         + import { glob } from 'astro/loaders';
        
        // type: 'content',
        
        loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
        
        ```
        
    3. **Change references from `slug` to `id`**. Content layer collections do not have a reserved `slug` field. Instead, all updated collections will have an `id`. 
        
        For example:
        
        ```tsx
        // src/pages/blog/[...post].astro
        
        export async function getStaticPaths() {
          const posts = await getCollection("blog");
          return posts.map((entry) => ({
            // params: { post: entry.slug },
            params: { post: entry.id },
            props: { post: entry },
          }));
        }
        ```
        
        > 📢 `CTRL+SHIFT+F` and check for any traces of `.slug`. There shouldn’t be any more.
                

    4. **Switch to the new `render()` function**. Entries no longer have a `render()` method. Instead, import the `render()` function from `astro:content`.
    
        
        ```tsx
        // src/pages/blog/[...post].astro
        
        import { getCollection, render } from 'astro:content';
        
        const { Content } = await page.render();
        const { Content } = await render(post);
        ```
        
        > 📢 Running into `Module '"astro:content"' has no exported member 'render'`?
        > => Restart the dev server

        

    5. Repeat for every content collection you may have added.
    
4. **Breaking change: TypeScript configuration**
<br> 📢 Reference: https://docs.astro.build/en/guides/upgrade-to/v5/#changed-typescript-configuration
    1. Add the following `include` and `exclude` properties to your existing `tsconfig.json`:
    
    ```
    {
      "extends": "astro/tsconfigs/base",
      "include": [".astro/types.d.ts", "**/*"],
      "exclude": ["dist"]
    }
    
    ```
- Ensure that the other packages you may have added are up-to-date and compatible with Astro v5
- Please refer to the [official Upgrade to v5 guide](https://docs.astro.build/en/guides/upgrade-to/v5/) if you run into any issues.

### Minor changes
- Added CHANGELOG.md to keep track of patch changes and setup instructions

## 0.1.0
### Added
- Initial release of Beginner-Astro-v4-LESS template