import { useEffect, useState } from "react";

function QB() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({ id: "", text: "", type: "", include: false });
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ text: "", type: "", include: false });

  // ✅ Fetch all questions on mount
  useEffect(() => {
    fetch("https://narad-latest.onrender.com/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((err) => console.error("Error fetching questions:", err));
  }, []);

  // ✅ Create Question
  const handleCreate = async () => {
    try {
      const res = await fetch("https://narad-latest.onrender.com/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newQuestion),
      });
      const data = await res.json();
      setQuestions([...questions, data]);
      setNewQuestion({ id: "", text: "", type: "", include: false });
    } catch (err) {
      console.error("Error creating question:", err);
    }
  };

  // ✅ Start editing
  const handleEditClick = (q) => {
    setEditingId(q.id);
    setEditData({ text: q.text, type: q.type, include: q.include });
  };

  // ✅ Update Question
  const handleUpdate = async (id) => {
    try {
      const res = await fetch(`https://narad-latest.onrender.com/questions/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editData),
      });
      const updated = await res.json();
      setQuestions(questions.map((q) => (q.id === id ? updated : q)));
      setEditingId(null);
    } catch (err) {
      console.error("Error updating question:", err);
    }
  };

  return (
    <div className="p-8 bg-white text-black min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Question Bank</h2>

      {/* CREATE */}
      <div className="border p-4 rounded-lg shadow mb-6">
        <h3 className="font-semibold mb-2">Add New Question</h3>
        <input
          type="number"
          placeholder="ID"
          className="border p-2 mr-2"
          value={newQuestion.id}
          onChange={(e) => setNewQuestion({ ...newQuestion, id: Number(e.target.value) })}
        />
        <input
          type="text"
          placeholder="Question Text"
          className="border p-2 mr-2"
          value={newQuestion.text}
          onChange={(e) => setNewQuestion({ ...newQuestion, text: e.target.value })}
        />
        <input
          type="text"
          placeholder="Type (mcq/open)"
          className="border p-2 mr-2"
          value={newQuestion.type}
          onChange={(e) => setNewQuestion({ ...newQuestion, type: e.target.value })}
        />
        <label className="mr-2">
          <input
            type="checkbox"
            checked={newQuestion.include}
            onChange={(e) => setNewQuestion({ ...newQuestion, include: e.target.checked })}
          />
          Include
        </label>
        <button className="bg-black text-white px-3 py-1 rounded" onClick={handleCreate}>
          Add
        </button>
      </div>

      {/* READ + UPDATE */}
      <div className="space-y-4">
        {questions.map((q) => (
          <div key={q.id} className="border p-4 rounded-lg shadow flex justify-between">
            {editingId === q.id ? (
              <>
                <div className="space-x-2">
                  <input
                    type="text"
                    value={editData.text}
                    onChange={(e) => setEditData({ ...editData, text: e.target.value })}
                    className="border p-1"
                  />
                  <input
                    type="text"
                    value={editData.type}
                    onChange={(e) => setEditData({ ...editData, type: e.target.value })}
                    className="border p-1"
                  />
                  <label>
                    <input
                      type="checkbox"
                      checked={editData.include}
                      onChange={(e) => setEditData({ ...editData, include: e.target.checked })}
                    />
                    Include
                  </label>
                </div>
                <button
                  className="bg-green-600 text-white px-3 py-1 rounded"
                  onClick={() => handleUpdate(q.id)}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <div>
                  <p><strong>ID:</strong> {q.id}</p>
                  <p><strong>Text:</strong> {q.text}</p>
                  <p><strong>Type:</strong> {q.type}</p>
                  <p><strong>Include:</strong> {q.include ? "Yes" : "No"}</p>
                </div>
                <button
                  className="bg-blue-600 text-white px-3 py-1 rounded"
                  onClick={() => handleEditClick(q)}
                >
                  Edit
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default QB;
