import { Button } from "@/components/ui/button";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Filter, TrendingUp } from "lucide-react";
import { IoFilterOutline } from "react-icons/io5";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CiStar } from "react-icons/ci";
export default function MiddleContent() {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Home</h1>
        <div className="flex items-center gap-3">
          <Button
            variant="link"
            className="  px-1 justify-normal hover:no-underline text-blue-400 hover:text-blue-300"
          >
            <span className="">Send feedback</span>
          </Button>
          <Popover>
            <PopoverTrigger className="flex gap-3 items-center  border bg-slate-100 h-full p-2 rounded-md">
              <IoFilterOutline className="w-5 h-5 " />
              <span className="font-semibold ">Filters</span>
            </PopoverTrigger>
            <PopoverContent>
              <div>
                <h6 className="text-xs">Filter</h6>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="border  rounded-md">
        <Card className="border-0 shadow-none rounded-b-none border-b-2">
          <CardHeader className="flex justify-between py-0 flex-row items-center ">
            <CardTitle className="flex items-center text-sm gap-2">
              <TrendingUp /> Trending repositories
            </CardTitle>
            <Popover>
              <PopoverTrigger className="flex gap-3 items-center   bg-transparent h-full p-2 rounded-md">
                <span className="font-semibold ">...</span>
              </PopoverTrigger>
              <PopoverContent>
                <div>
                  <h6 className="text-xs">Filter</h6>
                </div>
              </PopoverContent>
            </Popover>
          </CardHeader>
          <CardContent className="flex flex-col  gap-3">
            <div className="flex items-center gap-3">
              <Popover>
                <PopoverTrigger className="flex gap-3 items-center  h-full p-0 rounded-md">
                  <Avatar className="size-6 border-2 border-[#E6B3BA]">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback className="font-bold">CN</AvatarFallback>
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent
                  align="start"
                  className="rounded-l  min-w-[25rem]"
                ></PopoverContent>
              </Popover>
              <span>lorem ipsum</span>
            </div>
            <p>Mixture of Agents using Groq</p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 bg-blue-800 rounded-full h-2"></div>
                <span>Python</span>
              </div>
              <div className="flex items-center gap-2">
                <CiStar className="w-4 h-4" />
                <span className="text-xs">401</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-none  border-b-2 mt-3">
          <CardContent className="flex flex-col  gap-3">
            <div className="flex items-center gap-3">
              <Popover>
                <PopoverTrigger className="flex gap-3 items-center  h-full p-0 rounded-md">
                  <Avatar className="size-6 border-2 border-[#E6B3BA]">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback className="font-bold">CN</AvatarFallback>
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent
                  align="start"
                  className="rounded-l  min-w-[25rem]"
                ></PopoverContent>
              </Popover>
              <span>lorem ipsum</span>
            </div>
            <p>
              A lightweight library for portable low-level GPU computation using
              WebGPU.
            </p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 bg-pink-800 rounded-full h-2"></div>
                <span>C++</span>
              </div>
              <div className="flex items-center gap-2">
                <CiStar className="w-4 h-4" />
                <span className="text-xs">3.1k</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
