import type { ReactNode } from "react"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg shadow-md border border-gray-200 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg group">
      <div className="mb-6 text-burgundy group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-burgundy group-hover:to-burgundy-light transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
