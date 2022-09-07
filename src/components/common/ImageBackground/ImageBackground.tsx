import React from 'react'
import './ImageBackground.scss';

interface ImageBackgroundProps {
    backgroundImage: string
    maskOpacity?: number
}

export const ImageBackground: React.FC<ImageBackgroundProps> = ({ backgroundImage, maskOpacity, children }) => {

    let maskStyle = {
        backgroundColor: `rgba(255,255,255,${maskOpacity ?? 0})`
    }

    return (
        <div className="ImageBackground" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="mask" style={maskStyle}>
                { children }
            </div>
        </div>
    )

}
