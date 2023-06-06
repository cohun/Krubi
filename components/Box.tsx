import { twMerge } from "tailwind-merge";

interface Boxprops {
  children: React.ReactNode;
  classname?: string;
}

const Box: React.FC<Boxprops> = ({ children, classname }) => {
  return (
    <div
      className={twMerge(`bg-neutral-900 rounded-lg h-fit w-full`, classname)}
    >
      {children}
    </div>
  );
};

export default Box;
