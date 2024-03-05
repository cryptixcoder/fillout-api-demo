import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'; 
import './App.css';

function App() {
  const [filters, setFilters] = useState('');
  const [response, setResponse] = useState<string|null>(null);

  const fetchData = async () => {
    const url = `http://localhost:3000/api/cLZojxk94ous/filteredResponses?filters=${encodeURIComponent(filters)}`;
    try {
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Include other headers as required
        },
      });
      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className="App">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center py-8">
          <svg width="115.2" height="29.8" viewBox="0 0 576 149" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1107_22)"><path d="M188.901 125V34.0909H249.093V49.9379H208.122V71.5998H245.098V87.4467H208.122V125H188.901ZM261.666 125V56.8182H280.576V125H261.666ZM271.166 48.0291C268.354 48.0291 265.942 47.0969 263.93 45.2326C261.947 43.3387 260.956 41.0748 260.956 38.441C260.956 35.8369 261.947 33.6026 263.93 31.7383C265.942 29.8443 268.354 28.8974 271.166 28.8974C273.977 28.8974 276.374 29.8443 278.357 31.7383C280.369 33.6026 281.375 35.8369 281.375 38.441C281.375 41.0748 280.369 43.3387 278.357 45.2326C276.374 47.0969 273.977 48.0291 271.166 48.0291ZM314.634 34.0909V125H295.724V34.0909H314.634ZM348.691 34.0909V125H329.782V34.0909H348.691ZM394.645 126.332C387.75 126.332 381.787 124.867 376.756 121.937C371.755 118.978 367.893 114.864 365.171 109.597C362.448 104.3 361.087 98.1593 361.087 91.1754C361.087 84.1323 362.448 77.977 365.171 72.7095C367.893 67.4124 371.755 63.299 376.756 60.3693C381.787 57.41 387.75 55.9304 394.645 55.9304C401.54 55.9304 407.489 57.41 412.49 60.3693C417.52 63.299 421.397 67.4124 424.12 72.7095C426.842 77.977 428.203 84.1323 428.203 91.1754C428.203 98.1593 426.842 104.3 424.12 109.597C421.397 114.864 417.52 118.978 412.49 121.937C407.489 124.867 401.54 126.332 394.645 126.332ZM394.734 111.683C397.871 111.683 400.49 110.795 402.591 109.02C404.692 107.215 406.275 104.759 407.341 101.651C408.435 98.544 408.983 95.0077 408.983 91.0423C408.983 87.0768 408.435 83.5405 407.341 80.4332C406.275 77.326 404.692 74.8698 402.591 73.0646C400.49 71.2595 397.871 70.3569 394.734 70.3569C391.568 70.3569 388.904 71.2595 386.744 73.0646C384.613 74.8698 383 77.326 381.906 80.4332C380.84 83.5405 380.308 87.0768 380.308 91.0423C380.308 95.0077 380.84 98.544 381.906 101.651C383 104.759 384.613 107.215 386.744 109.02C388.904 110.795 391.568 111.683 394.734 111.683ZM484.223 95.9695V56.8182H503.132V125H484.977V112.615H484.267C482.728 116.61 480.168 119.821 476.588 122.248C473.037 124.674 468.701 125.888 463.582 125.888C459.024 125.888 455.015 124.852 451.552 122.781C448.09 120.709 445.382 117.765 443.429 113.947C441.505 110.13 440.529 105.558 440.499 100.231V56.8182H459.409V96.8572C459.439 100.882 460.519 104.063 462.65 106.401C464.78 108.739 467.636 109.908 471.217 109.908C473.495 109.908 475.626 109.39 477.609 108.354C479.591 107.289 481.189 105.72 482.403 103.649C483.646 101.577 484.252 99.0175 484.223 95.9695ZM554.524 56.8182V71.0227H513.464V56.8182H554.524ZM522.786 40.483H541.696V104.048C541.696 105.794 541.962 107.156 542.495 108.132C543.027 109.079 543.767 109.745 544.714 110.13C545.691 110.514 546.815 110.707 548.088 110.707C548.975 110.707 549.863 110.633 550.751 110.485C551.639 110.307 552.319 110.174 552.793 110.085L555.767 124.157C554.82 124.453 553.488 124.793 551.772 125.178C550.056 125.592 547.969 125.843 545.513 125.932C540.956 126.11 536.961 125.503 533.528 124.112C530.125 122.721 527.476 120.561 525.582 117.631C523.688 114.702 522.756 111.003 522.786 106.534V40.483Z" fill="#111827"></path><rect x="16" y="23" width="126" height="26" rx="13" fill="#EC4899"></rect><rect x="16" y="64" width="126" height="26" rx="13" fill="#38BDF8"></rect><rect x="16" y="105" width="78" height="26" rx="13" fill="#FBBF24"></rect><rect x="100" y="105" width="42" height="26" rx="13" fill="#34D399"></rect></g><defs><clipPath id="clip0_1107_22"><rect width="576" height="149" fill="white"></rect></clipPath></defs></svg>
          <h2 className="py-4 text-2xl font-semibold">Welcome to the Fillout API Demo</h2>
        </div>
        <textarea
            className='block w-full rounded-md border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6'
            value={filters}
            onChange={(e) => setFilters(e.target.value)}
            placeholder="Enter filters JSON"
            rows={5}
            cols={50}
          />
        <button className='mt-4 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' onClick={fetchData}>Fetch Data</button>
       {response && (
          <SyntaxHighlighter language="json" style={dark}>
            {response}
          </SyntaxHighlighter>
        )}
      </div>
    </div>
  );
}

export default App;
