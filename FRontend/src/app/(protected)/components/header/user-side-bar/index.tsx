"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { IoHomeOutline } from "react-icons/io5";
import { LuCircleDot } from "react-icons/lu";
import { IoIosGitPullRequest } from "react-icons/io";
import { VscGithubProject } from "react-icons/vsc";
import {
  GoCommentDiscussion,
  GoGift,
  GoSignOut,
  GoTelescope,
} from "react-icons/go";
import { Separator } from "@/components/ui/separator";
import { LinkItem } from "@/components/link-item";
import { SmileIcon } from "lucide-react";
export default function UserButton() {
  return (
    <Sheet>
      <SheetTrigger>
        {" "}
        <Avatar className="size-10 border-2 border-[#E6B3BA]">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback className="font-bold">CN</AvatarFallback>
        </Avatar>
      </SheetTrigger>
      <SheetContent className="rounded-l-md pt-1 flex flex-col">
        <div className="flex gap-4 items-center ">
          <Avatar className="size-10 border-2 border-[#E6B3BA]">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback className="font-bold">CN</AvatarFallback>
          </Avatar>
          <span className="font-semibold">Jhon Doe</span>
        </div>
        <div className="flex flex-col gap-2 ">
          <LinkItem
            href="/dashboard"
            className="text-base hover:bg-zinc-100"
            icon={<SmileIcon className="text-zinc-500 w-5 h-5" />}
          >
            Set status
          </LinkItem>
          <Separator />
          <LinkItem
            href="/dashboard"
            className="text-base hover:bg-zinc-100"
            icon={<LuCircleDot className="text-zinc-500 w-5 h-5" />}
          >
            Issues
          </LinkItem>
          <LinkItem
            href="/dashboard"
            className="text-base hover:bg-zinc-100"
            icon={<IoIosGitPullRequest className="text-zinc-500 w-5 h-5" />}
          >
            Pull request
          </LinkItem>
          <LinkItem
            href="/dashboard"
            className="text-base hover:bg-zinc-100"
            icon={<VscGithubProject className="text-zinc-500 w-5 h-5" />}
          >
            Projects
          </LinkItem>
          <LinkItem
            href="/dashboard"
            className="text-base hover:bg-zinc-100"
            icon={<GoCommentDiscussion className="text-zinc-500 w-5 h-5" />}
          >
            Discussions
          </LinkItem>
          <LinkItem
            href="/dashboard"
            className="text-base hover:bg-zinc-100"
            icon={<VscGithubProject className="text-zinc-500 w-5 h-5" />}
          >
            Projects
          </LinkItem>
          <LinkItem
            href="/dashboard"
            className="text-base hover:bg-zinc-100"
            icon={<GoCommentDiscussion className="text-zinc-500 w-5 h-5" />}
          >
            Discussions
          </LinkItem>
          <LinkItem
            href="/dashboard"
            className="text-base hover:bg-zinc-100"
            icon={<VscGithubProject className="text-zinc-500 w-5 h-5" />}
          >
            Projects
          </LinkItem>
          <LinkItem
            href="/dashboard"
            className="text-base hover:bg-zinc-100"
            icon={<GoCommentDiscussion className="text-zinc-500 w-5 h-5" />}
          >
            Discussions
          </LinkItem>
          <Separator />
          <LinkItem
            href="/dashboard"
            className="text-base hover:bg-zinc-100"
            icon={<GoSignOut className="text-zinc-500 w-5 h-5" />}
          >
            Sign out
          </LinkItem>
        </div>
      </SheetContent>
    </Sheet>
  );
}
