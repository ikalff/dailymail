import React from "react"


type Props = {
  progress: number
  total: number
  setShowPeopleMatchedWidth: React.Dispatch<React.SetStateAction<boolean>>
}


function ProgressBar({
  progress,
  total,
  setShowPeopleMatchedWidth
}: Props) {


  const percentage = (progress / total) * 100

  return <div
    className={`w-full bg-gray-100 px-4 py-3 flex flex-col items-center gap-2`}
    style={{
      borderBottomLeftRadius: '15px',
      borderBottomRightRadius: '15px',
    }}
  >


    <div className={`w-full flex flex-row items-center justify-between gap-2`}>
      <p>{progress} of {total} matches</p>
      <button
        className={`underline hover:opacity-80 cursor-pointer`}
        onClick={() => setShowPeopleMatchedWidth(true)}
      >Show all</button>
    </div>

    <div className={`w-full rounded bg-white`}>

      <div className={`w-full bg-brand-primary p-1 h-5
      ${percentage && percentage < 100 ? ' rounded-l ' : ' rounded '}`}
        style={{
          width: `${percentage}%`,
          // borderBottomLeftRadius: '10px',
          // minWidth: '10px'
        }}>
      </div>
    </div>
  </div>
}

export default ProgressBar