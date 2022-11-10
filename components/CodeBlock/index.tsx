// Applicable in React.js + Next.js
// import { SaisoWidget } from 'asdasd'

export const CodeBlock = () => {
    return (
        <div className={`flex rounded-3xl mt-8 pl-4 py-8 h-fit bg-bayoux-900/40`}>
            <div className="flex flex-col">
                <div className="flex items-baseline">
                    <p>
                        <span className="pr-4 font-mono text-gray-500 select-none">1</span>
                        <span className="italic text-bayoux-800">{"// Applicable in React.js + Next.js"}</span>
                    </p>
                </div>
                <div className="flex items-baseline">
                    <p>
                        <span className="pr-4 font-mono text-gray-500 select-none">2</span>
                        <span className='text-amethyst-300'>import&nbsp;</span>
                        <span className="text-citrine-300">{"{"}&nbsp;</span>
                        <span className="text-onyx-100">SaisoWidget&nbsp;</span>
                        <span className="text-citrine-300">{"}"}&nbsp;</span>
                        <span className='text-amethyst-300'>from&nbsp;</span>
                        <span className="text-onyx-100">&apos;</span>
                        <span className="text-jade-300">saiso</span>
                        <span className="text-onyx-100">&apos;&nbsp;</span>
                    </p>
                </div>
                <div className="flex items-baseline">
                    <p>
                        <span className="pr-4 font-mono text-gray-500 select-none">3</span>
                    </p>
                </div>
                <div className="flex items-baseline">
                    <p>
                        <span className="pr-4 font-mono text-gray-500 select-none">4</span>
                        <span className="text-lazure-300">{"<"}</span>
                        <span className="text-scarlet-300">SaisoWidget&nbsp;</span>

                    </p>
                </div>
                <div className="flex items-baseline">
                    <p>
                        <span className="pr-4 font-mono text-gray-500 select-none">5</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span className="text-citrine-300">name</span>
                        <span className="text-amethyst-300">=</span>
                        <span className="text-onyx-100">&quot;</span>
                        <span className="text-jade-300">yourAppName</span>
                        <span className="text-onyx-100">&quot;&nbsp;</span>
                    </p>
                </div>
                <div className="flex items-baseline">
                    <p>
                        <span className="pr-4 font-mono text-gray-500 select-none">6</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span className="text-citrine-300">logo</span>
                        <span className="text-amethyst-300">=</span>
                        <span className="text-onyx-100">&quot;</span>
                        <span className="text-jade-300">yourAppLogoExternalLink</span>
                        <span className="text-onyx-100">&quot;&nbsp;</span>
                    </p>
                </div>
                <div className="flex items-baseline">
                    <p>
                        <span className="pr-4 font-mono text-gray-500 select-none">7</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span className="text-citrine-300">notionAPI</span>
                        <span className="text-amethyst-300">=</span>
                        <span className="text-onyx-100">&quot;</span>
                        <span className="text-jade-300">yourNotionApiUrl</span>
                        <span className="text-onyx-100">&quot;&nbsp;</span>
                    </p>
                </div>
                <div className="flex items-baseline">
                    <p>
                        <span className="pr-4 font-mono text-gray-500 select-none">8</span>
                            <span className="text-lazure-300">{"/"}</span>
                            <span className="text-lazure-300">{">"}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}