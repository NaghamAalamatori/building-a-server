// Import the 'crypto' module, which provides cryptographic functionalities
import crypto from 'crypto';

// Example 1: Hashing using the SHA-256 algorithm

        // Create a hash object using the 'sha256' algorithm
        // const hash = crypto.createHash('sha256');

        // Add data (password) to the hash object using the update() method
        // hash.update('password1234');

        // Compute the digest (final hash value) in hexadecimal format
        // console.log(hash.digest('hex'));  // Outputs the SHA-256 hash of 'password1234'

        // Example 2: Generating random bytes using randomBytes()

        // crypto.randomBytes(16, (err, buf) => {
        //   if (err) throw err;  // Handle error if any occurs
        //   // Convert the buffer to a hexadecimal string and log it
        //   console.log(buf.toString('hex'));  // Outputs 16 random bytes in hex format
        // });

// Example 3: Encryption and Decryption using AES-256-CBC (a symmetric encryption algorithm)

// Define the encryption algorithm to use (AES-256-CBC requires a 256-bit key and a 16-byte initialization vector)
const algorithm = 'aes-256-cbc';

// Generate a random 32-byte key (256 bits) for AES-256 encryption
const key = crypto.randomBytes(32);

// Generate a random 16-byte initialization vector (IV) for AES-CBC
const iv = crypto.randomBytes(16);

// Create a cipher object for encryption using 'createCipheriv', passing in the algorithm, key, and IV
const cipher = crypto.createCipheriv(algorithm, key, iv);

// Encrypt the message. 'utf8' is the input encoding, and 'hex' is the output encoding
let encrypted = cipher.update('Hello, this is a secret message', 'utf8', 'hex');

// Finalize the encryption (any remaining data is processed here)
encrypted += cipher.final('hex');  // Append the final encrypted block to the result

// Log the encrypted message in hex format (ciphertext)
console.log(encrypted);

// Create a decipher object for decryption using 'createDecipheriv', with the same algorithm, key, and IV
const decipher = crypto.createDecipheriv(algorithm, key, iv);

// Decrypt the encrypted message. 'hex' is the input encoding (ciphertext format), 'utf8' is the output encoding (plain text format)
let decrypted = decipher.update(encrypted, 'hex', 'utf8');

// Finalize the decryption (process any remaining data)
decrypted += decipher.final('utf8');  // Append the final decrypted block to the result

// Log the decrypted message (plain text)
console.log(decrypted);  // Outputs the original message: 'Hello, this is a secret message'
