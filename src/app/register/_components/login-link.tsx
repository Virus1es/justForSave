import Link from "next/link";
import type React from "react";

export default function LoginLink(){
    return (
        <div className="text-center mt-4 text-sm text-muted-foreground">
            Уже есть аккаунт?{" "}
            <Link href="/" className="text-primary hover:underline font-medium">
                Войти
            </Link>
        </div>
    )
}