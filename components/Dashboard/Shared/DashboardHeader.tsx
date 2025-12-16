export default function DashboardHeader({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <div className="border-b border-[#D5D5D5]">
            <div className="flex flex-col items-start justify-between p-3 md:p-6">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{title}</h1>
                <p className="text-secondary dark:text-gray-400">{description}</p>
            </div>
        </div>
    )
}