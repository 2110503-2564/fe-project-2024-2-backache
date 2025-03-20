import Link from 'next/link';

export default function TopMenuItem ({title, pageRef} : {title: string, pageRef: string}) {
    return (
        <Link className='text-center text-red-600 text-lg font-semibold mx-5' href={pageRef}>
            {title}
        </Link>
    )
}