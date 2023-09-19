import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040] m-auto md:pl-20 pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-centre text-[#001b5e] ">
        Contact
      </h1>
      <form
        action="https://getform.io/f/aebc3e44-30be-4b9f-9107-2343cbb134fc"
        method="POST"
        encType="multipart/form-data"
      >

      <div className="grid md:grid-cols-2 gap-4 w-full py-2 ">
        <div className="flex flex-col">
          <label className="uppercase text-sm py-3">Name</label>
          <input
            className=" border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
          />
        </div>

        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Phone Number</label>
          <input
            className=" border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            name="phone"
          />
        </div>
      </div>
      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2">Email</label>
        <input
          className=" border-2 rounded-lg p-3 flex border-gray-300"
          type="email"
          name="email"
        />
      </div>
      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2">Subject</label>
        <input
          className=" border-2 rounded-lg p-3 flex border-gray-300"
          type="text"
          name="subject"
        />
      </div>
      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2">Message</label>
        <textarea
          className="border-2 rounded-lg p-3 border-gray-300"
          rows="10"
          name="message"
        ></textarea>
      </div>
      <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg" type="submit">
        Send Message
      </button>
      </form>
    </div>
  );
};

export default Contact;
