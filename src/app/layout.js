'use client';
import "./globals.css";
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
//   manifest: "/manifest.webmanifest",
// };

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
  title: "نسخه 2",
  description: "Generated by create next app",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CacheProvider value={cacheRtl}>
          {children}
        </CacheProvider>
      </body>
    </html>
  )
}
