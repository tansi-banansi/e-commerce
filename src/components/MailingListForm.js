import React from 'react';

function MailingListForm() {
    return (
        <form className="flex flex-col mx-auto md:mx-0 col-span-1 w-2/3 md:w-1/2 lg:w-full" action="" id='mailing-list'>
            <div>
                <h2 className="font-playfair font-semibold text-2xl mb-1.5 text-soft-white">Join our mailing list</h2>
            </div>
            <div className="w-full">
                <input
                    type="email"
                    name='mail'
                    placeholder="Enter your email here"
                    className="mt-2 p-2 bg-transparent border-b-2 border-soft-white text-soft-white w-full outline-none placeholder:text-light-gray"
                    required
                />
            </div>
            <div className="w-full">
                <button
                    type='submit'
                    value='Subscribe'
                    className="uppercase  mt-2 p-2 border-dusty-rose bg-dusty-rose text-soft-white hover:text-dusty-rose hover:bg-soft-white  w-full transition-all duration-300 font-semibold"
                >
                    Subscribe Now
                </button>
            </div>
        </form>
    );
}

export default MailingListForm;