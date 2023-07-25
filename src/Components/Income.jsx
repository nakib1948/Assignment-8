import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Income = () => {
  const [displayTexts, setDisplayTexts] = useState([]);

  const { register, handleSubmit,reset  } = useForm();
  const onSubmit = (data) => {
    setDisplayTexts([...displayTexts, data]);
    reset()
  };

  const handleDeleteIncome = (index) => {
    const updatedTasks = [...displayTexts];
    updatedTasks.splice(index, 1);
    setDisplayTexts(updatedTasks);
  };

  return (
    <div>
      <Navbar />

      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
        <header className="py-6  text-purple text-2xl font-bold">
          <h1>Add your Income</h1>
        </header>
        <section className="p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
            <textarea
              {...register("description", { required: true })}
              rows="4"
              cols="50"
              className="w-full border  border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
              placeholder="description"
            />

            <input
              {...register("number", { required: true })}
              type="number"
              placeholder="amount"
              className="input  input-bordered input-info w-full max-w-xs my-4"
            />
            <br />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Add Income
            </button>
          </form>

          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Description</th>
                  <th>Income</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {displayTexts.map((text, index) => (
                  <tr
                    key={index}
                    className="bg-white rounded-lg p-4 mt-4 shadow-md"
                  >
                    <td>{index+1}</td>
                    <td>{text.description}</td>
                    <td>{text.number}</td>
                    <td>
                      <button className="btn btn-circle btn-outline btn-sm"
                      onClick={() => handleDeleteIncome(index)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Income;
