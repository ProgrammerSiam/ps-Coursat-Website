import { forwardRef } from "react";

const SliderNavigation = forwardRef((_, ref) => {
  return (
    <div className="flex justify-between">
      <button
        type="button"
        className="flex items-center justify-center px-0 w-14 group btn btn-outline gap-x-2 sm:w-fit sm:px-6"
        onClick={() => ref.current.swiper.slidePrev()}
      >
        <svg
          width="71"
          height="51"
          viewBox="0 0 71 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[26px]"
        >
          <path
            d="M70.4929 25.4928L6.61276 25.4928M32.6485 48.9472C27.904 40.5601 20.07 31.1572 6.61276 25.4472C20.07 19.7372 27.904 10.3343 32.6485 1.9472"
            stroke="#292C32"
            stroke-width="4.5"
            className="transition-colors duration-300 group-hover:stroke-white"
          />
        </svg>
        <p className="hidden sm:block">Prev</p>
      </button>

      <button
        type="button"
        className="flex items-center justify-center px-0 w-14 group btn btn-outline gap-x-2 sm:w-fit sm:px-6"
        onClick={() => ref.current.swiper.slideNext()}
      >
        <p className="hidden sm:block">Next</p>

        <svg
          width="71"
          height="51"
          viewBox="0 0 71 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[26px]"
        >
          <path
            d="M0.612732 25.4016H64.4928M38.4571 1.9472C43.2016 10.3343 51.0356 19.7372 64.4928 25.4472C51.0356 31.1572 43.2016 40.5601 38.4571 48.9472"
            stroke="#292C32"
            stroke-width="4.5"
            className="transition-colors duration-300 group-hover:stroke-white"
          />
        </svg>
      </button>
    </div>
  );
});

export default SliderNavigation;
