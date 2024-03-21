import React from 'react'

const subTitle = 'save the day';
const title = (
    <h2 className='title'>Join one day long worskshop for <b>Advance <span>Mastering</span></b> On Sales </h2>
    )
 const desc = "Limited time offer! Hurry up!"
export const Register = () => {
  return (
    <section className='register-section padding-tb pd-b'>
        <div className='container'>
            <div className='row g-4 row-cols-lg-2 row-cols-1 align-items-center'>
                <div className='col'>
                    <div className='section-header'>
                        <span className='subtitle'>{subTitle}</span>
                        {title}
                        <p>{desc}</p>
                    </div>

                </div>
                <div className='col'>
                    <div className='section-wrapper'>
                        <h4>Register now</h4>
                        <form className='register-form'>
                            <input type='text' name='name' placeholder='Username' className='reg-input'></input>
                            <input type='email' name='email' placeholder='email' className='reg-input'></input>
                            <input type='number' name='number' placeholder='number' className='reg-input'></input>
                            <button type='submit' className='lab-btn'> 
                                  Register now
                            </button>


                        </form>

                    </div>
                </div>
            </div>

        </div>

    </section>
  )
}
