export default function ContentDiv({ col, children }: { col?: number; children: React.ReactNode }) {
    const spanClass: Record<number, string> = { 1: "col-span-1", 2: "col-span-2", 3: "col-span-3" };
    const spanning = col != undefined ? spanClass[col] ?? "" : "";
    return (
        <div className={`px-8 py-6 border border-white/10 bg-white/5 rounded-lg shadow-lg ${spanning}`}>
            {children}
        </div>
    );
}
