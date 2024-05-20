import Link from "next/link";

const AdminDashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <ul>
        <li>
          <Link href="/admin/menu">Create Menu</Link>
        </li>
        <li>
          <Link href="/admin/catalog">Create Catalog</Link>
        </li>
        <li>
          <Link href="/admin/item">Create Item</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminDashboard;
