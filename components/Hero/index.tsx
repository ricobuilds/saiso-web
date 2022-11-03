import Link from "next/link"

export const Hero = () => {
    return (
        <div className="flex flex-col items-center text-center gap-6 w-full">
            <h1 className="text-m-hero sm:text-d-hero"><span className="gradientBg bg-clip-text text-transparent">Low-Code Feedback Widget</span> Powered by Notion.</h1>
            <p className="px-4 text-lg font-normal max-w-3xl">A plug & play feedback widget to gather feedback from your early adopters and site visitors. Better development. Focused Iterations. Great User Satisfaction.</p>
            <div className="flex ">
                <a href={'#setup'}><button className="py-1 px-3 h-11 rounded-md duration-200 box-border border border-transparent hover:border-rubellite-600 bg-rubellite-500 hover:bg-transparent hover:text-rubellite-600 font-semibold">Setup Instructions</button></a>
                <button className="py-1 px-3 h-11 rounded-md duration-200 box-border border border-transparent hover:border-blue-600 bg-blue-500 hover:bg-transparent hover:text-blue-600 font-semibold">Setup Instructions</button>
            </div>
        </div>
    )
}