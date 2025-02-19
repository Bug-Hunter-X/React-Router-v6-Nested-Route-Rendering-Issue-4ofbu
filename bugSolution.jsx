The solution involves ensuring proper state management in child components to trigger re-renders when the route changes.  In this example, we'll use React's `useEffect` hook to trigger a re-render whenever the `params` change. Here's the corrected code:

```jsx
import { Outlet, useOutlet, useParams, useLocation } from 'react-router-dom';

function Parent() {
  return (
    <div>
      <h1>Parent</h1>
      <Outlet/>
    </div>
  );
}

function Child() {
  let params = useParams();
  let location = useLocation();

  useEffect(() => {
    // Fetch data based on params if necessary
    console.log('Child component re-rendered with params:', params);
  }, [params, location]); // Add location to detect route changes

  return (
    <div>
      <h1>Child {params.id}</h1>
    </div>
  );
}
```

By adding `location` to the dependency array of `useEffect`, the `Child` component will re-render whenever the route changes, ensuring that it uses the latest parameters.  If the child component needs to fetch data based on params, that should happen inside the `useEffect` hook.  This ensures that data is fetched only when necessary and that the component renders correctly.