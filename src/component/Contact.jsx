import React, { useState } from 'react';

const Contact = () => {

  const [data, setData] = useState({
    fullname: '',
    phone: '',
    email: '',
    msg: ''
  });

  const inputEvent = (event) => {

    const { name, value } = event.target;
    // console.log(event.target.name);

    setData((preval) => {
      return {
        ...preval, [name]: value,
      }
    })

  }

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My name is ${data.fullname}.\n My Mobile no is ${data.phone}.\n My email is ${data.email}.\n My message is ${"`"+data.msg+"`"}`)

  }
  return (
    <>
      <div className='mt-4'>
        <h1 className='text-center'>Contact Us</h1>
      </div>
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>

            <form onSubmit={formSubmit}>
              <div class="form-group">
                <label for="exampleFormControlInput1">Full Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name='fullname'
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder="Enter your name" />
              </div>

              <div class="form-group">
                <label for="exampleFormControlInput1">Mobile No</label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name='phone'
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder="Enter your Mobile No" />
              </div>

              <div class="form-group">
                <label for="exampleFormControlInput1">Email Address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name='email'
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="Enter your Email address" />
              </div>

              <div class="form-group">
                <label for="exampleFormControlTextarea1">Enter Your Message</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  name='msg'
                  value={data.msg}
                  onChange={inputEvent}
                  rows="3"></textarea>
              </div>

              <button type="submit" class="btn btn-outline-primary">Submit Form</button>

            </form>
          </div>
        </div>

      </div>
    </>
  );
}

export default Contact;