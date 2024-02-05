import { Range, getTrackBackground } from "react-range";

import { IoMdPause } from "react-icons/io";
import { TbPlayerSkipBackFilled } from "react-icons/tb";
import { TbPlayerSkipForwardFilled } from "react-icons/tb";
import { TiArrowShuffle } from "react-icons/ti";
import { RiRepeatFill } from "react-icons/ri";
import { useState } from "react";

function Player() {
  const [values, setValues] = useState([50]);

  const STEP = 0.1;
  const MIN = 0;
  const MAX = 100;

  return (
    <div className="flex justify-between items-center h-full">
      <div className="min-w-[11.25rem] w-[30%]">
        React & Tailwind Practice by Ugur
      </div>
      <div className="max-w-[45.125rem] w-[40%]  flex flex-col items-center">
        <div className="flex items-center gap-x-2">
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <span>
              <TiArrowShuffle />
            </span>
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <span>
              <TbPlayerSkipBackFilled />
            </span>
          </button>
          <button className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full hover:scale-[1.06] ">
            <span>
              <IoMdPause />
            </span>
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <span>
              <TbPlayerSkipForwardFilled />
            </span>
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <span>
              <RiRepeatFill />
            </span>
          </button>
        </div>
        <div className="w-full">
          <Range
            values={values}
            step={STEP}
            min={MIN}
            max={MAX}
            onChange={(values) => setValues(values)}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                className="w-full h-7 flex group"
                style={{ ...props.style }}
              >
                <div
                  ref={props.ref}
                  className="h-1 w-full rounded-md self-center "
                  style={{
                    background: getTrackBackground({
                      values: values,
                      colors: ["#1db954", "#535353"],
                      min: MIN,
                      max: MAX,
                    }),
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props, isDragged }) => (
              <div
                {...props}
                className={`${
                  !isDragged ? "opacity-0" : ""
                }  h-3 w-3 rounded-full bg-white  group-hover:opacity-100`}
                style={{
                  ...props.style,

                  justifyContent: "center",
                  alignItems: "center",
                  // boxShadow: "0px 2px 6px #AAA",
                }}
              />
            )}
          />
        </div>
      </div>
      <div className="min-w-[11.25rem] w-[30%] flex justify-end">
        React & Tailwind Practice by Ugur
      </div>
    </div>
  );
}

export default Player;
