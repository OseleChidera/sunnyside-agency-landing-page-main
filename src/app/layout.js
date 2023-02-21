import './globals.css'
import Nav from './nav'
import Footer from './footer'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Nav/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}




