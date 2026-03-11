"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { useEffect } from "react";

export default function CardLayout({children, header, pageTitle} : {children: React.ReactNode, header: string, pageTitle: string}){
    
    useEffect(() => {
        document.title = pageTitle;
    }, [])
    
    return (
      <html lang="en">
        <body>
          <div className="flex w-screen h-screen bg-[#5C3A15]">
            <Card>
              <CardHeader>
                <Image src="/favicon.ico" width={30} height={30} alt="logo" />
              </CardHeader>
              <CardContent>{children}</CardContent>
            </Card>
          </div>
        </body>
      </html>
    );
  };