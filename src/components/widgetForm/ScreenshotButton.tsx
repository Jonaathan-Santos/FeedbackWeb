import { Camera } from 'phosphor-react'
import React, { useState } from 'react'
import html2canvas from 'html2canvas'

export function ScreenshotButton() {

    const [isTakingScreenshot, setisTakingScreenshot] = useState<boolean>(false)

    async function handleTakeScreenshot() {
        
        const canvas = await html2canvas(document.querySelector('html')!)
        const base64Image = canvas.toDataURL('image/png')
    }

    return (
        <button
            type="button"
            className="bg-zinc-800 p-2 border-transparent hover:bg-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors mr-2"
        >
            <Camera className="w-6 h-6" />
        </button>
    )
}
