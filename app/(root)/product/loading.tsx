import { Skeleton } from '@/components/ui/skeleton'

const Loading = () => {
	return (
		<div className='p-4'>
			<div className='w-full max-w-6xl mx-auto space-y-8'>
				{/* Product header skeleton */}
				<div className='flex items-center space-x-4'>
					<Skeleton className='h-12 w-12 rounded-full' />
					<div className='space-y-2'>
						<Skeleton className='h-4 w-[250px]' />
						<Skeleton className='h-4 w-[200px]' />
					</div>
				</div>

				{/* Product content skeleton */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{[...Array(6)].map((_, i) => (
						<div key={i} className='space-y-4'>
							<Skeleton className='h-[200px] w-full rounded-xl' />
							<Skeleton className='h-4 w-[150px]' />
							<Skeleton className='h-4 w-[100px]' />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Loading
