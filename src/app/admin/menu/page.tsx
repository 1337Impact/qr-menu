"use client";

import { useState } from "react";
import { supabase } from "@/utils/supabase";
import { toast } from "react-toastify";

const CreateMenu = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateMenu = async () => {
    if (!name) {
      toast.error("Menu name is required");
      console.log("Menu name is required");
      return;
    }

    const { error } = await supabase
      .from("Menu")
      .insert({ name, image, description });

    if (error) {
      toast.error("Error creating menu");
    } else {
      toast.success("Menu created successfully");
      setName("");
      setImage("");
      setDescription("");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Create Menu</h1>
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 space-y-4">
        <div>
          <label className="block text-gray-700">Menu Name</label>
          <input
            className="w-full border p-2 rounded mt-1"
            type="text"
            placeholder="Menu Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700">Image URL</label>
          <input
            className="w-full border p-2 rounded mt-1"
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700">Description</label>
          <textarea
            className="w-full border p-2 rounded mt-1"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          onClick={handleCreateMenu}
        >
          Create Menu
        </button>
      </div>
    </div>
  );
};

export default CreateMenu;
