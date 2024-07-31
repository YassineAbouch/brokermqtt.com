import React from "react";
import { SideBarMobile } from "./sideBarMobile";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SearchBar from "./search-bar";
import { cn } from "@/lib/utils";
import CreateNew from "./create-new";
import { Button } from "@/components/ui/button";
import { LuCircleDot } from "react-icons/lu";
import { SlDrawer } from "react-icons/sl";
import { IoIosGitPullRequest } from "react-icons/io";
import UserButton from "./user-side-bar";
import { MenuGlobal } from "./sideBarMobile/menuGlobal";

export default function Header() {
  return (
    <nav
      className={cn(
        " flex h-[3.5rem] bg-gray-100 gap-3  w-full items-center justify-between  px-4 border-b"
      )}
    >
      {/* <div className="justify-between flex items-center"> */}
      <div className="flex items-center gap-4">
        <MenuGlobal />

        <div className="flex w-[120px] sm:w-full items-center gap-4">
          <Avatar className="size-10 border-2 border-[#E6B3BA]">
            <AvatarImage src="/github.svg" alt="@shadcn" />
            <AvatarFallback className="font-bold">CN</AvatarFallback>
          </Avatar>
          <strong className=" text-ellipsis ... overflow-hidden">
            Dashboard
          </strong>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <SearchBar />
        <CreateNew />
        <Button
          variant="outline"
          className="p-1.5 bg-transparent hidden md:flex hover:bg-zinc-200 "
        >
          <LuCircleDot className=" w-5 h-5" />
        </Button>
        <Button
          variant="outline"
          className="p-1.5 bg-transparent hidden md:flex  hover:bg-zinc-200"
        >
          <IoIosGitPullRequest className=" w-5 h-5" />
        </Button>
        <Button
          variant="outline"
          className="p-1.5 bg-transparent hover:bg-zinc-200"
        >
          <SlDrawer className=" w-5 h-5" />
        </Button>
        <UserButton />
      </div>

      {/* </div> */}
    </nav>
  );
}
