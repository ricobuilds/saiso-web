import { SupportBanner } from "../SupportBanner"

export const Header = () => {
    return (
        <>
            <SupportBanner />
            <div className="flex items-center justify-center w-full px-8 shadow-sm h-14">
                <span className="font-bold">SAISO</span>
            </div>
        </>
    )
}
