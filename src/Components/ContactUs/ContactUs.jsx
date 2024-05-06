import React from 'react'



function ContactUs() {
  return (
  <div class="flex w-full min-h-screen justify-center  items-center">
    <div class="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0  bg-cyan-700 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow text-white overflow-hidden">
      <div class="flex flex-col justify-between">
        <div>
          <h1 class="font-bold text-4xl tracking-wide">Contact Us</h1>
          <p class="pt-4 text-cyan-100 text-sm">
            You can contact by the help of following
          </p>
        </div>
        <div className='flex flex-col space-y-4'>
          {/* Contact number */}
          <div className='pt-3 pb-2 inline-flex space-x-2 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
                  </svg>
            <span>+(91)933-753-1925</span>

            {/* Email */}
          </div>
                <div className='pt-3 pb-2 inline-flex space-x-2 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
            <span>beancounter@gmail.com</span>
          </div>

          {/* Location */}
          <div className='pt-3 pb-2 inline-flex space-x-2 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                  <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                  </svg>
                  <span>Bhubaneswar</span>  
          </div>
        </div>

        <div className='pt-3 pb-2 inline-flex space-x-2 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="126.445 2.281 589 589" id="facebook"><circle cx="420.945" cy="296.781" r="294.5" fill="#3c5a9a"></circle><path fill="#fff" d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z"></path>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
            <path fill="#03a9f4" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M36,17.12c-0.882,0.391-1.999,0.758-3,0.88c1.018-0.604,2.633-1.862,3-3	c-0.951,0.559-2.671,1.156-3.793,1.372C29.789,13.808,24,14.755,24,20v2c-4,0-7.9-3.047-10.327-6c-2.254,3.807,1.858,6.689,2.327,7	c-0.807-0.025-2.335-0.641-3-1c0,0.016,0,0.036,0,0.057c0,2.367,1.661,3.974,3.912,4.422C16.501,26.592,16,27,14.072,27	c0.626,1.935,3.773,2.958,5.928,3c-2.617,2.029-7.126,2.079-8,1.977c8.989,5.289,22.669,0.513,21.982-12.477	C34.95,18.818,35.342,18.104,36,17.12"></path>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512" id="messenger"><path fill="#0084ff" d="M512 0H0v512h512z"></path><path fill="#fff" d="M257 93c-88.918 0-161 67.157-161 150 0 47.205 23.412 89.311 60 116.807V417l54.819-30.273C225.449 390.801 240.948 393 257 393c88.918 0 161-67.157 161-150S345.918 93 257 93zm16 202l-41-44-80 44 88-94 42 44 79-44-88 94z"></path></svg>
        </div>
      </div>

      {/* Feedback */}
      <div className='relative md:pl-60 pl-0 '>
        <div 
        className='absolute z-0 w-40 h-40 bg-teal-400 rounded-full -right-28 -top-28'>
        </div>
       
       <div className='relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80'>
        <form action="" className=' flex flex-col space-y-4'>

          {/* Name */}
          <div>
            <label for="" className="text-5m">Your Name</label>
          
            <input type="text"
            placeholder='Your Name'
            className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300' />
          </div>
          
            {/* email */}
          <div>
            <label for="" className="text-5m">Email Address</label>
            <input type="email"
            placeholder='Email Address'
            className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300' />
          </div>
          
          {/* Message */}
          <div>
            <label for="" className="text-5m">Message</label>
            <textarea
            placeholder='Message'
            rows={4}
            className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300' ></textarea>
          </div>
          <button className='inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'>Send Message</button>
        </form>
       </div>
      </div>
    </div>
  </div>
      
  )
}


export default ContactUs