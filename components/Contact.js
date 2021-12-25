import React, { useState } from 'react'

const Contact = () => {
    
    const [from,setFrom] = useState()
    const [message,setMessage] = useState()
    const [name,setName] = useState()
    const [success,setSuccess] = useState(false)
    const [fail,setFail] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("https://www.mohamedfarag.engineer/api/emails",{
            method:"POST",
            body:JSON.stringify({
                "from":from,
                "message":message,
                "name":name
            }),
            headers: {
                'Content-Type': 'application/json'
                
            },
        })
        .then(res => {
            if(res == "success"){
                setSuccess(true)
            }
            e.target.reset()
        })
        .catch(err => setFail(true))
    }
    return <>
        <form id='contact'  onSubmit={(e) =>handleSubmit(e)}
        className=' h-screen w-full md:w-5/6 lg:w-11/12 lg:mt-52 flex  items-center justify-center relative'>
            <div className='w-1/2 h-full lg:flex items-center justify-center hidden'>
                <img src='mail.svg ' className='w-full h-3/4' />
            </div>
            <div className='flex flex-col items-center justify-start mt-44 lg:mt-0 lg:justify-center w-full lg:w-1/2 h-full'>
                <span className='font-bold text-xl text-sc'>Contact Me</span>
                <div className='mt-5 w-3/4 md:w-1/2 flex flex-col items-start'>
                    <label>Name</label>
                    <input type="text" onChange={(e)=>setName(e.target.value)} 
                    className='w-full p-3 rounded-sm border-2 mt-2' required={true} />
                </div>
                <div className='mt-5 w-3/4 md:w-1/2 flex flex-col items-start'>
                    <label>Email</label>
                    <input type="email" onChange={(e)=>setFrom(e.target.value)} name="_replyto" required={true} 
                    className='w-full p-3 rounded-sm border-2 mt-2' />
                </div>
                <div className='mt-5 w-3/4 md:w-1/2 flex flex-col items-start'>
                    <label>Message</label>
                    <textarea name="message" required={true} onChange={(e)=>setMessage(e.target.value)}
                    className='w-full h-52 resize-none p-3 rounded-sm border-2 mt-2'     />
                </div>
                <input type="submit" className='w-3/4 md:w-1/2 mt-5 p-3 rounded-sm bg-sc hover:bg-mc 
                    text-white font-bold text-xl cursor-pointer' value="Send"/>
                  
                {success && <div className='w-11/12 md:w-1/2 bg-green-500 h-16 flex items-center justify-between p-2 
                            rounded-md mt-0 absolute bottom-0'>
                    <span className='text-white'>Thank you for conecting with me, I
                     will reach out to you soon</span>
                    <span className="w-10 cursor-pointer" onClick={()=>setSuccess(false)}>
                        <img src='close2.svg' className="w-8 h-8" />
                    </span>
                </div> }
                {fail && <div className='w-11/12 md:w-1/2 bg-red-400 h-16 flex items-center justify-between p-2 
                            rounded-md mt-0 absolute bottom-0'>
                    <span className='text-white'>Somthing went wrong, please try again</span>
                    <span className="w-10 cursor-pointer" onClick={()=>fail(false)}>
                        <img src='close2.svg' className="w-8 h-8" />
                    </span>
                </div> }
            </div>
            
        </form>
   </>
}

export default Contact
