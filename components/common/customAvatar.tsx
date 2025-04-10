import React from "react";

interface CustomAvatarProps {
  initials: string;
  size?: number | string;
  backgroundColor?: string;
  textColor?: string;
  className?: string;
}

const CustomAvatar: React.FC<CustomAvatarProps> = ({
  initials,
  size = 300,
  backgroundColor = "#5d3ab9",
  textColor = "#ffffff",
  className = ""
}) => {
  const sizeValue = typeof size === "number" ? `${size}px` : size;
  const fontSize = typeof size === "number" ? `${size / 3}px` : "5rem";

  return (
    <div
      className={`flex items-center justify-center rounded-full overflow-hidden ${className}`}
      style={{
        width: sizeValue,
        height: sizeValue,
        backgroundColor,
        color: textColor,
        fontSize,
        fontWeight: "bold"
      }}
      aria-label={`Avatar with initials ${initials}`}
    >
      {initials}
    </div>
  );
};

export default CustomAvatar;
