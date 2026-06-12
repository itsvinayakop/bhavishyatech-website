import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </SmoothScroll>
  );
}
