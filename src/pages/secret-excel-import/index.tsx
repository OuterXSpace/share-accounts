import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { jwtDecode } from "jwt-decode";

const ImportExcel: React.FC = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [fileExcel, setFileExcel] = useState<File | null>(null);
  const [success, setSuccess] = useState(false);

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!fileExcel) {
      setError("Please select a file");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", fileExcel);

      const token = localStorage.getItem("token");

      const response = await fetch(`/api/upload-schedule-file`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setSuccess(true); // Redirect to success page or handle response data as needed
      } else {
        setError("Failed to upload file");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setError("Unable to upload file. Please try again later.");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(""); // Clear previous error message
    const selectedFile = e.target.files && e.target.files[0];
    setFileExcel(selectedFile || null);
  };

  // Check logined
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/secret-login-page");
      return;
    }

    const decodedToken = jwtDecode(token) as { exp: number };
    const expirationTime = decodedToken.exp * 1000 - 1000 * 60; // Convert to milliseconds

    if (Date.now() >= expirationTime) {
      localStorage.removeItem("token");
      router.push("/secret-login-page");
      return;
    }
  });

  return (
    <div className="mt-10">
      <div className="mx-auto w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        {success ? (
          <div className="p-2">
            <label className="text-white">Uploaded successfully</label>
            <button
              onClick={() => router.push("/")}
              type="button"
              className="mt-2 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Go to homepage
            </button>
          </div>
        ) : (
          <form className="p-5" onSubmit={handleUpload}>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="file_input"
            >
              Upload Excel/XLSX file
            </label>
            <input
              className="p-1.5 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="file_input_help"
              id="file_input"
              type="file"
              onChange={handleFileChange}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            <button
              type="submit"
              className="mt-5 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Upload
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ImportExcel;
