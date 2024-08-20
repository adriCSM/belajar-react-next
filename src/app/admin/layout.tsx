import SidebarAdmin from './Sidebar';
import NavbarAdmin from './navbar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row bg-gray-100 text-gray-600 ">
      <SidebarAdmin />
      <div className="w-full mx-3 h-full ">
        <NavbarAdmin />
        {children}
      </div>
    </div>
  );
}
