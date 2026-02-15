import { db } from "./firebase-config.js";
import { collection, addDoc, serverTimestamp } 
from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

const form = document.getElementById("quoteForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    await addDoc(collection(db, "enquiries"), {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      company: document.getElementById("company").value,
      elevatorType: document.getElementById("elevatorType").value,
      floors: document.getElementById("floors").value,
      capacity: document.getElementById("capacity").value,
      location: document.getElementById("location").value,
      message: document.getElementById("message").value,
      status: "new",
      timestamp: serverTimestamp()
    });

    // Show success message
    document.getElementById('successMessage').classList.add('show');
    form.reset();

  } catch (error) {
    console.error("Error saving enquiry:", error);
    alert("Something went wrong.");
  }
});
