import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DeletePage.css";

const DeletePage = () => {
  const [formData, setFormData] = useState({
    id: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({[name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = formData["id"];

    try {
      const api_url = "http://localhost:3000/api/links/" + id;
      const response = await fetch(api_url, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
    navigate("/");
  };

  return (
    <div className="delete-page">
      <h1>Delete Bookmark</h1>
      <form onSubmit={handleSubmit} className="delete-form">
        <label>Bookmark ID:</label>
        <input type="text" name="id" value={formData.id} onChange={handleChange} required />

        <button type="submit">Delete</button>
      </form>
    </div>
  );
}

export default DeletePage;
