document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    const loginModal = document.getElementById('loginModal');
    const closeLogin = document.getElementById('closeLogin');
    
    const signupButton = document.getElementById('signupButton');
    const signupModal = document.getElementById('signupModal');
    const closeSignup = document.getElementById('closeSignup');
  
    // Open Login Modal
    loginButton.addEventListener('click', () => {
      loginModal.style.display = 'flex';
    });
  
    // Close Login Modal
    closeLogin.addEventListener('click', () => {
      loginModal.style.display = 'none';
    });
  
    // Open Signup Modal
    signupButton.addEventListener('click', () => {
      loginModal.style.display = 'none';
      signupModal.style.display = 'flex';
    });
  
    // Close Signup Modal
    closeSignup.addEventListener('click', () => {
      signupModal.style.display = 'none';
    });
  
    // Close modals on outside click
    window.addEventListener('click', (event) => {
      if (event.target === loginModal) {
        loginModal.style.display = 'none';
      }
      if (event.target === signupModal) {
        signupModal.style.display = 'none';
      }
    });
  });