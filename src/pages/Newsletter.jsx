import { Form, redirect, useNavigation } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async ({request}) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);


  try {
    const response = await axios.post(newsletterUrl, data);

    console.log(response);
    toast.success(response.data.msg);

    return redirect("/");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
}

export const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

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
      <button disabled={isSubmitting} type="submit" style={{marginTop: "0.5rem"}} className="btn btn-block">
        {isSubmitting && "submitting" || "submit"}
      </button>
    </Form>
  )
}