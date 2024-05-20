"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase";
import { toast } from "react-toastify";

const CreateCatalog = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [menuId, setMenuId] = useState<string | null>(null);
  const [menus, setMenus] = useState<any[]>([]);

  useEffect(() => {
    const fetchMenus = async () => {
      const { data: menus, error } = await supabase
        .from("Menu")
        .select("id, name");
      if (error) {
        toast.error("Error fetching menus");
      } else {
        setMenus(menus);
      }
    };
    fetchMenus();
  }, []);

  const handleCreateCatalog = async () => {
    if (!name || !image || !menuId) {
      toast.error("Name, Image, and Menu are required");
      return;
    }

    const { error } = await supabase
      .from("Category")
      .insert({ name, image, description, menu_id: menuId });

    if (error) {
      console.error("Error creating catalog:", error);
      toast.error("Error creating catalog");
    } else {
      toast.success("Catalog created successfully");
      setName("");
      setImage("");
      setDescription("");
      setMenuId(null);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Create Category</h1>
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            className="w-full border p-2 rounded mt-1"
            type="text"
            placeholder="Category Name"
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
        <div>
          <label className="block text-gray-700">Select Menu</label>
          <select
            className="w-full border p-2 rounded mt-1"
            value={menuId ?? ""}
            onChange={(e) => setMenuId(e.target.value)}
          >
            <option value="" disabled>
              Select a menu
            </option>
            {menus.map((menu) => (
              <option key={menu.id} value={menu.id}>
                {menu.name}
              </option>
            ))}
          </select>
        </div>
        <button
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          onClick={handleCreateCatalog}
        >
          Create Category
        </button>
      </div>
    </div>
  );
};

export default CreateCatalog;
