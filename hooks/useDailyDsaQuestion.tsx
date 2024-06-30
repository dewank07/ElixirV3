import axios from "axios";
import { useEffect } from "react";

const useDailyDsaQuestion = async () => {
  try {
    const url = "https://us-central1-neetcode-dd170.cloudfunctions.net/getProblemListFunction";

    const response = await axios.post(url, { data: {} });
    return response.data;
  } catch (error) {
    // Handle error, e.g., log it or show an error message
    console.error("Error fetching problem list:", error);
    throw error;
  }
};

export default useDailyDsaQuestion;
