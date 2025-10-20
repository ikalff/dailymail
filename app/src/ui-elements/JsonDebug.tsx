
type Props = {
    jsonobject: ObjectStringKeyAnyValue | null
}

type KeyValuePairProps = {
    obj: ObjectStringKeyAnyValue
}

function KeyValuePair({
    obj
}: KeyValuePairProps) {

    return <div className={`flex flex-col`}>
        {Object.keys(obj).map((key, index) => {
            const value = obj[key]
            const isObject = typeof value === 'object' && value !== null
            return <div key={index} className={`px-2 ${isObject ? `` : `flex flex-row gap-1`}`}>
                <div className={`font-bold`}>{key}:</div>
                {isObject ?
                    <div className={``}>
                        <KeyValuePair obj={value} />
                    </div>
                    :
                    <div>{String(value)}</div>
                }
            </div>
        })}
    </div>
}


function JsonDebug({
    jsonobject
}: Props) {

    return <div className={`text-xs m-1 p-1 bg-white text-gray-600 rounded-md border border-dashed border-gray-500`}>
     <KeyValuePair obj={jsonobject || {}} />
    </div>
}

export default JsonDebug