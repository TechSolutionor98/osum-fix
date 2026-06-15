import React from 'react';
import PagesClient from './PagesClient';
import { getApiBase, getServerApiBase } from '@/lib/api-helper';

export const metadata = { title: 'Pages - Admin' };
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function PagesPage() {
  const serverApiBase = getServerApiBase();
  const apiBase = getApiBase();
  let routes = [];
  let scanError = null;

  try {
    const res = await fetch(`${serverApiBase}/api/cms/routes?websiteId=default`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      routes = data.routes || [];
    }
  } catch (err) {
    console.error('Failed to fetch routes', err);
    scanError = 'Could not load routes. Try scanning your project first.';
  }

  return (
    <div>
      <h1 className='text-[30px] font-bold'>PAGES & ROUTES</h1>
      <p className="text-sm text-gray-600">
        Manage your website pages, scan routes, and control content.
      </p>
      <div className="mt-5">
        <PagesClient initialRoutes={routes} apiBase={apiBase} initialError={scanError} />
      </div>
    </div>
  );
}
