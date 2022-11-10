export const Hero = () => {
    return (
        <div className="flex flex-col items-center gap-6 text-center z-[10]">
            <h1 className="text-m-hero sm:text-d-hero"><span className="text-transparent gradientBg bg-clip-text">The Low-Code Feedback Widget</span> Powered by Notion.</h1>
            <p className="max-w-3xl px-4 font-normal text-d-base">A <span className="text-rosian-400">plug & play</span> widget and API to gather feedback from your users in seconds. Better development. Focused iterations. Great user satisfaction. Let Saiso handle the rest.</p>
                <a href={'#setup'} className="box-border flex items-center px-3 py-1 mt-4 font-semibold duration-200 border border-transparent rounded-md outline-none h-11 hover:border-rosian-600 bg-rosian-500 hover:bg-transparent hover:text-rosian-600">Get started now - it&apos;s free</a>
            <div className="flex items-center gap-2 text-m-copy sm:text-d-copy ">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-jade-500" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 3a9 9 0 0 1 3.618 17.243l-2.193 -5.602a3 3 0 1 0 -2.849 0l-2.193 5.603a9 9 0 0 1 3.617 -17.244z"></path>
                    </svg>
                </span>
                <span className="underline text-jade-500 underline-offset-2">Saiso is Open Source!</span>
            </div>
        </div>
    )
}