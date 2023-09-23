import axios from "axios";
interface ContactDataFormat {
  email: string;
  phone_number: string;
  first_name: string;
  message: string;
}

export const contactApi = async (data: ContactDataFormat) => {
  const config = {
    headers: {
      accept: "application/json",
    },
  };
  const response = await axios.post(
    "https://backend.getlinked.ai/hackathon/contact-form",
    data,
    config
  );
  return response;
};
