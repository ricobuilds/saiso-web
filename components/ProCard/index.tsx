import { ReactNode } from "react"

export const ProCardWrapper = ({ children }: { children: ReactNode}) => {
    return (
        <div className="">
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
            <h4>{props.heading}</h4>
            <p>{props.content}</p>
        </div>
    )
}