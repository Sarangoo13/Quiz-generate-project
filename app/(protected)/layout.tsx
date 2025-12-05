import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../../components/Appsidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger className=" bg-gray-200" />
        <div className="w-full flex justify-center items-center">
          {children}
        </div>
      </SidebarProvider>
    </>
  );
}
