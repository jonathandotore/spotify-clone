import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, PlaneIcon, PlayIcon, } from 'lucide-react'
import { Play } from 'next/font/google'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full'></div>
            <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
            <div className='w-3 h-3 bg-green-500 rounded-full'></div>
          </div>
          <nav className='space-y-5 mt-10'>
            <a href="" className="flex items-center gap-2 text-xs font-semibold text-zinc-200">
              <HomeIcon/>
              Home
              </a>
            <a href="" className="flex items-center gap-2 text-xs font-semibold text-zinc-200">
              <Search/>
              Search
            </a>
            <a href="" className="flex items-center gap-2 text-xs font-semibold text-zinc-200">
              <Library/>
              Your Library
            </a>
          </nav>

          <nav className='mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3'>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist #1</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist #2</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Músicas Curtidas</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Top Brasil</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Cinthya Luz</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Brasil Brasileiro</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Fuck n' Roll</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Play pra treinar</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>É hora do Rappa!</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Blackzera</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Só as tops</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Trapfy</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Chill out relax</a>
          </nav>
        </aside>
        <main className="flex-1 p-6">

          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft/>
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight/>
            </button>
          </div>

          <h1 className='font-bold text-3xl mt-6'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <img src="/album.jpg" alt="Capa do álbum Californication do Red Hot Chili Peppers" width={104} height={104}></img>
              <strong>Californication</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible'>
                <PlayIcon/>
              </button>
            </a>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <img src="/album.jpg" alt="Capa do álbum Californication do Red Hot Chili Peppers" width={104} height={104}></img>
              <strong>Californication</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible'>
                <PlayIcon/>
              </button>
            </a>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <img src="/album.jpg" alt="Capa do álbum Californication do Red Hot Chili Peppers" width={104} height={104}></img>
              <strong>Californication</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible'>
                <PlayIcon/>
              </button>
            </a>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <img src="/album.jpg" alt="Capa do álbum Californication do Red Hot Chili Peppers" width={104} height={104}></img>
              <strong>Californication</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible'>
                <PlayIcon/>
              </button>
            </a>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <img src="/album.jpg" alt="Capa do álbum Californication do Red Hot Chili Peppers" width={104} height={104}></img>
              <strong>Californication</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible'>
                <PlayIcon/>
              </button>
            </a>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <img src="/album.jpg" alt="Capa do álbum Californication do Red Hot Chili Peppers" width={104} height={104}></img>
              <strong>Californication</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible'>
                <PlayIcon/>
              </button>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        Footer
      </footer>
    </div>
  )
}
