export default function ContentDiv({ col, children }: {col?: number, children: React.ReactNode;}) {
    let spanning = col != undefined ? 'col-span-' + col.toString() : '';
    return (
        <div className={`px-8 py-6 border border-white/10 bg-white/5 rounded-lg shadow-lg ${spanning}`}>
            {children}
        </div>
    )
}