import { FC, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Input: FC<InputProps> = ({ className, label, ...props }) => {
  return (
    <div className="mb-2 border border-b-blue-400">
      <label>
        <p className="text-gray-400">{label}</p>
      <input type="text" className="outline-none w-full px-3 py-1" {...props}/>
      </label>
    </div>
  )
}
