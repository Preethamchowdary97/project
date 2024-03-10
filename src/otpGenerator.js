const crypto = require('crypto');

function generateOTP() {
  // Generate a random six-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000);
  return otp.toString();
}

// Example usage
const generatedOTP = generateOTP();
console.log('Generated OTP:', generatedOTP);
