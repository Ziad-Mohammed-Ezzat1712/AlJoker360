import React, { useState, useEffect } from "react";

export default function CommentsSection() {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "admin",
      date: "November 22, 2023",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      replies: [],
    },
    {
      id: 2,
      name: "Ali Tufan",
      date: "November 22, 2023",
      text: "Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin sagittis dolor sed mi elementum pretium. Donec et justo ante. Vivamus egestas sodales est, eu rhoncus urna semper eu.",
      replies: [],
    },
  ]);

  // form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    website: "",
    comment: "",
  });

  // reply state
  const [replyTo, setReplyTo] = useState(null);

  // load saved user info from localStorage
  useEffect(() => {
    const savedInfo = localStorage.getItem("userInfo");
    if (savedInfo) {
      setForm((prev) => ({ ...prev, ...JSON.parse(savedInfo) }));
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.comment) return;

    const newComment = {
      id: Date.now(),
      name: form.name,
      date: new Date().toLocaleDateString(),
      text: form.comment,
      replies: [],
    };

    if (replyTo) {
      // add reply to a comment
      setComments((prev) =>
        prev.map((c) =>
          c.id === replyTo
            ? { ...c, replies: [newComment, ...c.replies] }
            : c
        )
      );
      setReplyTo(null);
    } else {
      // add new main comment
      setComments([newComment, ...comments]);
    }

    // save name, email, website for next time
    const { name, email, website } = form;
    localStorage.setItem("userInfo", JSON.stringify({ name, email, website }));

    // reset comment only
    setForm({ ...form, comment: "" });
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h3 className="text-lg font-semibold mb-4">{comments.length} Comments</h3>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((c) => (
          <div
            key={c.id}
            className="p-4 border-gray-300 rounded-lg bg-white shadow-sm flex flex-col"
          >
            <div className="flex items-center  justify-between mb-2">
              <div className=""><span className="font-semibold text-[18px] pr-5">{c.name}</span>
              <span className="text-[16px] text-[#050B20]">{c.date}</span></div>
             <div> <button
                onClick={() => setReplyTo(c.id)}
                className="text-[16px] font-medium text-[#D72638]"
              >
                Reply
              </button></div>
            </div>
            <p className="text-[#050B20] text-[16px]">{c.text}</p>

            {/* replies */}
            {c.replies.length > 0 && (
              <div className="mt-3 pl-6 border-l space-y-2">
                {c.replies.map((r) => (
                  <div
                    key={r.id}
                    className="p-2 border rounded bg-gray-50 shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold">{r.name}</span>
                      <span className="text-xs text-gray-500">{r.date}</span>
                    </div>
                    <p className="text-gray-700 text-sm">{r.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Form */}
      <div className="mt-8">
        <h4 className="text-lg font-semibold mb-4">
          {replyTo
            ? `Replying to ${comments.find((c) => c.id === replyTo)?.name}`
            : "Leave a Comment"}
        </h4>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg p-2 w-full"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={handleChange}
            placeholder="Your Website"
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
          <textarea
            name="comment"
            value={form.comment}
            onChange={handleChange}
            placeholder="Comment"
            className="border border-gray-300 rounded-lg p-2 w-full h-28"
            required
          ></textarea>
          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="bg-[#D72638] cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-[#ce2132] transition"
            >
              {replyTo ? "Submit Reply" : "Submit Comment"}
            </button>
            {replyTo && (
              <button
                type="button"
                onClick={() => setReplyTo(null)}
                className="text-gray-500 underline"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
