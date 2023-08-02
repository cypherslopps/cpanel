import React, { useState } from 'react';
import { DashboardHeading, Input, Button, ProtectedRoute } from '../../components'
import useForm from '../../hooks/useForm';
import { validateText, isValid } from '../../lib/validation';

function TicketSupport() {
    const {
        formInputs: ticketSupport, 
        setFormInputs: setTicketSupport, 
        handleChange
    } = useForm({
        subject: "",
        message: ""
    });

    const [subjectError, setSubjectError] = useState("");
    const [messageError, setMessageError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // Submit user ticket
    async function submitTicket(e) {
      e.preventDefault();

      if(isValid(ticketSupport) && !subjectError && !messageError) {
        // Set loading state to true
        setIsLoading(true);

        try { 
          console.log("submitting ticket");
        } catch(error) {
          return error;
        } finally {
          setTimeout(() => setIsLoading(false), 500);
        }
      }
    }

    return (
      <ProtectedRoute>
        <section className='space-y-3 xs:space-y-4 md:space-y-6'>
          <DashboardHeading 
              title="Ticket Support"
              subHeading="Lorem ipsum, dolor sit amet consectetur. adipisicing elit. Maxime nihil praesentium natus ullam odit."
          />

          <section className='w-full sm:w-5/6 lg:w-8/12 mt-4 sm:mt-8'>
            <form className='space-y-3' onSubmit={submitTicket}>
                <Input 
                  label="Subject"
                  name="subject"
                  placeholder=""
                  value={ticketSupport.subject}
                  onChange={handleChange}
                  onBlur={() => validateText(ticketSupport.subject, setSubjectError, "Add a subject", /^[\w]+$/ig)}
                  error={subjectError}
                />

                <Input 
                  label="Message"
                  name="message"
                  type="textarea"
                  placeholder=""
                  value={ticketSupport.message}
                  onChange={handleChange}
                  onBlur={() => validateText(ticketSupport.message, setMessageError, "Add a message", /^[\w]+$/ig)}
                  error={messageError}
                />

                <Button isLoading={isLoading}>Save Details</Button>
            </form>
          </section>
        </section>
      </ProtectedRoute>
    )
}

export default TicketSupport