import React from "react";

const InvestCriteriaCard = ({ percentage, text, title, description }) => {
  const radius = 75; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const strokeDashArray = `${circumference} ${circumference}`; // Full circle stroke dasharray
  const strokeDashOffset = circumference - (percentage / 100) * circumference; // Offset for the progress

  const isPercentage = typeof text === "string" && text.includes("%");

  return (
    <div className=" flex flex-col justify-center items-center">
      <svg className="relative w-52 h-52" width="200" height="200">
        <circle
          className="stroke-primary-100 stroke-[14px] absolute top-0"
          fill="transparent"
          r={radius}
          cx="100"
          cy="100"
          stroke="currentColor"
          strokeWidth="8"
          style={{ transformOrigin: "50% 50%" }}
        ></circle>
        {isPercentage && (
          <g transform="rotate(-90, 100, 100)">
            <circle
              className="animated-circle"
              fill="transparent"
              r={radius}
              cx="100"
              cy="100"
              stroke="#1c2c4f"
              strokeWidth="28px"
              strokeDasharray={strokeDashArray}
              style={{
                strokeDashoffset: strokeDashOffset,
                animation: `dash ${(percentage / 100) * 2}s linear`, // Adjust animation timing as needed
              }}
            ></circle>
          </g>
        )}
        <circle
          className="stroke-current"
          fill="transparent"
          r="58"
          cx="100"
          cy="100"
          stroke="#1c2c4f"
          strokeWidth="1"
        ></circle>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="central"
          fill="#1c2c4f"
          fontSize="18"
          fontWeight="bold"
          className="absolute font-main"
        >
          {text}
        </text>

        <style jsx>{`
          .animated-circle {
            animation: dash ${(percentage / 100) * 2}s linear; /* Duration based on percentage */
          }

          @keyframes dash {
            from {
              stroke-dashoffset: ${circumference}; /* Start from full circumference */
            }
            to {
              stroke-dashoffset: ${strokeDashOffset}; /* End at the calculated offset */
            }
          }
        `}</style>
      </svg>
      <div className="flex flex-col justify-center items-center text-center">
        <h4 className="py-2 md:py-4 font-main text-lg md:text-xl font-medium">
          {title}
        </h4>
        <p className="px-4 xl:px-16 text-sm xl:text-base leading-6 xl:leading-8  font-body">
          {description}
        </p>
      </div>
    </div>
  );
};

export default InvestCriteriaCard;
