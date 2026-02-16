import { db } from "./firebase-config.js";
import { collection, addDoc, serverTimestamp } from
"https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

const form = document.getElementById("quoteForm");
const successMessage = document.getElementById("successMessage");
const submitButton = form ? form.querySelector('button[type="submit"]') : null;

function showFormMessage(message, isError = false) {
  if (!successMessage) return;

  successMessage.textContent = message;
  successMessage.style.display = "block";
  successMessage.style.background = isError ? "#ef4444" : "#10b981";
  successMessage.classList.add("show");
  successMessage.scrollIntoView({ behavior: "smooth", block: "center" });

  setTimeout(() => {
    successMessage.classList.remove("show");
    successMessage.style.display = "none";
  }, 5000);
}

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Submitting...";
    }

    try {
      await addDoc(collection(db, "quotes"), {
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
        timestamp: serverTimestamp(),
      });

      form.reset();
      showFormMessage(
        "Thank you! Your quote request has been submitted successfully.",
      );
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      showFormMessage(
        "Error submitting enquiry. Please try again in a moment.",
        true,
      );
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = "Submit Request";
      }
    }
  });
}
