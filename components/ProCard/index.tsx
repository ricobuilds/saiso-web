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