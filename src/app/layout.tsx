import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/layouts/Sidebar';
import Header from '@/components/layouts/Header';
import ClientOnlyWrapper from './client-wrapper/ClientOnlyWrapper';
import ReduxDialogWrapper from '@/components/features/appeal/data-dialog/ReduxDialogWrapper';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <ReduxDialogWrapper />

        <SidebarProvider>
          <div className="w-[100dvw] h-[100dvh] px-[1rem] pt-[0.5rem] bg-custom-main-background  ">
            {/* header content wraper */}
            <div className="w-full h-[9dvh] bg-white border border-gray-100 shadow rounded-lg ">
              <Header />
            </div>

            <div className="flex flex-1 h-[calc(91dvh-1rem)]  mt-[0.5rem] mb-[0.2rem] overflow-hidden gap-[1rem] ">
              <aside className="flex-shrink-0 ">
                <AppSidebar className="h-[calc(91dvh-1rem)] !relative !inset-auto !z-auto " />
              </aside>

              <main className="flex-1 h-full overflow-hidden p-4 rounded-lg ">
                {children}
              </main>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
