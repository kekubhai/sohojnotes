import Sidebar from "@/components/layout/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main style={{ marginLeft: 'var(--sohoj-sidebar-width)' }} className="p-8 bg-white min-h-screen">
        {children}
      </main>
    </div>
  );
}
