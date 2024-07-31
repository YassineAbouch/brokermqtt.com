import { LinkItem } from "@/components/link-item";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import { BsBuilding } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { GoTriangleDown } from "react-icons/go";
import { VscRepo } from "react-icons/vsc";
import { IoHomeOutline } from "react-icons/io5";
import { LuCircleDot } from "react-icons/lu";
import { IoIosGitPullRequest } from "react-icons/io";
import { VscGithubProject } from "react-icons/vsc";
import { GoCommentDiscussion, GoGift, GoTelescope } from "react-icons/go";
import { Check } from "lucide-react";
export default function LeftContent() {
  return (
    <div className="border-r p-6 min-w-[20rem] flex flex-col gap-2">
      <div className="flex gap-3 items-center ">
        <Avatar className="size-6 border-2 border-[#E6B3BA]">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback className="font-bold">CN</AvatarFallback>
        </Avatar>
        <Popover>
          <PopoverTrigger className="flex gap-3 items-center  h-full p-2 rounded-md">
            <span className="font-semibold text-xs">Jhon Doe</span>
            <GoTriangleDown className="w-5 h-5 text-zinc-500" />
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="rounded-l max-w-[97%] md:min-w-[25rem] "
          >
            <div className="flex   flex-col gap-2">
              <span>Switch dashboard context</span>
              <div className="flex gap-4 items-center ">
                <Check className="size-4" />
                <Avatar className="size-6 border-2 border-[#E6B3BA]">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback className="font-bold">CN</AvatarFallback>
                </Avatar>
                <span className="font-semibold">Jhon Doe</span>
              </div>
              <div className="flex gap-4 items-center ">
                <Check className="text-white size-4" />
                <Avatar className="size-6 border-2 border-[#E6B3BA]">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback className="font-bold">CN</AvatarFallback>
                </Avatar>
                <span className="font-semibold">Jhon Doe</span>
              </div>
              <div className="flex gap-4 items-center ">
                {" "}
                <Check className="text-white size-4" />
                <Avatar className="size-6 border-2 border-[#E6B3BA]">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback className="font-bold">CN</AvatarFallback>
                </Avatar>
                <span className="font-semibold">Jhon Doe</span>
              </div>
              <div className="flex gap-4 items-center ">
                {" "}
                <Check className="text-white size-4" />
                <Avatar className="size-6 border-2 border-[#E6B3BA]">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback className="font-bold">CN</AvatarFallback>
                </Avatar>
                <span className="font-semibold">Jhon Doe</span>
              </div>
              <Button
                variant="outline"
                className="p-1.5 bg-transparent flex items-center gap-3 hover:bg-zinc-200 "
              >
                <BsBuilding className=" w-5 h-5" />
                <span>Manage organizations</span>
              </Button>
              <Button
                variant="outline"
                className="p-1.5 bg-transparent flex items-center gap-3 hover:bg-zinc-200"
              >
                <FiPlus className=" w-5 h-5" />
                <span>Create organization</span>
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex items-center justify-between text-sm mt-8 ">
        <strong>Top repositories</strong>
        <Button className=" bg-green-600 h-8 px-1 text-white flex items-center p gap-1 hover:bg-green-800 ">
          <VscRepo className=" w-4 h-4" />
          <span className="text-xs">New</span>
        </Button>
      </div>
      <Input className="" placeholder="Find a repository..." type="search" />
      <div className="flex flex-col gap-2 mt-4">
        <LinkItem
          href="/dashboard"
          className="text-base hover:underline"
          icon={<IoHomeOutline className="text-zinc-500 w-5 h-5" />}
        >
          Home
        </LinkItem>
        <LinkItem
          href="/dashboard"
          className="text-base hover:underline"
          icon={<LuCircleDot className="text-zinc-500 w-5 h-5" />}
        >
          Issues
        </LinkItem>
        <LinkItem
          href="/dashboard"
          className="text-base hover:underline"
          icon={<IoIosGitPullRequest className="text-zinc-500 w-5 h-5" />}
        >
          Pull request
        </LinkItem>
        <LinkItem
          href="/dashboard"
          className="text-base hover:underline"
          icon={<VscGithubProject className="text-zinc-500 w-5 h-5" />}
        >
          Projects
        </LinkItem>
        <LinkItem
          href="/dashboard"
          className="text-base hover:underline"
          icon={<GoCommentDiscussion className="text-zinc-500 w-5 h-5" />}
        >
          Discussions
        </LinkItem>
        <Button
          variant="link"
          className="  px-1 justify-normal hover:no-underline hover:text-blue-400"
        >
          <span className="text-xs">Show more</span>
        </Button>
      </div>
    </div>
  );
}
