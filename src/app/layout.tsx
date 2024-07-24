import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import CustomSnackbar from '@/components/layout/CustomSnackbar'
import StoreProvider from '@/providers/StoreProvider'
import ThemeProviderClient from '@/providers/ThemeProviderClient'
import '@/styles/globals.scss'

import ErrorBoundary from '../components/layout/ErrorBoundary'
import Navbar from '../components/layout/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jokes App',
  description: 'Funny app with some jokes'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/images/favicon_32x32.png' />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <ThemeProviderClient>
            <StoreProvider>
              <CustomSnackbar />
              <Navbar />
              <main>{children}</main>
            </StoreProvider>
          </ThemeProviderClient>
        </ErrorBoundary>
      </body>
    </html>
  )
}
