
---

# UTF-8 Encoder/Decoder

This project is a high-performance **UTF-8 Encoder/Decoder** written in JavaScript. It implements the entire UTF-8 encoding and decoding pipeline, which involves encoding text to UTF-8 byte sequences and decoding back to the original text. The project aims to educate and demonstrate the inner workings of the UTF-8 encoding format while providing a robust utility for working with encoded text data.

## 🚀 Features

- **Complete UTF-8 Encoding Pipeline**:
  - Convert strings to UTF-8 encoded byte sequences.
  - Handle characters of any Unicode code point, including multi-byte characters.
  - Support for encoding and decoding text data efficiently.

- **UTF-8 Decoding** (Planned for Future Updates):
  - Decode UTF-8 encoded byte sequences back to their original string form.

- **Modular Architecture**:
  - Each step of the UTF-8 encoding and decoding process is divided into small, reusable modules (encoding, decoding, etc.).

## 🏗️ Project Structure

The project is organized into the following directories:

```
utf8-encoder/
├── src/
│   ├── encoding/                        # UTF-8 encoding logic
│   │   ├── encoder.js                   # Converts string to UTF-8 encoded bytes
│   │   ├── decoder.js                   # Decodes UTF-8 bytes back to string (planned)
│   ├── utils/                           # Helper utilities (byte and string manipulations)
│   ├── index.js                         # Entry point for running encoding/decoding
├── test/                                # Unit tests for core functionality
├── package.json                         # Project dependencies and scripts
└── README.md                            # Project documentation
```

## 🛠️ Installation

### Prerequisites

- **Node.js** (v16.x or higher)
- **npm** (Node Package Manager)

### Step-by-Step Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/pawvan/utf8_encoder.git
   cd utf8_encoder
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Test the setup**:
   Ensure everything is set up correctly by running:
   ```bash
   node src/index.js
   ```

## ⚙️ Usage

### Encoding a String to UTF-8

To encode a string to its UTF-8 byte representation:

1. **Prepare a string**:
   Prepare the string you want to encode. For example, `"Hello, World!"`.

2. **Run the encoding process**:
   ```bash
   node src/index.js encode "Hello, World!"
   ```

3. The script will output the UTF-8 encoded bytes for the provided string.

### Example of UTF-8 Encoding

Here’s an example of encoding a string (`"Hello, World!"`) to UTF-8:

```js
import { encodeToUTF8 } from './encoding/encoder';

// Encode the string to UTF-8
const utf8Bytes = encodeToUTF8('Hello, World!');
console.log(utf8Bytes); // Output: [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33]
```

### Decoding a UTF-8 Encoded Byte Array (Planned)

A future update will include decoding functionality to reverse the process, turning UTF-8 encoded byte arrays back into the original text string.

## 📈 Testing

We use **unit tests** to ensure each module works correctly. The tests are located in the `test/` directory.

To run the tests:

```bash
npm test
```

### Example Test:

```js
import { encodeToUTF8 } from '../src/encoding/encoder';

test('UTF-8 encoding works on a string', () => {
  const result = encodeToUTF8('Hello, World!');
  expect(result).toEqual([72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33]);
});
```

## 🎯 Roadmap

1. **UTF-8 Decoding**: Implement the decoding pipeline (converting UTF-8 byte arrays back to the original string).
2. **Optimization**: Improve the performance of the encoding and decoding processes.
3. **Support for Other Encodings**: Extend support to handle other encodings (e.g., ASCII, UTF-16).

## 🤝 Contributing

Contributions are welcome! If you want to contribute to this project, please fork the repository, make your changes, and create a pull request.

### How to Contribute

1. Fork the repo.
2. Create a feature branch (`git checkout -b feature/my-new-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/my-new-feature`).
5. Create a new Pull Request.

Please ensure that your code follows the existing style, includes unit tests, and does not break the build.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📚 Resources

- **UTF-8 Encoding**: [Wikipedia - UTF-8](https://en.wikipedia.org/wiki/UTF-8)
- **Huffman Coding**: [Wikipedia - Huffman Coding](https://en.wikipedia.org/wiki/Huffman_coding)

## **Contact**

If you have any questions or feedback about this project, feel free to reach out:

- **Email**: pawanpediredla@gmail.com
- **GitHub**: [github.com/pawvan/utf8_encoder](https://github.com/pawvan/utf8_encoder)

---

