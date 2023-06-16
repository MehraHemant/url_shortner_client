import { useRef, useState } from 'react';
import './App.css';
import Navbar from './components/navbar';

function App() {
  const [hidden, setHidden] = useState(true);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleClickSearch = (e) => {
    e.preventDefault();
    try {
      fetch('http://localhost:5000/shortUrl', {
        method: 'POST',
        mode: 'cors',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ url: url })
      }).then(res => { return res.json(); setLoading(true) })
        .then(res => setShortUrl(res.shortUrl))
        .then(() => { setLoading(false); setHidden(false) })
        .catch(err => console.error(err));
    } catch(err){console.log(err)}
  }
  
  const shortUrlValue = useRef();

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrlValue.current.innerHTML);
  }
  return (
    <div className="min-h-screen dark:bg-gray-900 space-y-10">
      <Navbar />


      <div className={`relative ${hidden ? 'hidden' : ''} z-10`}>
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity backdrop-blur-sm"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Short url</h3>
                    <div className="mt-2">
                      {/* url below */}
                      <p className="text-sm text-gray-500" ref={shortUrlValue}>{shortUrl}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="button" className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto" onClick={handleCopy}>copy</button>
                <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={() => setHidden(true)}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='font-[asap] tracking-wide dark:text-white text-center m-5'>
        <div className='text-lg font-semibold'>Are you tired of sharing long, complex URLs that clutter your messages?</div>
        <div className='max-w-xl m-auto'>Look no further! urlShortener is here to simplify your online experience by shortening those lengthy addresses into sleek, manageable links.</div>
      </div>

      <div className='bg-gray-100  dark:bg-gray-950 rounded-sm w-4/5 md:w-2/3 lg:w-1/2 shadow-narrow dark:border-gray-100 m-auto p-6'>
        <div className='justify-center text-center space-y-5'>
          <div className='font-bold text-3xl font-[ubuntu] dark:text-white'>Paste the URL to be shortened</div>
          {/* Search bar */}
          <form className='w-full relative' onSubmit={handleClickSearch}>
            <input type="text" className=" w-full border border-gray-400 dark:border-gray-100 dark:text-white focus:shadow-narrow outline-none focus:ring-1 focus:ring-gray-400 bg-transparent rounded-3xl py-2 px-4 text-base" onChange={(e) => setUrl(e.target.value)} value={url} pattern="https?://.+" placeholder='Enter your link here' required>
            </input>
            <input type='submit' className='absolute bg-blue-500 py-2 px-4 border-t border-b border-r  border-gray-400 dark:border-gray-100 font-semibold hover:bg-blue-600 rounded-r-3xl right-0' value='Convert'></input>
          </form>
          <div className='space-y-2 text-center dark:text-white font-["Fira_sans"]  font-normal text-sm dark:font-light sm:text-base '>
            <p>urlShortener is a free tool to shorten URLs and generate short links.</p>
            <p>URL shortener allows to create a shortened link making it easy to share</p>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-6 m-5 sm:m-8'>
        <div className='col-span-3 md:col-span-2 font-[ubuntu] dark:text-white p-4 text-center self-start'>
          <div className='text-3xl sm:text-4xl'><ion-icon name="thumbs-up-sharp"></ion-icon></div>
          <h2 className='text-xl sm:text-2xl'>Easy</h2>
          <p className='font-["Fira_Sans"] text-sm sm:text-base'>urlShortener is easy and fast, enter the long link to get your shortened link</p>
        </div>
        <div className='col-span-3 md:col-span-2 font-[ubuntu] dark:text-white p-4 text-center self-start'>
          <div className='text-3xl sm:text-4xl'><ion-icon name="link-sharp"></ion-icon></div>
          <h2 className='text-xl sm:text-2xl'>Shortened</h2>
          <p className='font-["Fira_Sans"] text-sm sm:text-base'>Use any link, no matter what size, urlShortener always shortens</p>
        </div>
        <div className='col-span-3 md:col-span-2 font-[ubuntu] dark:text-white p-4 text-center self-start'>
          <div className='text-3xl sm:text-4xl'><ion-icon name="shield-checkmark-sharp"></ion-icon></div>
          <h2 className='text-xl sm:text-2xl'>Secure</h2>
          <p className='font-["Fira_Sans"] text-sm sm:text-base'>It is fast and secure, our service has HTTPS protocol and data encryption</p>
        </div>
        <div className='col-span-3 md:col-span-2 font-[ubuntu] dark:text-white p-4 text-center self-start'>
          <div className='text-3xl sm:text-4xl'><ion-icon name="stats-chart-sharp"></ion-icon></div>
          <h2 className='text-xl sm:text-2xl'>Statistics</h2>
          <p className='font-["Fira_Sans"] text-sm sm:text-base'>Check the number of clicks that your shortened URL received</p>
        </div>
        <div className='col-span-3 md:col-span-2 font-[ubuntu] dark:text-white p-4 text-center self-start'>
          <div className='text-3xl sm:text-4xl'><ion-icon name="hand-right-sharp"></ion-icon></div>
          <h2 className='text-xl sm:text-2xl'>Relaible</h2>
          <p className='font-["Fira_Sans"] text-sm sm:text-base'>All links that try to disseminate spam, viruses and malware are detected</p>
        </div>
        <div className='col-span-3 md:col-span-2 font-[ubuntu] dark:text-white p-4 text-center self-start'>
          <div className='text-3xl sm:text-4xl'><ion-icon name="desktop-sharp"></ion-icon></div>
          <h2 className='text-xl sm:text-2xl'>Devices</h2>
          <p className='font-["Fira_Sans"] text-sm sm:text-base'>Compatible with smartphones, tablets and desktop</p>
        </div>
      </div>
    </div>
  );
}

export default App;
