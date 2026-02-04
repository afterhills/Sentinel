function checkPasscode() {
  const input = document.getElementById("passcode").value;
  const status = document.getElementById("status");

  const CORRECT_PASSCODE = "unicorn90";

  if (input !== CORRECT_PASSCODE) {
    status.innerText = "ACCESS DENIED";
    return;
  }

  status.innerText = "Initializing modules...";

  setTimeout(() => {
    status.innerText = "Loading OSINT framework...";
  }, 1200);

  setTimeout(() => {
    window.location.href = "framework.html";
  }, 2500);
}
