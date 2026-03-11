import { inter } from './utils/fonts'
import Authentication from './authentication/page';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
      <html lang="en" className={inter.className}>
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width-device-width, initial-scale=1.0"
          />
          <title>Copify</title>
        </head>
        <body>
          <Authentication />
        </body>
      </html>
    );
}