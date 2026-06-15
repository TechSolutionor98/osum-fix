import React from 'react';
import ReviewsTableClient from './ReviewsTableClient';
import { getApiBase, getServerApiBase } from '@/lib/api-helper';

export const metadata = { title: 'Reviews - Admin' };
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ReviewsPage() {
  const serverApiBase = getServerApiBase();
  const apiBase = getApiBase();
  let reviews = [];
  try {
    const res = await fetch(`${serverApiBase}/api/reviews?all=true`, { cache: 'no-store' });
    console.log('res', res);
    if (res.ok) reviews = await res.json();
  } catch (err) { console.error('Failed to fetch reviews', err); }

  return (
    <div>
      <h1 className='text-[30px] font-bold'>REVIEWS</h1>
      <div className="bg-white p-4 rounded shadow mt-10">
        <ReviewsTableClient initialData={reviews} apiBase={apiBase} />
      </div>
    </div>
  );
}
