import Navbar from '@/components/shared/navbar'
import { authOptions } from '@/lib/auth-options'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import NextTopLoader from 'nextjs-toploader'
import React from 'react'
import MobileSidebar from './_components/mobile-sidebar'
import Sidebar from './_components/sidebar'

async function Layout({ children }: { children: React.ReactNode }) {
	const session = await getServerSession(authOptions)

	if (!session) redirect('/sign-in')
	if (session.currentUser?.role !== 'admin') return redirect('/')

	return (
		<div>
			<Navbar session={session} />
			<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
				{/* Mobile Sidebar Component */}
				<MobileSidebar />

				{/* Desktop Sidebar */}
				<div className='hidden md:block md:col-span-1'>
					<Sidebar />
				</div>

				<div className='col-span-1 md:col-span-2 pb-10'>
					<NextTopLoader />
					{children}
				</div>
			</div>
		</div>
	)
}

export default Layout
