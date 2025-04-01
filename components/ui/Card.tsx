type CardProps = {
    title: string;
    content: string[];
    imageUrl?: string;
    animation?: string;
};

export default function Card({ title, content, imageUrl, animation }: CardProps) {
    return (
        <div className={`bg-white p-6 rounded-lg shadow-md transition-transform transform ${animation ? animation : ''}`}>
            {imageUrl && <img src={imageUrl} alt={title} className="mb-4 rounded" />}
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <ul className="list-disc pl-5 space-y-2">
                {content.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}