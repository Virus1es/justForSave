import Link from "next/link";
import {Heart} from "lucide-react";
import type React from "react";

export default function Header(){
    return (
        <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-primary-foreground"/>
                </div>
                <span className="text-2xl font-bold text-foreground">Элизиум</span>
            </Link>
        </div>
    )
}