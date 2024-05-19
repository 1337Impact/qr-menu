"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase";
import { toast } from "react-toastify";

const CreateItem = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number | string>("");
  const [images, setImages] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState<string>("");
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase
        .from("Category")
        .select("id, name");
      if (error) {
        toast.error("Error fetching categories");
      } else {
        setCategories(data);
      }
    };
    fetchCategories();
  }, []);

  const handleCreateItem = async () => {
    if (!name || !price || !images || !categoryId) {
      toast.error("Please fill in all required fields");
      return;
    }

    const { error } = await supabase.from("Item").insert({
      name,
      price: parseFloat(price as string),
      images: [images],
      description,
      category_id: categoryId,
    });

    if (error) {
      toast.error("Error creating item");
      console.error("Error creating item:", error);
    } else {
      toast.success("Item created successfully");
      setName("");
      setPrice("");
      setImages("");
      setDescription("");
      setCategoryId("");
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h1 className="text-3xl font-bold mb-8 text-center">Create Item</h1>
      <div className="mb-4">
        <label className="block text-gray-700">Item Name</label>
        <input
          className="border p-2 w-full rounded-lg"
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Price</label>
        <input
          className="border p-2 w-full rounded-lg"
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Image URL</label>
        <input
          className="border p-2 w-full rounded-lg"
          type="text"
          placeholder="Image URL"
          value={images}
          onChange={(e) => setImages(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          className="border p-2 w-full rounded-lg"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Category</label>
        <select
          className="border p-2 w-full rounded-lg"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option value="" disabled>
            Select a category
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 w-full"
        onClick={handleCreateItem}
      >
        Create Item
      </button>
    </div>
  );
};

export default CreateItem;
