import Link from "next/link"

export default function NotFound() {

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8fafc" }} className="flex items-center justify-center p-8">
      <div style={{ maxWidth: "600px", width: "100%", textAlign: "center" }}>

        <div className="border border-dashed border-blue-300 rounded-2xl p-10 mb-5 bg-white">
          <h1 style={{ fontSize: "120px", fontWeight: "bold", color: "#1e293b", lineHeight: "1" }}>
            404
          </h1>
          <p className="text-slate-400 text-sm mt-2">page not found</p>
        </div>

      
        <div className="border border-dashed border-blue-300 rounded-2xl p-6 bg-white mb-5">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Looks like this friend moved away 👀
          </h2>
          <p className="text-slate-500 text-sm">
            The page you are looking for does not exist or may have been removed.
            Don't worry though, your real friends are still here!
          </p>
        </div>

   
        <div className="flex gap-3 justify-center">
          <Link href="/">
            <button className="px-6 py-2.5 bg-slate-800 text-white text-sm font-medium rounded-xl hover:bg-slate-700 transition-all">
              Go Home
            </button>
          </Link>
          <Link href="/timeline">
            <button className="px-6 py-2.5 border border-slate-200 text-slate-600 text-sm font-medium rounded-xl hover:bg-slate-100 transition-all">
              View Timeline
            </button>
          </Link>
        </div>

      </div>
    </div>
  )
}