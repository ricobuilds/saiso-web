import { ReactNode } from "react"

export const ProCardWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <div className="main h-[60vh]">
            <div className="grid w-full grid-cols-2 gap-8 mx-auto">
                {children}
            </div>
        </div>
    )
}

export interface ProCardProps {
    heading: string
    content: ReactNode
    colour?: string
    icon?: ReactNode
}

export const ProCard = (props: ProCardProps) => {
    return (
        <div className="px-8 py-6 border rounded-lg w-fit h-fit">
            <span className="text-d-h5">{props.heading}</span>
            <p>{props.content}</p>
        </div>
    )
}