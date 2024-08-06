'use client';

import { useRouter } from 'next/navigation';

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const removeItem = async () => {
    const confirmed = confirm('Are you sure?');

    if (confirmed) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/items?id=${id}`,
        {
          method: 'DELETE',
        }
      );

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={removeItem} className="text-red-400">
      Delete
    </button>
  );
}
