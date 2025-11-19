import { Form, redirect } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async ({request}) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const response = await axios.post(newsletterUrl, data);

  console.log(response);

  return null;
}

export const Newsletter = () => {
  return (
    <Form className="form" method="POST">
      <h4 style={{textAlign: "center", marginBottom: "2rem"}}>
        Our Newsletter
      </h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">Name:</label>
        <input type="text" className="form-input" name="name" id="name" defaultValue="Eric" />
      </div>
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">Last Name:</label>
        <input type="text" className="form-input" name="lastName" id="lastName" defaultValue="Stéfano" />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">E-mail:</label>
        <input type="email" className="form-input" name="email" id="email" defaultValue="test@test.com" />
      </div>
      <button type="submit" style={{marginTop: "0.5rem"}} className="btn btn-block">Submit</button>
    </Form>
  )
}