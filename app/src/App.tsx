import { useEffect, useState } from "react"
import MessageModal from "./ui-elements/MessageModal"

function App() {


  const [showModal, setShowModal] = useState(false)

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowModal(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])


  return <div className={`w-full h-screen`}>


    {showModal && <MessageModal
      setShowModal={setShowModal}
      showModal={{ "warning": 'This website has been flagged by your Internet Service Provider as a potential security risk due to malicious content, including fabricated articles, hate speech and misinformation. Please proceed with caution. Your IP address and location have been logged.' }}
    />}

    <iframe src="https://dailymail.com" title="Example Iframe" className={`w-full h-full`}></iframe>
  </div>
}

export default App
