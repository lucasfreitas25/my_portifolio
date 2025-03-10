import { useState, ReactNode } from "react";

type ActionButtonProps = {
  icon: ReactNode;
  content: string;
  children?: ReactNode;
};

const ActionButton: React.FC<ActionButtonProps> = ({ icon, content }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      className="relative flex items-center justify-center h-14 w-14 border-none bg-transparent cursor-pointer p-2 rounded-full"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span className="relative z-10 p-2 rounded-full bg-gray-200 transition-transform duration-300 transform scale-100 hover:scale-125">
        {icon}
      </span>
      {hover && (
        <span className="absolute left-16 px-2 py-1 bg-white border border-gray-300 rounded-md shadow-md text-sm font-semibold capitalize opacity-100 z-20">
          {content}
        </span>
      )}
    </button>
  );
};

const ActionButtons: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-4 p-4">
      <div className="absolute inset-0 flex items-center justify-center z-[-1] rounded-full overflow-hidden">
        <div className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 animate-spin-slow"></div>
        <div className="absolute w-full h-full backdrop-blur-md rounded-full"></div>
      </div>
      <ActionButton
        icon={(
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            className="h-6 w-6"
          >
            <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
          </svg>
        )}
        content="x"
      />
      <ActionButton
        icon={(
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            className="h-6 w-6"
          >
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
        )}
        content="github"
      />
      <ActionButton
        icon={(
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            className="h-6 w-6"
          >
            <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
            <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
            <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3" />
            <path d="M7 16.5c3.5 1 6.5 1 10 0" />
          </svg>
        )}
        content="discord"
      />
    </div>
  );
};

export default ActionButtons;
