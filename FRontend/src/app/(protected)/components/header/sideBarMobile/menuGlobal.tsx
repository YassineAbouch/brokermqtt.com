"use client";

import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
// import { Navigation } from "./navigate";;
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useDimensions } from "@/hooks/use-dimensions";
import { MenuToggle } from "./menuToggle";
import { Navigation } from "./navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SearchBar from "../search-bar";
// import Logo from "@/components/logo";
// import { useSession } from "@/components/session-provider";

export const MenuGlobal = () => {
  // const [isOpen, toggleOpen] = useCycle(true, false);
  // const { isOpen, toggleOpen } = useSession();
  const [isOpen, setIsOpen] = React.useState<Boolean>(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  // console.log(isOpen);

  return (
    <motion.nav
      initial={false}
      className="flex h-[3.5rem]  gap-4 z-50 items-center justify-between "
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <Navigation
        setIsOpen={setIsOpen}
        className={cn(
          " absolute border rounded-r-md left-0 top-0  flex h-screen w-[20rem] flex-col overflow-y-auto bg-card  py-2  shadow-md transition-all duration-300",
          {
            "-translate-x-0": isOpen,
            "-translate-x-full": !isOpen,
          }
        )}
      />
      <MenuToggle toggle={() => setIsOpen((p: any) => !p)} />
    </motion.nav>
  );
};
