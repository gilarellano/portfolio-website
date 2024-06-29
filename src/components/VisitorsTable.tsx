// components/VisitorsTable.tsx

import { fetchVisitors } from '@/lib/data';

export default async function VisitorsTable() {
  const visitors = await fetchVisitors();

  const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <div className="mt-6">
      <h2>Visitor</h2>
      <ul>
        {visitors.map((visitor) => (
          <li key={visitor.id}>
            {visitor.id}: {formatDate(visitor.visit_date)}: {visitor.page_load_time}s
          </li>
        ))}
      </ul>
    </div>
  );
}