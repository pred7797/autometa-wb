import { useSession } from "next-auth/react"
import Link from "next/link"
import { useState, useEffect } from "react"


export default function Home() {

  

  return (
    <div className="homePage">
      <div className="createNew">
        <Link href="/dashboard" className="createNew">
          <button > + new attendence </button>
        </Link>
      </div>
    </div>
  )
}
