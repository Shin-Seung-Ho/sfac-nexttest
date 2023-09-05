"use client"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { Button, Gnb, Logo, Navigation } from "sfac-designkit-react"
import Nav from "sfac-designkit-react/dist/Navigation"

export default function Header() {
    return (
        <div className="">
            <div className="max-w-6xl mx-auto">

            <Navigation>
                <Link href={"/"}>
                <Logo width={73} height={38} className="mr-[30px]" />
                </Link>

                <Gnb text="About" linkTo="about" />
                <Gnb text="Menu" linkTo="Menu" />
                <Gnb text="커뮤니티" linkTo="community" />
                <div className="flex-1" />
                <SignedOut>
                    <Link href='/sign-in'>
                        <Button
                            variant="secondary"
                            text="로그인"
                            className="!w-[88px] last:ml-auto"
                            textSize="sm"
                            textWeight="bold"
                            asChild
                        />
                    </Link>
                </SignedOut>
                <SignedIn>
                    <UserButton afterSignOutUrl="/"/>
                </SignedIn>
            </Navigation>
            </div>
        </div>
    )
}