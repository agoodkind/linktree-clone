import clsx from "clsx";

export default function LinkWrapper({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="relative text-sm sm:text-base font-link w-full max-w-2xl min-w-2xs">
      <div className="h-full">
        <div
          className={clsx(
            // Layout and shape
            "rounded-lg border-2",

            // Colors and styling
            "bg-white text-black border-black shadow-black shadow-hard-8",
            "dark:bg-neutral-800 dark:text-white dark:border-white dark:shadow-white",
            "focus:ring-2 focus:ring-white focus:ring-offset-1",
            "focus-within:ring-2 focus-within:ring-white focus-within:ring-offset-1",

            // Interactive effects
            "hover:translate-1 hover:shadow-hard-4",
            "active:translate-1 active:shadow-hard-4",
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
