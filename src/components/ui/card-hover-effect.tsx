import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";
import { IconBrandGithub } from "@tabler/icons-react";
import { Button } from "./moving-border";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <motion.a
          key={idx}
          className="relative group  block p-2 h-full w-full"
          initial={{ opacity: 0, y: 10 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 * idx }}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-b from-indigo-200 to-purple-200 block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <img
              src="https://cdn.dribbble.com/userupload/16048648/file/original-91aac6989700ed42451cef62cfdce839.jpg?format=webp&resize=400x300&vertical=center"
              alt=""
              className="w-full"
            />

            <div className="p-4 flex flex-col">
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </div>

            <div className="p-4 w-full">
              <Button variant="outline">
                <IconBrandGithub />
                GitHub
              </Button>
            </div>
          </Card>
        </motion.a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-0 overflow-hidden bg-white border border-transparent dark:border-white/[0.2] group-hover: relative z-20 shadow-sm",
        className
      )}
    >
      <div className="relative z-50 h-full">
        <div className="p-0 h-full flex flex-col justify-between">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-black font-bold tracking-wide mt-2", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-gray-500 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
