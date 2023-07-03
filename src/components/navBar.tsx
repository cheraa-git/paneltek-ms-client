import { FC } from 'react'
import Logo from '../logo.png'

export const NavBar: FC = () => {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2">
        <div className="relative flex h-16 items-center text-white">
          <div className="block sm:flex min-w-[200px]">
            <img src={Logo} alt="" width={250}/>
          </div>
        </div>
      </div>
    </nav>
  )
}
