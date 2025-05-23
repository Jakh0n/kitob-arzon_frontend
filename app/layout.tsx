import SessionProvider from '@/components/providers/session.provider'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { ChildProps } from '@/types'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
	subsets: ['cyrillic', 'latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-montserrat',
})

export const metadata: Metadata = {
	metadataBase: new URL('https://flami.org/'),
	title: "Arzon Kitob | Koreyada eng arzon kitoblar do'koni",
	description:
		"Koreyada yashovchi o'zbeklar uchun eng arzon va eng yangi kitoblarni taklif qilamiz. O'zbek, rus va ingliz tillaridagi kitoblarni online buyurtma qiling.",
	authors: [
		{
			name: 'Jakhon Yokubov',
			url: 'https://flami.org',
		},
	],
	icons: { icon: '/logo.webp' },
	openGraph: {
		title: "Arzon kitob | Koreyada eng arzon kitoblar do'koni",
		description:
			"Koreyada yashovchi o'zbeklar uchun eng arzon va eng yangi kitoblarni taklif qilamiz. O'zbek, rus va ingliz tillaridagi kitoblarni online buyurtma qiling.",
		type: 'website',
		url: 'https://flami.org',
		locale: 'kr-KR',
		images: '/logo.webp',
		countryName: 'Korea',
		siteName: 'Arzon kitob',
		emails: 'info@flami.org',
	},
	keywords: [
		'kitob dukoni Koreyada',
		'Koreyada kitob sotish',
		"Koreyada o'zbek kitoblari",
		'Arzon kitoblar Koreyada',
		'Arzon kitoblar',
		'Muqaddima',
		"Koreyada kitob do'koni",
		'arzon kitoblar Koreyada',
		'Koreyada yangi kitoblar',
		"Koreyada o'zbek tilidagi kitoblar",
		'Koreyada kutubxona',
		'kitoblar Koreyada online',
		"Koreyada o'quv adabiyotlari",
		'Koreyada kitob buyurtma qilish',
		"kitob do'koni Seoul",
		"Koreyada o'quv kitoblari",
		'한국 책방',
		'서울 책방',
		'cheap books in Korea',
		'Uzbek books in Korea',
		'Korean bookstore online',
		'buy books in Korea',
		'Korean bookstore for foreigners',
		"Koreyada o'zbeklar uchun kitoblar",
		"Seul kitob do'koni",
		'Koreyada rus kitoblari',
		'Koreyada ingliz kitoblari',
		"online kitob do'koni Koreyada",
		'Koreyada kitob yetkazib berish',
	],
}

export default function RootLayout({ children }: ChildProps) {
	return (
		<SessionProvider>
			<html lang='en' suppressHydrationWarning>
				<body
					className={`${montserrat.variable} overflow-x-hidden antialiased`}
				>
					<div className='container max-w-6xl mt-24'>
						<ThemeProvider
							attribute='class'
							defaultTheme='system'
							enableSystem
							disableTransitionOnChange
						>
							{children}
						</ThemeProvider>
					</div>
					<Toaster />
				</body>
			</html>
		</SessionProvider>
	)
}
