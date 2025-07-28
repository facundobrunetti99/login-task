import { createContext, useContext, useState } from "react";
import React from "react";
import {
  createStoryRequest,
  getStoriesRequest,
  getStoryRequest,
  deleteStoryRequest,
  updateStoryRequest,
} from "../../api/story.js";

const StoryContext = createContext();
export const useStory = () => {
  const context = useContext(StoryContext);
  if (!context) {
    throw new Error("useStory debe estar dentro de storyProvider");
  }
  return context;
};

export function StoryProvider({ children }) {
  const [stories, setStories] = useState([]);

  const createStory = async (story) => {
    const res = await createStoryRequest(story);
    setStories([...stories, res.data]);
    console.log(res.data);
  };

  const getStories = async () => {
    try {
      const res = await getStoriesRequest();
      setStories(res.data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error(error.response.data.message);
      } else if (error.response && error.response.status === 404) {
        console.error("No se encontraron stories.");
      }
    }
  };

  const deleteStory = async (id) => {
    try {
      await deleteStoryRequest(id);
      setStories(stories.filter((story) => story._id !== id));
      console.log(error);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.error("Story no encontrada para eliminar.");
      }
    }
  };

  const getStory = async (id) => {
    try {
      const res = await getStoryRequest(id);
      return res.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.error("story no encontrada.");
      }
    }
  };

  const updateStory = async (id, story) => {
    try {
      const res = await updateStoryRequest(id, story);
      setStories(stories.map((s) => (s._id === id ? res.data : s)));
      return res.data;
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 404) {
        console.error("Story no encontrada para actualizar.");
      }
    }
  };

  return (
    <StoryContext.Provider
      value={{
        stories,
        createStory,
        getStories,
        getStory,
        updateStory,
        deleteStory,
      }}
    >
      {children}
    </StoryContext.Provider>
  );
}
