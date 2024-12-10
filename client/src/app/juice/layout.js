
import Link from "next/link";
import LogoutButton from "../components/LogoutButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function DashboardLayout({
  children,
}) {
  const session = await getServerSession(authOptions);

  return (
    <section>
      <nav className="bg-blue-800 px-2 py-4 text-white flex flex-row gap-3">
        <h3 className="font-bold text-yellow-400">JUICE SHOP</h3>
        <Link href='/' className="hover:text-red-500">Home</Link>
        <Link href='/juice' className="hover:text-red-500">Juice Shop</Link>
        {session ? (
          <LogoutButton />
        ) : (
          <Link href="/auth/login" className="hover:text-blue-500 ml-auto">
            Login
          </Link>
        )}
      </nav>
      <div className="p-2">
        {children}
      </div>
    </section>
  )
}
