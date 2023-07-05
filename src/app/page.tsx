import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className='flex flex-col p-3 gap-3'>
      <Link className='redlink ' href='/signup'>Sign up</Link>
      <Link className='redlink ' href='/login'>Log in</Link>
      </div>
    </main>
  )
}
