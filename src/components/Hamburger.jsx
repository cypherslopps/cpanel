import React from 'react';
import { AlignJustify } from 'lucide-react';
import { useOffscreen } from '../providers/OffscreenProvider';
import Button from './ui/Button'

const Hamburger = ({ className, color }) => {
    const { toggleOffscreen } = useOffscreen();
    
    return (
        <Button 
            size="none" 
            variant={color === "light" ? "ghost-dark" : "ghost"} 
            width="max"
            className={className}
            onClick={toggleOffscreen}
        >
            <AlignJustify className={color === "light" ? "stroke-white" : "stroke-black"} />
        </Button>
    )
}

export default Hamburger