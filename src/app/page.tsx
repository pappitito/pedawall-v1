import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1" />
      <title>Pedawalls</title>

      </Head>
      <div className='flex flex-col p-3 gap-3'>
      <Link className='redlink ' href='/signup'>Sign up</Link>
      <Link className='redlink ' href='/login'>Log in</Link>
      </div>
    </main>
  )
}
