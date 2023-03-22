# A React Project Using MUI 5

Install 

```
npm install @mui/material @emotion/react @emotion/styled
```

Copy the `Roboto` Font

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
```
or maybe install the font locally.

And install the icons:

```
npm install @mui/icons-material
```

Clean up `index.html` and `public` directory.

Take out the css files

---

Can create custom styled components eg 

```jsx
BlueButton = styled(Button) {
	styles
}
```

Create a theme using :

```jsx
import {createTheme } from "@mui/material"
export const theme = createTheme({
	...
})
```

Import it and wrap App in it in `index.js` or in `App.js`:

```jsx
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

can import colors and elements by just typing them and letting it autocomplete.

---

## Flexbox

`<Box />` acts like a div
`<Container />` is like a div with default margin and is centered
`<Grid />` actually uses flexboxes
`<Stack />` one dimensional grid - can give flexbox properties

```jsx
<Stack >
  <Sidebar />
  <Feed />
  <Rightbar />
</Stack>
```

```jsx
<Box bgcolor="skyblue" flex={1} p={2}>Sidebar</Box>
```

How to make mobile?

Use breakpoints either defaults or custom.
So hide the sidebar and rightbar for example when the screen is small:

```jsx
<Box bgcolor="skyblue" flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
  Sidebar
</Box>
```

This sets the display to none for xs and bigger, but at sm and bigger it is reset to block.

---

Navbar

Use app Bar from mui

```jsx
<AppBar>
  <ToolBar>
    Navbar
  </ToolBar>
</AppBar>
```

wrapping the content in `ToolBar` gives it padding


Map the image items to create the image list

```jsx
<ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
  {itemData.map((item) => (
    <ImageListItem key={item.img}>
      <img
        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
```


---

Deploy: npm run build

check again how to deploy to different sites like github


---

skeleton loading:

```jsx
import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";

const Feed = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </>
      )}
    </Box>
  );
};

export default Feed;
```