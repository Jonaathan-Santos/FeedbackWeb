import { Camera, Trash } from 'phosphor-react'
import React, { useState } from 'react'
import html2canvas from 'html2canvas'
import Loading from '../Loading'



interface ScreenshotButtonProps {
    screenshot: string | null;
    onScreenshotTook: (Screenshot: string | null) => void;
}

export function ScreenshotButton({ onScreenshotTook, screenshot }: ScreenshotButtonProps) {

    const [isTakingScreenshot, setisTakingScreenshot] = useState<boolean>(false)

    async function handleTakeScreenshot() {

        setisTakingScreenshot(true)
        const canvas = await html2canvas(document.querySelector('html')!)
        const base64Image = canvas.toDataURL('image/png')
        setTimeout(() => {
            onScreenshotTook(base64Image)
            setisTakingScreenshot(false)
        }, 1500);


    }

    if (screenshot) {
        return (
            <button
                type="button"
                onClick={()=> onScreenshotTook(null)}
                className="p-1 w-10 h-10 text-zinc-400 rounded-md border-transparent hover:text-zinc-100 flex justify-end items-end focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors mr-2"
                style={{
                    backgroundImage: `url(${screenshot})`,
                    backgroundPosition: 'right bottom',
                    backgroundSize: 180,
                }}
            >
                <Trash  weight='fill'/>
            </button>
        )

    }

    return (

        <button
            type="button"
            onClick={handleTakeScreenshot}
            className="bg-zinc-800 p-2 border-transparent hover:bg-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors mr-2"
        >
            {
                isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />
            }
        </button>
    )
}
