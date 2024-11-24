import axios from "axios";

const GOOGLE_API_KEY = "YOUR_GOOGLE_API_KEY"; // Replace with your API key
const SEARCH_ENGINE_ID = "YOUR_SEARCH_ENGINE_ID"; // Replace with your Search Engine ID

export const fetchImages = async (query) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/customsearch/v1`,
      {
        params: {
          key: GOOGLE_API_KEY,
          cx: SEARCH_ENGINE_ID,
          q: query,
          searchType: "image",
          num: 6, // Number of images to fetch
        },
      }
    );
    return response.data.items.map((item) => item.link); // Extract image URLs
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};
