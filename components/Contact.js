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
        
        <div className='w-full flex items-center justify-center relative'>
            <svg className='absolute top-0 hidden lg:block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#F7F7F7" fillOpacity="1" d="M0,160L13.3,144C26.7,128,53,96,80,96C106.7,96,133,128,160,149.3C186.7,171,213,181,240,160C266.7,139,293,85,320,96C346.7,107,373,181,400,208C426.7,235,453,213,480,186.7C506.7,160,533,128,560,112C586.7,96,613,96,640,85.3C666.7,75,693,53,720,53.3C746.7,53,773,75,800,101.3C826.7,128,853,160,880,176C906.7,192,933,192,960,202.7C986.7,213,1013,235,1040,245.3C1066.7,256,1093,256,1120,234.7C1146.7,213,1173,171,1200,181.3C1226.7,192,1253,256,1280,250.7C1306.7,245,1333,171,1360,144C1386.7,117,1413,139,1427,149.3L1440,160L1440,0L1426.7,0C1413.3,0,1387,0,1360,0C1333.3,0,1307,0,1280,0C1253.3,0,1227,0,1200,0C1173.3,0,1147,0,1120,0C1093.3,0,1067,0,1040,0C1013.3,0,987,0,960,0C933.3,0,907,0,880,0C853.3,0,827,0,800,0C773.3,0,747,0,720,0C693.3,0,667,0,640,0C613.3,0,587,0,560,0C533.3,0,507,0,480,0C453.3,0,427,0,400,0C373.3,0,347,0,320,0C293.3,0,267,0,240,0C213.3,0,187,0,160,0C133.3,0,107,0,80,0C53.3,0,27,0,13,0L0,0Z"></path>
            </svg>
            <form id='contact'  onSubmit={(e) =>handleSubmit(e)} className=' h-screen w-full md:w-5/6 lg:w-11/12  flex  
            items-center justify-center relative'>
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
        </div>
   </>
}

export default Contact
