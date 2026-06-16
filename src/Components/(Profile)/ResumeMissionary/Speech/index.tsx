import "video-react/dist/video-react.css";
import { Player } from 'video-react';

const Speech = () => {
    return (
        <div className="w-full bg-white py-4 px-[10px]">
            <div className="w-full mb-8">
                <div className="text-[#4F4F4F] font-semibold text-sm leading-5 mb-[10px] border-r-[2px] border-r-[#E0AD70] pr-2">ویدیو سخنرانی</div>

                <div className="w-full flex child:shrink-0 gap-x-2 overflow-x-scroll overflow-y-hidden py-3">
                    <div className="w-[80%] flex h-full justify-start items-center">
                        <div className="w-full h-[154px]">
                        <Player
                            className="w-full h-full"
                            playsInline
                            poster="/images/slider/slide-1.jpg"
                            src="/videos/video2.mp4"
                        />
                    </div>
                    </div>
                    <div className="w-[80%] flex justify-start items-center">
                        <div className="w-full h-[154px]">
                        <Player
                            className="w-full h-full"
                            playsInline
                            poster="/images/slider/slide-2.jpg"
                            src="/videos/video2.mp4"
                        />
                    </div>
                    </div>
                    <div className="w-[80%] flex justify-start items-center">
                        <div className="w-full h-[154px]">
                        <Player
                            className="w-full h-full"
                            playsInline
                            poster="/images/slider/slide-3.jpg"
                            src="/videos/video2.mp4"
                        />
                    </div>
                    </div>
                    <div className="w-[80%] flex justify-start items-center">
                        <div className="w-full h-[154px]">
                        <Player
                            className="w-full h-full"
                            playsInline
                            poster="/images/slider/slide-4.jpg"
                            src="/videos/video2.mp4"
                        />
                    </div>
                    </div>
                    <div className="w-[80%] flex justify-start items-center">
                        <div className="w-full h-[154px]">
                        <Player
                            className="w-full h-full"
                            playsInline
                            poster="/images/slider/slide-5.jpg"
                            src="/videos/video2.mp4"
                        />
                    </div>
                    </div>
                    <div className="w-[80%] flex justify-start items-center">
                        <div className="w-full h-[154px]">
                            <Player
                                className="w-full h-full"
                                playsInline
                                poster="/images/slider/slide-6.jpg"
                                src="/videos/video2.mp4"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full mb-8">
                <div className="text-[#4F4F4F] font-semibold text-sm leading-5 mb-4 border-r-[2px] border-r-[#E0AD70] pr-2">صوت سخنرانی</div>

                <div className="w-full flex flex-col gap-y-7">
                    <div className="w-full ">
                        <div className="flex justify-start items-center gap-x-[6px]">
                            <div className="w-6 h-6 bg-[#318FA81A] flex justify-center items-center rounded-full"><img src="/images/svg/profile/music.svg" alt="" className="" /></div>
                            <span className="text-[#666666] font-light text-xs leading-5">روضه حضرت علی اصغر علیه السلام </span>
                        </div>

                        <div className="w-full h-8 mt-2">
                            <audio controls className="w-full h-full">
                                <source src="/sound/naseri-zohor-nazdik-ast.mp3" type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    </div>

                    <div className="w-full ">
                        <div className="flex justify-start items-center gap-x-[6px]">
                            <div className="w-6 h-6 bg-[#318FA81A] flex justify-center items-center rounded-full"><img src="/images/svg/profile/music.svg" alt="" className="" /></div>
                            <span className="text-[#666666] font-light text-xs leading-5">دهه اول محرم</span>
                        </div>

                        <div className="w-full h-8 mt-2">
                            <audio controls className="w-full h-full">
                                <source src="/sound/rasul-tork.mp3" type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Speech;