import { listTools } from "../data"

const Tools = () => {
  return (
    <section className="tools mt-6 py-2">
        <h2 className="text-xl/snug font-bold mb-4">Tools</h2>
        <div className="tools-box mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
            {listTools.map(tool => (
            <div key={tool.id} className="flex items-center gap-1 sm:gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group overflow-hidden">
                <img src={tool.image} alt={`${tool.name}'s image'`} className="w-12 bg-zinc-800 p-1 group-hover:bg-zinc-900" />
                <div>
                    <p className="font-semibold">{tool.name}</p>
                </div>
            </div>
            ))}
        </div>
    </section>
  )
}

export default Tools