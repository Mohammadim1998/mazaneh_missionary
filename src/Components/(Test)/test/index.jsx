"use client";
import React from 'react'
import "video-react/dist/video-react.css";
import { Player } from 'video-react';

const Test = () => {

    return (
        <div className="w-full pb-8">
            <div className="w-full h-[200px] child:w-[80%] flex gap-x-4 overflow-x-scroll p-4">

                <div className="shrink-0 h-full">
                    <Player
                        className="w-full h-full"
                        playsInline
                        poster="/images/slider/slide-1.jpg"
                        src="/videos/video2.mp4"
                    />
                </div>
                <div className="shrink-0 h-full">
                    <Player
                        className="w-full h-full"
                        playsInline
                        poster="/images/slider/slide-2.jpg"
                        src="/videos/video2.mp4"
                    />
                </div>
                <div className="shrink-0 h-full">
                    <Player
                        className="w-full h-full"
                        playsInline
                        poster="/images/slider/slide-3.jpg"
                        src="/videos/video2.mp4"
                    />
                </div>
                <div className="shrink-0 h-full">
                    <Player
                        className="w-full h-full"
                        playsInline
                        poster="/images/slider/slide-5.jpg"
                        src="/videos/video2.mp4"
                    />
                </div>

            </div>
        </div>
    );
}

export default Test;