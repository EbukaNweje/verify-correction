import React, { useState } from 'react'
// import '../css/Faq.css'

const Faq = () => {
    const [first, setFirst] = useState(false)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)
    const [fourth, setFourth] = useState(false)
    const [fifth, setFifth] = useState(false)
    const [sixth, setSixth] = useState(false)
    const [seventh, setSeventh] = useState(false)
    const [eight, setEight] = useState(false)
    const [nine, setNine] = useState(false)
  return (
    <div className='Faq_container'>
      <div className="Question_holder">
      <div className="Faq_questions" onClick={()=> {
                nine? (setNine(false)): setNine(true)}}>
           <section>
           <p>Do I get a refund if I don’t get verified?</p>
            {
                nine?(<h3>-</h3>): <h3>+</h3>
            }
           </section>
              {
                   nine? (
                    <article>
                      Since the final decision is in the hands of Instagram, we can not guarantee verification. For the submission-only (standard) package, yes we do offer refunds; for the Platinum Verification package we offer a refund of the submission fee (200$), but this will take away your free re-submission and press optimisation consult.
                   </article>
                   ) : null
              }
        </div>
      <div className="Faq_questions" onClick={()=> {
                first? (setFirst(false)): setFirst(true)}}>
           <section>
           <p>Does this actually work?</p>
            {
                first?(<h3>-</h3>): <h3>+</h3>
            }
           </section>
              {
                   first? (
                    <article>
                      Yes. We have verified hundreds of accounts successfully using our technique, and we’re the #1 verification agency used by record labels and talent agencies. We have a very high success rate, but keep in mind that we cannot make any guarantees.
                   </article>
                   ) : null
              }
        </div>
        <div className="Faq_questions" onClick={()=> {
                second? (setSecond(false)): setSecond(true)}}>
           <section>
           <p>Is it guaranteed that I will get verified?</p>
            {
                second?(<h3>-</h3>): <h3>+</h3>
            }
           </section>
              {
                   second? (
                    <article>
                      No. We cannot guarantee you will become verified after using our service(s). Even though it is our #1 priority to get you verified, in the end it is up to Instagram to decide whether or not to verify you. However, we will make sure you are eligible to become verified by working on your online PR and submitting the request for you through a media partner panel.
                   </article>
                   ) : null
              }
        </div>
        <div className="Faq_questions" onClick={()=> {
                third? (setThird(false)): setThird(true)}}>
           <section>
           <p>Can’t I just request verification via the Instagram app?</p>
            {
                third?(<h3>-</h3>): <h3>+</h3>
            }
           </section>
              {
                   third? (
                    <article>
                       You can, but 99% of these requests are denied by Instagram. We have access to a media partner panel which lets us talk directly to Instagram and Meta, and allows us to explain why you should get verified and has the highest possible success rate.
                   </article>
                   ) : null
              }
        </div>
        <div className="Faq_questions" onClick={()=> {
                fourth? (setFourth(false)): setFourth(true)}}>
           <section>
           <p>What happens after placing my order?</p>
            {
                fourth?(<h3>-</h3>): <h3>+</h3>
            }
           </section>
              {
                   fourth? (
                    <article>
                      After placing your order, our team of PR specialists will review your page and current online PR (if any). We’ll get back to you within a couple of hours, and we’ll go over some details about the process. If you’ve purchased the package which includes the press articles, we’ll need some information from you to get started on writing the articles. We process orders 24/7, so you’re sure to get a quick response from us.
                   </article>
                   ) : null
              }
        </div>
        <div className="Faq_questions"  onClick={()=> {
                fifth? (setFifth(false)): setFifth(true)}}>
           <section>
           <p>What does PR mean?</p>
            {
                fifth?(<h3>-</h3>): <h3>+</h3>
            }
           </section>
              {
                   fifth? (
                    <article>
                      PR stands for your online Press Articles, those are articles about you that can be found online. It’s a mandatory requirement for verification and is really important. If you already have some PR, you can proceed with our submission-only (standard) package, if you don’t have PR yet, our editors are more than happy to help you get articles published with our Premium Verification Package.
                   </article>
                   ) : null
              }
        </div>
        <div className="Faq_questions" onClick={()=> {
                sixth? (setSixth(false)): setSixth(true)}}>
           <section>
           <p>What payment methods do you accept?</p>
            {
                sixth?(<h3>-</h3>): <h3>+</h3>
            }
           </section>
              {
                   sixth? (
                    <article>
                     We currently accept via zelle cash app or crypto currency.
                     {/*  we’re working on accepting paypal via family and friends for fast processing as well */}
                   </article>
                   ) : null
              }
        </div>
        <div className="Faq_questions"  onClick={()=> {
                seventh? (setSeventh(false)): setSeventh(true)}}>
           <section>
           <p>Is this safe for my Instagram account?</p>
            {
                seventh?(<h3>-</h3>): <h3>+</h3>
            }
           </section>
              {
                   seventh? (
                    <article>
                      Yes. We do verification the legit way. We’re simply using our Media Partner contacts with Instagram and Facebook to get your profile submitted for verification directly to the verifications department. Your badge will be 100% safe as long as you follow Instagram’s community guidelines.

Please note: Changing your Instagram username will automatically remove your badge. If you wish to change your username after being verified, please reach out to us first.
                   </article>
                   ) : null
              }
        </div>
        <div className="Faq_questions" onClick={()=> {
                eight? (setEight(false)): setEight(true)}}>
           <section>
           <p>Will this work for my industry?</p>
            {
                eight?(<h3>-</h3>): <h3>+</h3>
            }
           </section>
              {
                   eight? (
                    <article>
                       We’re able to verify profiles in every industry, except those prohibited by Instagram. For more information about Instagram’s prohibited industries, please check this official Instagram article.
                   </article>
                   ) : null
              }
        </div>
        
      </div>
    </div>
  )
}

export default Faq