import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { NOTION_DB_TEMPLATE } from '../constants'
import { NotionIcon } from '../icons/svg/notion'
import { NodePackageManagerIcon } from '../icons/svg/npm'
import stepOne from '../public/Saiso-StepOne.gif'
import stepTwo from '../public/Saiso-StepTwo.gif'
import stepThree from '../public/Saiso-StepThree.gif'
import { RuiButton } from 'ruskelui'
import { CodeBlock } from '../components/CodeBlock'
import { ProCard, ProCardWrapper } from '../components/ProCard'
import {benefits} from '@data/benefits'

const Home: NextPage = () => {
  return (
    <div className={'bg-neropside-500'}>
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
        <div className='pt-24 main'>
          <Hero />
        </div>
      </div>
      <div id='problem' className="main gap-4 h-[60vh] py-12 text-neropside-600">
        <h2 className='font-medium text-center text-m-h2 sm:text-d-h2'>How modern solopreneurs & small teams create <span className='text-center text-transparent gradientBg bg-clip-text'>product-led solutions</span></h2>
        <p className='text-center text-d-base'>
          Saiso <span className='text-rosian-400'>(pronounced &apos;Say-So&apos;)</span> is a low-code widget and API powered by Notion for
          feedback collection that helps you get from <span className='text-rosian-400'>ideation to validation</span> fast, saving you the time it&apos;d take to set up your own feedback widget.
        </p>
      </div>
      <ProCardWrapper>
        {benefits.map((item) => (
          <ProCard heading={item.heading} content={item.content} />
        ))}
      </ProCardWrapper>
      <div className="mt-12 main text-russian-600">
        <h2 id="setup" className='font-medium text-center text-m-h2 sm:text-d-h2'>Setting up <span className='text-rosian-500'>Saiso</span></h2>
        <p className='text-center'>Implement Saiso&apos;s widget in 5 simple steps.</p>
        <div className="mt-12 space-y-24">
          <div id="install" className="flex flex-col items-center justify-center gap-8 sm:flex-row">
            {/* setup notion DB */}
            <div className="text-center">
              <h3 className='text-m-h3 sm:text-d-h3 text-rosian-400'>1. Create a Notion database</h3>
              <p className='max-w-lg'>
                Click <Link href={NOTION_DB_TEMPLATE} target="_blank" className='inline-flex items-center gap-1 underline text-rosian-400 underline-offset-2'>here
                </Link> to copy the Saiso Database Template to your Notion account - you&apos;ll have to create one if you don&apos;t have one already.
                Click <span className='text-rosian-400'>Duplicate</span> to clone the database.
              </p>
            </div>
            <div className="overflow-hidden duration-200 border border-gray-300 rounded border-opacity-20 w-fit hover:opacity-80">
              <Image src={stepOne} width={500} height={500} className="scale-110" alt="saiso step one" />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 sm:flex-row-reverse">
            {/* setup notion integration */}
            <div className="text-center">
              <h3 className='text-m-h3 sm:text-d-h3 text-rosian-400'>2. Create a Notion integration</h3>
              <p className='max-w-lg'>
                Click the&nbsp;
                <span className='text-rosian-400'>Settings & Members</span> option in the sidemenu.
                Navigate to <span className='text-rosian-400'>Connections</span> under Workspace, and then to&nbsp;
                <span className='text-rosian-400'>Develop or manage integrations</span>.
              </p>
              <p className="max-w-lg">
                In the new page opened, click
                the <span className='text-rosian-400'>New Integrations</span> button, which will show
                you a form to select the characteristics of your integration. We only need to set a name,
                so get creative and name it to your liking! If not, you can simply name it &apos;saiso&apos;. After submitting
                the form,
              </p>
            </div>
            <div className="overflow-hidden duration-200 border border-gray-300 rounded border-opacity-20 w-fit hover:opacity-80">
              <Image src={stepTwo} width={500} height={500} className="scale-110" alt="saiso step two" />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
            {/* setup notion DB */}
            <div className="text-center">
              <h3 className='text-m-h3 sm:text-d-h3 text-rosian-400'>3. Link integration with database</h3>
              <p className='max-w-lg'>
                Now, we need to connect our integration with our database so that we can fetch and update
                data. <span className='text-rosian-400'>Remember</span> to select the workspace where your Saiso database lives in.
              </p>
            </div>
            <div className="overflow-hidden duration-200 border border-gray-300 rounded border-opacity-20 w-fit hover:opacity-80">
              <Image src={stepThree} width={500} height={500} className="scale-105" alt="saiso step three" />
            </div>
          </div>

          <div className="relative">
            {/* install npm package */}
            <h3 className='text-center text-m-h3 sm:text-d-h3 text-rosian-400'>4. Install Saiso&apos;s NPM package</h3>
            <p>
              Now let&apos;s install the Saiso NPM package. Copy the following snippet and run it in the local environment
              of the project where you want to make use of it: <code className='px-3 py-1 rounded bg-rosian-400'>npm i saiso</code>&nbsp;
              Do remember that this is a React component before continuing!
            </p>
            <span className='absolute scale-50 -top-4 -right-10 rotate-6'><NodePackageManagerIcon /></span>
          </div>
          <div className="">
            {/* connect widget to API and notionDB */}
            <h3 className='text-center text-m-h3 sm:text-d-h3 text-rosian-400'>5. Saiso Time</h3>
            <p>
              It&apos;s Saiso time! Now that the Saiso widget is installed in your project,
            </p>
            <CodeBlock />
          </div>
        </div>
      </div>
      <div className="bottom-0 flex justify-between w-full px-8 py-6 mt-8 text-m-copy sm:text-d-copy">
        <span>&copy; Saiso 2022, All rights reserved.</span>
        <p>Made with 👾 by <span className='underline text-rosian-500 underline-offset-2' > <a href='http://twitter.com/0xreeko'>0xreeko</a></span></p>
      </div>
    </div>
  )
}

export default Home
