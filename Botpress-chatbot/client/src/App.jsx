// import { useState } from 'react';
import Chatbot from './Chatbot';

function App() {
  // const [dealerId, setDealerId] = useState();
  // const [chatbotId, setChatbotId] = useState();

  // const handleConfirm = () => {
  //   setChatbotId(dealerId);
  // };

  return (
    <>
      <Chatbot/>
      {/* {chatbotId ? (<Chatbot />)
        : (<div className='flex h-screen justify-center items-center'>
              <div className='flex flex-col justify-center'>
                <p className='py-2 text-xl'>Input your dealer Id:</p>
                <input
                  className='border-2 px-4 py-2 border-gray-800 rounded-lg'
                  onChange={(e) => setDealerId(e.target.value)}
                />
                <button
                  className='border my-4 rounded-lg px-4 py-2 hover:bg-sky-200 w-1/2 bg-sky-400 text-white'
                  onClick={handleConfirm}
                >
                  Confirm
                </button>
              </div>
            </div>
      )} */}
    </>
  );
}

export default App;
