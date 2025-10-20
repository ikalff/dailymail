

type Props = {
    imageUrl?: string
    size: number
}


function RoundImageThumbnail({
    imageUrl,
    size
}: Props) {


    return <div className={`bg-white p-1 border-4 border-dotted border-gray-400`} style={{
        borderRadius: '100%',
    }} >
        <div className={`flex flex-col items-center justify-center text-gray-400 text-3xl font-brand`}
            style={{
                borderRadius: '100%',
                backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: `${size}px`,
                height: `${size}px`
            }}
        >
            {!imageUrl && <span>?</span>}
        </div>
    </div>
}

export default RoundImageThumbnail