'use client';

import * as React from "react";
import {
  motion,
  useInView,
  type HTMLMotionProps,
  type Transition,
  type UseInViewOptions,
} from "motion/react";

import { cn } from "@/lib/utils";

type HighlightTextProps = HTMLMotionProps<"span"> & {
  text: string;
  inView?: boolean;
  inViewMargin?: UseInViewOptions["margin"];
  inViewOnce?: boolean;
  transition?: Transition;
  delay?: number; // nova prop delay em ms
};

const HighlightText = React.forwardRef<HTMLSpanElement, HighlightTextProps>(
  (
    {
      text,
      className,
      inView = false,
      inViewMargin = "0px",
      inViewOnce = true,
      transition = { duration: 2, ease: "easeInOut" },
      delay = 0,
      ...props
    },
    ref
  ) => {
    const localRef = React.useRef<HTMLSpanElement>(null);
    React.useImperativeHandle(ref, () => localRef.current as HTMLSpanElement);

    const inViewResult = useInView(localRef, {
      once: inViewOnce,
      margin: inViewMargin,
    });

    const [startAnimation, setStartAnimation] = React.useState(false);

    // Controla delay para iniciar animação
    React.useEffect(() => {
      if (!inView && !inViewResult) return; // se não estiver visível, não inicia

      const timeout = setTimeout(() => {
        setStartAnimation(true);
      }, delay);

      return () => clearTimeout(timeout);
    }, [delay, inView, inViewResult]);

    const isInView = !inView || inViewResult;

    return (
      <motion.span
        ref={localRef}
        data-slot="highlight-text"
        initial={{ backgroundSize: "0% 100%" }}
        animate={startAnimation && isInView ? { backgroundSize: "100% 100%" } : undefined}
        transition={transition}
        style={{
          backgroundImage: "linear-gradient(to right, #4A00E0, #8E2DE2)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left center",
          display: "inline",
        }}
        className={cn(
          "relative inline-block !px-1 py-1 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-500 dark:to-purple-500",
          className
        )}
        {...props}
      >
        {text}
      </motion.span>
    );
  }
);

HighlightText.displayName = "HighlightText";

export { HighlightText, type HighlightTextProps };
