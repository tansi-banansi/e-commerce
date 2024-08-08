import React from "react";

function MailingListForm(){
    return(
        <form className="flex flex-col mx-auto md:mx-0 col-span-1 w-2/3 md:w-1/2 lg:w-full " action="">
            <div>
                <h2 className="font-playfair font-semibold text-2xl mb-1.5">Join our mailing list</h2>
            </div>
            <div className="w-full">
                <input type="email" name='mail' placeholder="Enter your email here" className="mt-2 p-2 bg-transparent border-b-2 text-white w-full outline-none" required/>
            </div>
            <div className="w-full">
                <button type='submit' value='Subscribe' className="mt-2 p-1 border bg-white text-black hover:bg-transparent hover:text-white transition w-full cursor-pointer font-semibold">Subscribe Now</button>
            </div>
        </form>
    )
}

export default MailingListForm;