import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { NotionSvg } from '../icons/svg/notion'

const Home: NextPage = () => {
  return (
    <div className={'bg-darkBg'}>
      <Head>
        <title>Saiso - The low-code feedback widget powered by Notion</title>
        <meta name="description" content="Saiso - a low-code feedback widget for quick feedback gathering powered by Notion." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute sm:fixed -left-[5%] top-[9%] sm:top-[25%] w-64 h-64 blur-[3px] opacity-20">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" id="blobSvg"><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style={{ stopColor: 'rgb(238, 205, 163)' }}></stop><stop offset="100%" style={{ stopColor: 'rgb(239, 98, 159)' }}></stop></linearGradient></defs><path id="blob" fill="url(#gradient)"><animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate></path></svg>
      </div>
      <div className="absolute sm:fixed -right-[5%] top-[72%] sm:top-[52%] w-72 h-72 blur-[3px] opacity-40 rotate-[66deg]">
        <svg version="1.1" className='-z-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" id="blobSvg"><defs><linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style={{ stopColor: 'rgb(238, 165, 236)' }}></stop><stop offset="100%" style={{ stopColor: 'rgb(101, 91, 255)' }}></stop></linearGradient></defs><path id="blob" fill="url(#gradient2)"><animate attributeName="d" dur="5000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate></path></svg>
      </div>
      <div className="h-[86vh] w-full wrapper">
        <Header />
        <div className='main pt-24'>
          <Hero />
        </div>
      </div>
      <div id='problem' className="main gap-4 pt-12 text-russian-600">
        <h2 className='text-m-h2 sm:text-d-h2 font-medium text-center'>How modern solopreneurs & small teams create <span className='gradientBg text-center bg-clip-text text-transparent'>product-led solutions</span></h2>
        <p className='text-d-base text-center'>
          Saiso <span className='text-ruby-400'>(pronounced &apos;Say-So&apos;)</span> is a low-code widget and API powered by Notion for
          feedback collection that helps you get from <span className='text-ruby-400'>ideation to validation</span> fast, saving you the time it'd take to set up your own feedback widget.
        </p>
        <div className="flex flex-col gap-3">
          <p className='invisible hidden'>
            You're likely a developer & builder, or a small team, working in the budding emerging technologies with many ideas flowing to you,
            and you want to create a new MVP and validate your idea with speed. Or, you may have a live product, but want to make use of a low-code
            tool that that uses a cost-effective backend like Notion.
          </p>
        </div>
        {/* <div><NotionSvg /></div> */}
      </div>
      <div id='promo' className="main pt-12 border text-russian-600">
      </div>
      <div id='setup' className="main border pb-[1500px] text-russian-600">
        <span className='text-d-h2 font-medium'>Setting up <i>Saiso</i></span>
      </div>
      <div className="mt-8 py-6 px-8 text-m-copy sm:text-d-copy flex justify-between bottom-0 w-full">
        <span>&copy; Saiso 2022, All rights reserved.</span>
        <p>Made with 👾 by <span className='text-ruby-500 underline underline-offset-2' > <a href='http://twitter.com/0xreeko'>0xreeko</a></span></p>
      </div>
    </div>
  )
}

export default Home
