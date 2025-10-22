import Sidebar from "@/components/layout/sidebar";

export default function ExploreLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main 
        style={{ 
          marginLeft: 'var(--sohoj-sidebar-width)',
          paddingTop: '4rem' // h-16 = 4rem
        }} 
        className="p-6 bg-white min-h-screen"
      >
        {children}
      </main>
    </div>
  );
}