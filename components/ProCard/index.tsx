import { ReactNode } from "react"

export const ProCardWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <div className="main h-[80vh] sm:h-[60vh]">
            <div className="grid w-full gap-8 mx-auto sm:grid-cols-2">
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
        <div className="w-full h-full px-8 py-6 border rounded-lg">
            <span className="text-d-h5">{props.heading}</span>
            <p>{props.content}</p>
        </div>
    )
}