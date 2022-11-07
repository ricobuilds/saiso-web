import { ReactNode } from "react"

export const ProCardWrapper = ({ children }: { children: ReactNode}) => {
    return (
        <div className="w-full">
            {children}
        </div>
    )
}

interface ProCardProps {
    heading: string
    content: ReactNode
    colour: string
    icon: ReactNode
}

export const ProCard = (props: ProCardProps) => {
    return (
        <div className="px-3 py-1 border w-72 h-44">
            <span className="text-d-h5">{props.heading}</span>
            <p>{props.content}</p>
        </div>
    )
}