// components/PostsLimit.jsx
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

// Client component allowing the user to choose the number of posts displayed
// and set a new value in search params
export default function PostsLimit({ defaultLimit = 5 }) {
  const searchParams = useSearchParams(); // next.js hook for search params
  const router = useRouter(); // next.js hook for client-side navigation
  const pathname = usePathname(); // next.js hook for current URL path

  // Determine the current limit from URL search parameters or use default
  const limit = searchParams.has('limit') ? searchParams.get('limit') : defaultLimit;

  // Handler for changing the number of posts limit
  const handleChangeLimit = (e) => {
    // Change the route to the existing path with the new search param for limit
    router.replace(pathname + '?limit=' + e.target.value);
  };

  return (
    <label className="PostsLimit">
      Number of posts:
      <select onChange={handleChangeLimit} value={limit}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
    </label>
  );
}
