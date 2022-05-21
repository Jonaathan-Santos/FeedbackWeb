import { ChatTeardropDots } from 'phosphor-react'
import React from 'react'

import { Popover } from '@headlessui/react'
import { WidgetForm } from './widgetForm'

 
function Widget() {
 
  return (
    <Popover className="absolute bottom-5 right-5 flex flex-col items-end md:bottom-10 md:right-10"> 

      <Popover.Panel>
        <WidgetForm/>
      </Popover.Panel>
      
      <Popover.Button 
        
        className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'
      >
        <ChatTeardropDots className='w-6 h-6' weight='bold'/>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>
      
    </Popover>
  )
}

export default Widget