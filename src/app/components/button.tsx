import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  variant?: "primary" | "outline" | "secondary";
}

export function Button({
  children,
  variant = "primary",
  ...rest
}: ButtonProps) {
  const variantClasses = {
    outline: "text-white border py-5 px-7 rounded-xl font-semibold",
    primary: "text-indigo-600 font-bold bg-white border py-5 px-7 rounded-xl",
    secondary:
      "py-6 px-[120px] font-semibold text-xl bg-transparent text-white",
  };

  const className = `flex items-center justify-center rounded-[20px]  ${variantClasses[variant]}`;

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}
