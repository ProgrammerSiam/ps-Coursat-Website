import { RiStarFill } from "react-icons/ri";
const Instructor = ({ id, name, specialty, pic, rating }) => {
  return (
    <div
      className="flex flex-col p-4 transition-colors duration-300 border border-transparent border-solid group gap-y-4 rounded-4xl hover:border-gray-10"
      data-id={id}
    >
      <div className="w-full h-[300px] border border-solid border-transparent overflow-hidden group-hover:border-gray-10 transition-colors duration-300 rounded-3xl ">
        <img src={pic} alt={name} />
      </div>

      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <p className="mb-1.5 text-lg text-gray-10">{name}</p>
            <div className="flex items-center gap-x-1.5">
              <RiStarFill className="text-primary-50" size={20} />
              <p className="text-base text-gray-10">{rating}</p>
            </div>
          </div>
          <p className="text-base text-gray-60">{specialty}</p>
        </div>

        <a
          href="#"
          className="flex items-center justify-center group/view-btn btn btn-outline gap-x-2 !w-full"
        >
          View Profile
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
              className="transition-colors duration-300 group-hover/view-btn:stroke-white"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Instructor;
