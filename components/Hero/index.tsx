export const Hero = () => {
    return (
        <div className="flex flex-col items-center text-center gap-6">
            <h1 className="text-m-hero sm:text-d-hero"><span className="gradientBg bg-clip-text text-transparent">The Low-Code Feedback Widget</span> Powered by Notion.</h1>
            <p className="px-4 text-d-base font-normal max-w-3xl">A <span className="text-ruby-400">plug & play</span> widget and API to gather feedback from your users, in seconds. Better development. Focused iterations. Great user satisfaction. Let Saiso handle the rest.</p>
            <div>
                <a href={'#setup'} className="py-1 px-3 h-11 rounded-md duration-200 flex items-center box-border border border-transparent hover:border-ruby-600 bg-ruby-500 hover:bg-transparent hover:text-ruby-600 font-semibold outline-none">Get started now - it's free</a>
            </div>
            <div className="flex gap-2 items-center text-m-copy sm:text-d-copy ">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-jade-500" width={24} height={24} viewBox="0 0 24 24" stroke-width={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 3a9 9 0 0 1 3.618 17.243l-2.193 -5.602a3 3 0 1 0 -2.849 0l-2.193 5.603a9 9 0 0 1 3.617 -17.244z"></path>
                    </svg>
                </span>
                <span className="text-jade-500 underline underline-offset-2">Saiso is Open Source!</span>
            </div>
        </div>
    )
}