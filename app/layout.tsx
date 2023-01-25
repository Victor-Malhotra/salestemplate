/* eslint-disable @next/next/no-sync-scripts */
import './globals.css'
import NavHeader from '@/components/NavHeader'
import NavFooter from '@/components/NavFooter'
import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body><NavHeader/>{children}<NavFooter/><script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js"></script>
</body>
    </html>
  )
}
