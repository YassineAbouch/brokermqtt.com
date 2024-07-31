import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FiPlus } from "react-icons/fi";
import { GoCodespaces, GoProject, GoTriangleDown } from "react-icons/go";
import { Separator } from "@/components/ui/separator";
import { VscRepo } from "react-icons/vsc";
import { RiGitRepositoryCommitsLine } from "react-icons/ri";
import { LuChevronsLeftRight } from "react-icons/lu";
import { BsBuilding } from "react-icons/bs";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LinkItem } from "@/components/link-item";

export default function CreateNew() {
  return (
    <Popover>
      <PopoverTrigger className=" gap-3 hidden md:flex items-center border h-full p-2 rounded-md">
        <FiPlus className="w-5 h-5" />{" "}
        <GoTriangleDown className="w-5 h-5 text-zinc-500" />
      </PopoverTrigger>
      <PopoverContent align="end">
        <div className="flex flex-col gap-2 mt-4">
          <LinkItem
            href="/dashboard"
            icon={<VscRepo className="text-zinc-500 w-5 h-5" />}
            className={cn(
              "flex gap-3 items-center  px-2 py-1 rounded-sm transition-colors duration-300",
              "text-base hover:bg-zinc-100"
            )}
          >
            New repository
          </LinkItem>
          <LinkItem
            href="/dashboard"
            className="text-base hover:bg-zinc-100"
            icon={
              <RiGitRepositoryCommitsLine className="text-zinc-500 w-5 h-5" />
            }
          >
            Import repository
          </LinkItem>
          <Separator />
          <LinkItem
            href="/dashboard"
            className="text-base hover:bg-zinc-100"
            icon={<GoCodespaces className="text-zinc-500 w-5 h-5" />}
          >
            New codespace
          </LinkItem>
          <LinkItem
            href="/dashboard"
            className="text-base hover:bg-zinc-100"
            icon={<LuChevronsLeftRight className="text-zinc-500 w-5 h-5" />}
          >
            New gist
          </LinkItem>
          <Separator />
          <LinkItem
            href="/dashboard"
            className="text-base hover:bg-zinc-100"
            icon={<BsBuilding className="text-zinc-500 w-5 h-5" />}
          >
            New organisation
          </LinkItem>
          <LinkItem
            href="/dashboard"
            className="text-base hover:bg-zinc-100"
            icon={<GoProject className="text-zinc-500 w-5 h-5" />}
          >
            New project
          </LinkItem>
        </div>
      </PopoverContent>
    </Popover>
  );
}
