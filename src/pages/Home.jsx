import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import '../index.css'

function Home() {
  return (
    <section className='flex justify-center items-center gap-5 h-screen py-5 px-5 maxWidth'>
        <Sidebar />

        <Hero />

    </section>
  )
}

export default Home