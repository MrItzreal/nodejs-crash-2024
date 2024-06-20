import crypto from "crypto";

// createHash()
/* SHA256: Secure Hash Algorithm 256-bit used for security purposes, 
including password storage, file integrity checks, and digital signatures.*/
// In a real application, you would not pass a password like this:
const hash = crypto.createHash("sha256");
hash.update("password1234");
console.log(hash.digest("hex"));

// randomBytes()
// generates cryptographically secured random data.
// Suitable to create: Encryption Keys,Authentication Tokens,Unique IDs, Nonces.
crypto.randomBytes(16, (err, buf) => {
  if (err) throw err;
  console.log(buf.toString("hex"));
});

//Ciphertext: encrypted text transformed from plaintext using an encryption algorithm.
/*
 IV = initialization vector: random value that adds security to the encryption process.It
 makes sure encrypting the same data multiple times with the same key results in different ciphertext.
 */

//createCipheriv(): encrypts data.
const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update("Learning the PERN stack", "utf8", "hex");
encrypted += cipher.final("hex");
console.log(encrypted);

//createDecipheriv(): decrypts data.
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final("utf8");
console.log(decrypted);

/* IMPORTANT NOTES:
- Algorithms like: "sha256", "aes-256-cbc", "hex" , "utf8" all mean something they are not just randomly used.
### The order of arguments matters when encrypting & decrypting:
- For instance, let encrypted = cipher.update("Learning the PERN stack", "utf8", "hex"): this says: "turn this sentence (Learning the PERN stack) which is in a string format (utf8) into an encoded version like ("hex")."
- Whereas, let decrypted = decipher.update(encrypted, "hex", "utf8"): here we say: "turn my encrypted message which is in a "hex" version into a string which is "utf8" format."*/
