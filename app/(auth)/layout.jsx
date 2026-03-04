

export default function AuthLayout({ children }) {
    return (
        <>
            <section className="flex items-center justify-center py-20 min-h-screen">
                <div className="max-w-125 mx-auto text-center w-full">
                    {children}
                </div>
            </section>
        </>
    )
}
