import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RightContent() {
  return (
    <div className="xl:flex flex-col gap-3 hidden ">
      <Card className="w-[20rem] px-3  h-[20rem] py-4 relative bg-gradient-to-b from-green-200 to-green-600">
        <CardTitle className="mb-3">{"UNIVERSE'24"}</CardTitle>
        <CardContent>
          <Button className="absolute top-1/2  w-[15rem] px-1  hover:no-underline text-white bg-black hover:text-zinc-50">
            <span className="">Get tickets now</span>
          </Button>
          <p className="text-xs">
            20% off GitHub Universe tickets Join the world’s fair of software to
            learn how AI and security are transforming the developer experience.
            Save 20% off your ticket, only until September 3.
          </p>
        </CardContent>
      </Card>
      <Card className="w-[20rem] px-3   h-[20rem] py-4  border">
        <CardTitle className="mb-3 text-sm">Latest changes</CardTitle>
        <CardContent className="flex flex-col relative gap-2 px-2 border-l">
          <div className="px-2  flex flex-col ">
            <div className="w-2 absolute top-0 -left-[4px] bg-gray-500 rounded-full h-2"></div>
            <h3 className="text-gray-300">3 days ago</h3>
            <Link href="" className="text-xs">
              CodeQL 2.18.1: Kotlin & Swift mobile support is generally
              available, TypeScript 5.5 support, C#
            </Link>
          </div>
          <div className="px-2 flex flex-col ">
            <h3 className="text-gray-300">3 days ago</h3>
            <Link href="" className="text-xs">
              Copilot Enterprise Mixed Licensing beta
            </Link>
          </div>
          <div className="px-2 relative flex flex-col ">
            {/* <div className="w-2  bg-gray-500 rounded-full h-2"></div> */}
            <h3 className="text-gray-300">3 days ago</h3>
            <Link href="" className="text-xs">
              Validation on package name when submitting a new GitHub security
              advisory (GHSA)
            </Link>
          </div>
          <div className="px-2 relative flex flex-col ">
            {/* <div className="w-2  bg-gray-500 rounded-full h-2"></div> */}
            <h3 className="text-gray-300">4 days ago</h3>
            <Link href="" className="text-xs">
              Actions Usage Metrics is generally available
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
