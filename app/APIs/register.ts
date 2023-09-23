import axios from "axios";

interface RegDataFormat {
  team_name: string;
  phone_number: string;
  email: string;
  project_topic: string;
  category: number;
  group_size: number;
  privacy_poclicy_accepted: boolean;
}

export const registerUser = async (data: RegDataFormat) => {
  const config = {
    headers: {
      accept: "application/json",
    },
  };
  const response = await axios.post(
    "https://backend.getlinked.ai/hackathon/registration",
    data, config
  );
  return response;
};
